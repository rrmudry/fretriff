/**
 * Real-time Microphone Pitch Detection Engine
 * Uses Optimized Normalized Autocorrelation with Parabolic Interpolation for Guitar
 */

import { frequencyToNote } from '../utils/music-theory.js';

export class TunerEngine {
  constructor() {
    this.audioCtx = null;
    this.mediaStream = null;
    this.sourceNode = null;
    this.analyser = null;
    this.filter = null;
    this.isListening = false;
    this.rafId = null;
    this.buffer = null;
    this.listeners = new Set();
    this.sampleRate = 44100;
    this.minVolumeThreshold = 0.015; // RMS threshold
  }

  async start() {
    if (this.isListening) return;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContextClass();
    if (this.audioCtx.state === 'suspended') {
      await this.audioCtx.resume();
    }
    this.sampleRate = this.audioCtx.sampleRate;

    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          autoGainControl: false,
          noiseSuppression: false,
          channelCount: 1
        }
      });

      this.sourceNode = this.audioCtx.createMediaStreamSource(this.mediaStream);

      // Bandpass filter to isolate guitar range (60Hz to 1000Hz)
      this.filter = this.audioCtx.createBiquadFilter();
      this.filter.type = 'bandpass';
      this.filter.frequency.setValueAtTime(250, this.audioCtx.currentTime);
      this.filter.Q.setValueAtTime(0.5, this.audioCtx.currentTime);

      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 2048; // High resolution buffer for low guitar strings
      this.buffer = new Float32Array(this.analyser.fftSize);

      this.sourceNode.connect(this.filter);
      this.filter.connect(this.analyser);

      this.isListening = true;
      this.detectLoop();
      return true;
    } catch (err) {
      console.error('Microphone access denied or unavailable:', err);
      throw err;
    }
  }

  stop() {
    this.isListening = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
      this.mediaStream = null;
    }
    if (this.audioCtx && this.audioCtx.state !== 'closed') {
      this.audioCtx.close();
      this.audioCtx = null;
    }
  }

  onPitchDetected(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  detectLoop() {
    if (!this.isListening) return;

    this.analyser.getFloatTimeDomainData(this.buffer);

    // Calculate RMS Volume
    let sumSquares = 0;
    for (let i = 0; i < this.buffer.length; i++) {
      sumSquares += this.buffer[i] * this.buffer[i];
    }
    const rms = Math.sqrt(sumSquares / this.buffer.length);

    if (rms > this.minVolumeThreshold) {
      const pitch = this.autoCorrelate(this.buffer, this.sampleRate);
      if (pitch && pitch > 50 && pitch < 1200) {
        const noteData = frequencyToNote(pitch);
        if (noteData) {
          const inTune = Math.abs(noteData.cents) <= 4;
          this.listeners.forEach(cb => cb({
            ...noteData,
            rms,
            inTune,
            timestamp: Date.now()
          }));
        }
      }
    } else {
      this.listeners.forEach(cb => cb({ silent: true, rms }));
    }

    this.rafId = requestAnimationFrame(() => this.detectLoop());
  }

  /**
   * Optimized Autocorrelation algorithm with quadratic interpolation
   */
  autoCorrelate(buf, sampleRate) {
    const SIZE = buf.length;
    const MAX_SAMPLES = Math.floor(SIZE / 2);
    let bestOffset = -1;
    let bestCorrelation = 0;
    let foundGoodCorrelation = false;
    const correlations = new Float32Array(MAX_SAMPLES);

    // Find the first zero-crossing or dip to prevent octave doubling
    let lastCorrelation = 1;
    for (let offset = 0; offset < MAX_SAMPLES; offset++) {
      let correlation = 0;
      for (let i = 0; i < MAX_SAMPLES; i++) {
        correlation += Math.abs(buf[i] - buf[i + offset]);
      }
      correlation = 1 - (correlation / MAX_SAMPLES);
      correlations[offset] = correlation;

      if ((correlation > 0.9) && (correlation > lastCorrelation)) {
        foundGoodCorrelation = true;
        if (correlation > bestCorrelation) {
          bestCorrelation = correlation;
          bestOffset = offset;
        }
      } else if (foundGoodCorrelation) {
        // Peak has been found, interpolate for fractional precision
        const shift = (correlations[bestOffset + 1] - correlations[bestOffset - 1]) /
                      (2 * (2 * correlations[bestOffset] - correlations[bestOffset + 1] - correlations[bestOffset - 1]));
        return sampleRate / (bestOffset + (isNaN(shift) ? 0 : shift));
      }
      lastCorrelation = correlation;
    }

    if (bestCorrelation > 0.01 && bestOffset > 0) {
      return sampleRate / bestOffset;
    }
    return -1;
  }
}
