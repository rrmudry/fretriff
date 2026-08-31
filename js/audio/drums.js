/**
 * Web Audio Rhythm Drum & Metronome Engine
 * Synthesizes rock drums (kick, snare, hihat) purely via Web Audio API nodes
 */

class DrumEngine {
  constructor(guitarSynth) {
    this.guitarSynth = guitarSynth;
    this.bpm = 90;
    this.isPlaying = false;
    this.currentPattern = 'rock_standard';
    this.drumVolume = 0.7;
    this.timerId = null;
    this.nextBeatTime = 0;
    this.currentStep = 0; // 0 to 15 (16th notes)
    this.listeners = new Set();
  }

  getAudioContext() {
    this.guitarSynth.init();
    return this.guitarSynth.audioCtx;
  }

  setBpm(bpm) {
    this.bpm = Math.max(40, Math.min(220, bpm));
  }

  setPattern(pattern) {
    this.currentPattern = pattern;
  }

  setVolume(vol) {
    this.drumVolume = Math.max(0, Math.min(1, vol));
  }

  onStep(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notifyStep(step, beatIndex, totalBeats, time) {
    this.listeners.forEach(cb => {
      try {
        cb({ step, beatIndex, totalBeats, time, bpm: this.bpm });
      } catch (e) {
        console.error(e);
      }
    });
  }

  /**
   * Synthesizes a punchy rock kick drum
   */
  playKick(time) {
    const ctx = this.getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(38, time + 0.08);

    gain.gain.setValueAtTime(this.drumVolume * 0.9, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.35);

    osc.connect(gain);
    gain.connect(this.guitarSynth.masterGain);

    osc.start(time);
    osc.stop(time + 0.35);
  }

  /**
   * Synthesizes a crisp electric rock snare drum
   */
  playSnare(time) {
    const ctx = this.getAudioContext();
    
    // Tone body
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, time);
    osc.frequency.exponentialRampToValueAtTime(80, time + 0.1);

    oscGain.gain.setValueAtTime(this.drumVolume * 0.6, time);
    oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);
    osc.connect(oscGain);
    oscGain.connect(this.guitarSynth.masterGain);

    // Snare Wire Noise Burst
    const bufferSize = Math.floor(ctx.sampleRate * 0.2);
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.setValueAtTime(1000, time);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(this.drumVolume * 0.7, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.guitarSynth.masterGain);

    osc.start(time);
    noise.start(time);
    osc.stop(time + 0.15);
    noise.stop(time + 0.22);
  }

  /**
   * Synthesizes a metallic hi-hat
   */
  playHiHat(time, isOpen = false) {
    const ctx = this.getAudioContext();
    const bufferSize = Math.floor(ctx.sampleRate * (isOpen ? 0.35 : 0.05));
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const bandpass = ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(9500, time);
    bandpass.Q.setValueAtTime(2.5, time);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(this.drumVolume * 0.4, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + (isOpen ? 0.3 : 0.05));

    noise.connect(bandpass);
    bandpass.connect(gain);
    gain.connect(this.guitarSynth.masterGain);

    noise.start(time);
    noise.stop(time + (isOpen ? 0.35 : 0.06));
  }

  /**
   * Synthesizes metronome click
   */
  playClick(time, isDownbeat = false) {
    const ctx = this.getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.frequency.setValueAtTime(isDownbeat ? 1200 : 800, time);
    gain.gain.setValueAtTime(this.drumVolume * 0.8, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

    osc.connect(gain);
    gain.connect(this.guitarSynth.masterGain);

    osc.start(time);
    osc.stop(time + 0.05);
  }

  start(onBeatCallback) {
    if (this.isPlaying) return;
    this.isPlaying = true;
    const ctx = this.getAudioContext();
    this.nextBeatTime = ctx.currentTime + 0.05;
    this.currentStep = 0;
    this.scheduleLoop();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  scheduleLoop() {
    if (!this.isPlaying) return;
    const ctx = this.getAudioContext();
    const lookahead = 0.1; // seconds
    const scheduleAheadTime = 0.2; // seconds

    while (this.nextBeatTime < ctx.currentTime + scheduleAheadTime) {
      this.scheduleStep(this.currentStep, this.nextBeatTime);
      const stepDuration = (60 / this.bpm) / 4; // 16th note step
      this.nextBeatTime += stepDuration;
      this.currentStep = (this.currentStep + 1) % 16;
    }

    this.timerId = setTimeout(() => this.scheduleLoop(), lookahead * 1000);
  }

  scheduleStep(step, time) {
    const beatIndex = Math.floor(step / 4); // 0, 1, 2, 3 (quarter notes)
    const isQuarterNote = (step % 4 === 0);
    const isEighthNote = (step % 2 === 0);

    if (isQuarterNote) {
      this.notifyStep(step, beatIndex, 4, time);
    }

    if (this.currentPattern === 'metronome') {
      if (isQuarterNote) {
        this.playClick(time, beatIndex === 0);
      }
      return;
    }

    if (this.currentPattern === 'rock_standard') {
      // 8th note hihats
      if (isEighthNote) {
        this.playHiHat(time, step === 14);
      }
      // Kick on beat 1 (step 0) and beat 3 (step 8)
      if (step === 0 || step === 8 || step === 10) {
        this.playKick(time);
      }
      // Snare on beat 2 (step 4) and beat 4 (step 12)
      if (step === 4 || step === 12) {
        this.playSnare(time);
      }
    } else if (this.currentPattern === 'shuffle') {
      // Swung 12-bar blues shuffle feel
      if (step === 0 || step === 3 || step === 4 || step === 7 || step === 8 || step === 11 || step === 12 || step === 15) {
        this.playHiHat(time, false);
      }
      if (step === 0 || step === 8) {
        this.playKick(time);
      }
      if (step === 4 || step === 12) {
        this.playSnare(time);
      }
    } else if (this.currentPattern === 'half_time') {
      if (isEighthNote) this.playHiHat(time);
      if (step === 0) this.playKick(time);
      if (step === 8) this.playSnare(time);
    } else if (this.currentPattern === 'pop_groove') {
      if (isQuarterNote) this.playKick(time);
      if (step === 4 || step === 12) this.playSnare(time);
      if (step % 2 === 1) this.playHiHat(time);
    }
  }
}

export { DrumEngine };
