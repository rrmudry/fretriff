/**
 * Web Audio Guitar Synthesizer & Effects Engine
 * Supports Overdrive Electric, Clean Electric, and Acoustic Pluck modes
 */

import { STANDARD_TUNING_MIDI, midiToFrequency } from '../utils/music-theory.js';

class GuitarSynth {
  constructor() {
    this.audioCtx = null;
    this.masterGain = null;
    this.soundMode = 'overdrive'; // 'overdrive', 'clean', 'acoustic'
    this.volume = 0.8;
    this.activeNodes = [];
    this.isMuted = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();
      
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);

      // Create Distortion Curve for Overdrive
      this.distortionNode = this.audioCtx.createWaveShaper();
      this.distortionNode.curve = this.makeDistortionCurve(25);
      this.distortionNode.oversample = '4x';

      // Cabinet Filter (Speaker simulation - rolls off harsh high fizz)
      this.cabinetFilter = this.audioCtx.createBiquadFilter();
      this.cabinetFilter.type = 'lowpass';
      this.cabinetFilter.frequency.setValueAtTime(4200, this.audioCtx.currentTime);
      this.cabinetFilter.Q.setValueAtTime(1.2, this.audioCtx.currentTime);

      // Presence / Mid boost (Guitar amp mid hump ~1.5kHz)
      this.midBoost = this.audioCtx.createBiquadFilter();
      this.midBoost.type = 'peaking';
      this.midBoost.frequency.setValueAtTime(1600, this.audioCtx.currentTime);
      this.midBoost.gain.setValueAtTime(4.0, this.audioCtx.currentTime);
      this.midBoost.Q.setValueAtTime(1.0, this.audioCtx.currentTime);

      // Dry / Wet Routing
      this.distortionNode.connect(this.midBoost);
      this.midBoost.connect(this.cabinetFilter);
      this.cabinetFilter.connect(this.masterGain);
      this.masterGain.connect(this.audioCtx.destination);
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  setSoundMode(mode) {
    this.soundMode = mode;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volume, this.audioCtx.currentTime, 0.05);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.setVolume(this.volume);
    return this.isMuted;
  }

  makeDistortionCurve(amount = 20) {
    const k = typeof amount === 'number' ? amount : 20;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      // Soft-knee clipping algorithm
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  /**
   * Synthesizes an individual plucked guitar string
   * @param {number} midi MIDI note number
   * @param {number} velocity 0.0 - 1.0
   * @param {number} startTime Web Audio scheduled time
   * @param {number} duration Note sustain duration in seconds
   */
  playStringPluck(midi, velocity = 0.8, startTime = null, duration = 2.5) {
    this.init();
    const ctx = this.audioCtx;
    const t = startTime || ctx.currentTime;
    const freq = midiToFrequency(midi);

    // Multi-harmonic oscillator stack for rich string body
    const oscFundamental = ctx.createOscillator();
    const oscHarmonic1 = ctx.createOscillator();
    const oscHarmonic2 = ctx.createOscillator();

    // Subtle detuning creates realistic physical string chorus
    oscFundamental.type = this.soundMode === 'overdrive' ? 'sawtooth' : 'triangle';
    oscFundamental.frequency.setValueAtTime(freq, t);

    oscHarmonic1.type = 'sawtooth';
    oscHarmonic1.frequency.setValueAtTime(freq * 2, t);
    oscHarmonic1.detune.setValueAtTime(3, t);

    oscHarmonic2.type = 'sine';
    oscHarmonic2.frequency.setValueAtTime(freq * 3, t);
    oscHarmonic2.detune.setValueAtTime(-4, t);

    // Envelope Gain
    const stringGain = ctx.createGain();
    // Dynamic string lowpass filter (pluck attack has high brightness, dampens rapidly)
    const pluckFilter = ctx.createBiquadFilter();
    pluckFilter.type = 'lowpass';

    const brightness = this.soundMode === 'overdrive' ? 6000 : (this.soundMode === 'acoustic' ? 7500 : 4000);
    pluckFilter.frequency.setValueAtTime(brightness, t);
    pluckFilter.frequency.exponentialRampToValueAtTime(Math.max(freq * 1.5, 400), t + duration);

    // Attack - Decay - Sustain - Release
    const attackTime = 0.005; // sharp electric pick attack
    const peakGain = velocity * (this.soundMode === 'overdrive' ? 0.35 : 0.45);
    const sustainGain = peakGain * 0.4;

    stringGain.gain.setValueAtTime(0.0001, t);
    stringGain.gain.linearRampToValueAtTime(peakGain, t + attackTime);
    stringGain.gain.exponentialRampToValueAtTime(sustainGain, t + 0.15);
    stringGain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    // Pick transient noise burst (simulates pick striking the metal string)
    const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.02), ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseBuffer.length; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.004));
    }
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(velocity * 0.25, t);

    // Connect node chain
    oscFundamental.connect(pluckFilter);
    oscHarmonic1.connect(pluckFilter);
    oscHarmonic2.connect(pluckFilter);
    noiseSource.connect(pluckFilter);

    pluckFilter.connect(stringGain);

    if (this.soundMode === 'overdrive') {
      stringGain.connect(this.distortionNode);
    } else {
      stringGain.connect(this.masterGain);
    }

    // Schedule start & stop
    oscFundamental.start(t);
    oscHarmonic1.start(t);
    oscHarmonic2.start(t);
    noiseSource.start(t);

    oscFundamental.stop(t + duration);
    oscHarmonic1.stop(t + duration);
    oscHarmonic2.stop(t + duration);
    noiseSource.stop(t + 0.02);
  }

  /**
   * Plays a single note given string index (0-5) and fret (0-22)
   */
  playNote(stringIndex, fret, duration = 2.0, startTime = null) {
    if (fret < 0) return; // Muted string
    const baseMidi = STANDARD_TUNING_MIDI[stringIndex];
    const midi = baseMidi + fret;
    this.playStringPluck(midi, 0.85, startTime, duration);
  }

  /**
   * Strums an entire chord with realistic strum timing offset
   * @param {Array<number>} frets Array of 6 frets [-1, 3, 2, 0, 1, 0] (-1 is muted/x)
   * @param {string} direction 'down' or 'up'
   * @param {number} speed Strum duration in ms (default 30ms between strings)
   * @param {number} startTime Web Audio start time
   * @param {number} duration Sustain duration in seconds
   */
  playChord(frets, direction = 'down', speed = 25, startTime = null, duration = 2.8) {
    this.init();
    const t = startTime || this.audioCtx.currentTime;
    const stringOrder = direction === 'down' 
      ? [0, 1, 2, 3, 4, 5] 
      : [5, 4, 3, 2, 1, 0];

    let delayIndex = 0;
    stringOrder.forEach((strIdx) => {
      const fret = frets[strIdx];
      if (fret >= 0) {
        const stringTime = t + (delayIndex * speed) / 1000;
        // Subtle velocity humanization
        const velocity = 0.7 + Math.random() * 0.2;
        this.playNote(strIdx, fret, duration, stringTime);
        delayIndex++;
      }
    });
  }
}

export const guitarSynth = new GuitarSynth();
