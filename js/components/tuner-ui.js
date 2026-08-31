/**
 * Precision Guitar Tuner UI Component
 * Integrates Microphone Pitch Detection and Interactive Headstock Reference Tone Generator
 */

import { TunerEngine } from '../audio/tuner-engine.js';
import { guitarSynth } from '../audio/synth.js';
import { TUNING_PRESETS, midiToFrequency } from '../utils/music-theory.js';

export class TunerUI {
  constructor(containerEl) {
    this.container = containerEl;
    this.engine = new TunerEngine();
    this.currentPresetKey = 'standard';
    this.currentPreset = TUNING_PRESETS.standard;
    this.targetStringIndex = 'auto'; // 'auto' or 0-5
    this.isListening = false;
    this.activeToneString = null;

    this.initUI();
    this.setupListeners();
  }

  initUI() {
    this.container.innerHTML = `
      <div class="tuner-wrapper">
        <!-- Tuner Controls Header -->
        <div class="tuner-header">
          <div class="tuner-preset-group">
            <label for="tuner-tuning-select" class="form-label">Tuning Preset:</label>
            <select id="tuner-tuning-select" class="form-select">
              ${Object.entries(TUNING_PRESETS).map(([key, preset]) => `
                <option value="${key}" ${key === this.currentPresetKey ? 'selected' : ''}>
                  ${preset.name}
                </option>
              `).join('')}
            </select>
          </div>

          <div class="tuner-mode-toggle">
            <button id="btn-toggle-mic" class="btn btn-primary btn-lg">
              <span class="mic-icon">🎙️</span> <span class="btn-text">Start Mic Tuner</span>
            </button>
          </div>
        </div>

        <!-- Main Tuner Dial / Display -->
        <div class="tuner-meter-container">
          <div class="tuner-gauge-card" id="tuner-gauge-card">
            <!-- In-tune lock badge -->
            <div class="in-tune-badge" id="in-tune-badge">✨ PERFECTLY IN TUNE ✨</div>

            <!-- Main Note Big Display -->
            <div class="tuner-note-display">
              <span class="detected-note-letter" id="detected-note">--</span>
              <span class="detected-octave" id="detected-octave"></span>
            </div>

            <div class="freq-info-row">
              <span class="freq-text" id="detected-freq">0.0 Hz</span>
              <span class="target-freq-text" id="target-freq">Target: -- Hz</span>
            </div>

            <!-- Needle Arc Meter -->
            <div class="meter-scale-wrap">
              <div class="meter-scale-ticks">
                <span class="tick tick-flat">-50¢</span>
                <span class="tick tick-mid">-25¢</span>
                <span class="tick tick-center">0</span>
                <span class="tick tick-mid">+25¢</span>
                <span class="tick tick-sharp">+50¢</span>
              </div>
              <div class="meter-track">
                <div class="meter-center-line"></div>
                <div class="meter-needle" id="meter-needle"></div>
              </div>
              <div class="cents-readout" id="cents-readout">0 ¢</div>
            </div>

            <!-- Input Level Signal Meter -->
            <div class="input-level-bar-wrap">
              <span class="level-label">Input Level:</span>
              <div class="level-bar-track">
                <div class="level-bar-fill" id="level-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Headstock & Reference Tones -->
        <div class="reference-tones-section">
          <div class="section-title-wrap">
            <h3>🎸 Reference Tones (Tune by Ear)</h3>
            <p>Click any string peg to hear the exact target pitch with clean guitar tone:</p>
          </div>
          <div class="headstock-pegs-grid" id="headstock-pegs">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </div>
    `;

    this.renderHeadstockPegs();
  }

  renderHeadstockPegs() {
    const grid = this.container.querySelector('#headstock-pegs');
    grid.innerHTML = '';

    const stringOrder = [
      { label: '6th String (Low)', defaultNote: this.currentPreset.notes[0], idx: 0, midi: this.currentPreset.midi[0] },
      { label: '5th String', defaultNote: this.currentPreset.notes[1], idx: 1, midi: this.currentPreset.midi[1] },
      { label: '4th String', defaultNote: this.currentPreset.notes[2], idx: 2, midi: this.currentPreset.midi[2] },
      { label: '3rd String', defaultNote: this.currentPreset.notes[3], idx: 3, midi: this.currentPreset.midi[3] },
      { label: '2nd String', defaultNote: this.currentPreset.notes[4], idx: 4, midi: this.currentPreset.midi[4] },
      { label: '1st String (High)', defaultNote: this.currentPreset.notes[5], idx: 5, midi: this.currentPreset.midi[5] }
    ];

    stringOrder.forEach(item => {
      const peg = document.createElement('button');
      peg.className = 'peg-button';
      peg.dataset.stringIndex = item.idx;
      peg.dataset.midi = item.midi;

      const freq = item.midi ? midiToFrequency(item.midi).toFixed(1) : '';
      peg.innerHTML = `
        <span class="peg-string-label">${item.label}</span>
        <span class="peg-note">${item.defaultNote}</span>
        <span class="peg-freq">${freq} Hz</span>
        <span class="peg-play-hint">▶ Play Tone</span>
      `;

      peg.addEventListener('click', () => {
        guitarSynth.init();
        guitarSynth.playStringPluck(item.midi, 0.9, null, 3.5);
        peg.classList.add('active-playing');
        setTimeout(() => peg.classList.remove('active-playing'), 1200);
      });

      grid.appendChild(peg);
    });
  }

  setupListeners() {
    const micBtn = this.container.querySelector('#btn-toggle-mic');
    micBtn.addEventListener('click', async () => {
      if (this.isListening) {
        this.stopMic();
      } else {
        try {
          await this.startMic();
        } catch (err) {
          alert('Could not access microphone. Please make sure microphone permission is granted in your browser!');
        }
      }
    });

    const presetSelect = this.container.querySelector('#tuner-tuning-select');
    presetSelect.addEventListener('change', (e) => {
      this.currentPresetKey = e.target.value;
      this.currentPreset = TUNING_PRESETS[this.currentPresetKey];
      this.renderHeadstockPegs();
    });

    // Pitch detection listener
    this.engine.onPitchDetected((data) => {
      this.updateTunerDisplay(data);
    });
  }

  async startMic() {
    guitarSynth.init();
    await this.engine.start();
    this.isListening = true;
    const micBtn = this.container.querySelector('#btn-toggle-mic');
    micBtn.classList.add('btn-danger');
    micBtn.innerHTML = `<span class="mic-icon">⏹</span> <span class="btn-text">Stop Microphone</span>`;
  }

  stopMic() {
    this.engine.stop();
    this.isListening = false;
    const micBtn = this.container.querySelector('#btn-toggle-mic');
    if (micBtn) {
      micBtn.classList.remove('btn-danger');
      micBtn.innerHTML = `<span class="mic-icon">🎙️</span> <span class="btn-text">Start Mic Tuner</span>`;
    }
    this.resetDisplay();
  }

  resetDisplay() {
    this.container.querySelector('#detected-note').textContent = '--';
    this.container.querySelector('#detected-octave').textContent = '';
    this.container.querySelector('#detected-freq').textContent = '0.0 Hz';
    this.container.querySelector('#target-freq').textContent = 'Target: -- Hz';
    this.container.querySelector('#cents-readout').textContent = '0 ¢';
    this.container.querySelector('#meter-needle').style.transform = `translateX(0px)`;
    this.container.querySelector('#in-tune-badge').classList.remove('active');
    this.container.querySelector('#level-bar-fill').style.width = '0%';
  }

  updateTunerDisplay(data) {
    if (data.silent) {
      const level = Math.min(100, (data.rms || 0) * 800);
      this.container.querySelector('#level-bar-fill').style.width = `${level}%`;
      return;
    }

    const noteEl = this.container.querySelector('#detected-note');
    const octaveEl = this.container.querySelector('#detected-octave');
    const freqEl = this.container.querySelector('#detected-freq');
    const targetFreqEl = this.container.querySelector('#target-freq');
    const centsEl = this.container.querySelector('#cents-readout');
    const needleEl = this.container.querySelector('#meter-needle');
    const badgeEl = this.container.querySelector('#in-tune-badge');
    const levelEl = this.container.querySelector('#level-bar-fill');

    noteEl.textContent = data.note;
    octaveEl.textContent = data.octave;
    freqEl.textContent = `${data.frequency.toFixed(1)} Hz`;
    targetFreqEl.textContent = `Target: ${data.targetFreq.toFixed(1)} Hz`;

    // Cents offset clamped to -50 to +50
    const clampedCents = Math.max(-50, Math.min(50, data.cents));
    const sign = clampedCents > 0 ? '+' : '';
    centsEl.textContent = `${sign}${clampedCents} ¢`;

    // Map -50 to +50 cents to needle pixel offset (-140px to +140px)
    const offsetPx = (clampedCents / 50) * 140;
    needleEl.style.transform = `translateX(${offsetPx}px)`;

    const level = Math.min(100, data.rms * 800);
    levelEl.style.width = `${level}%`;

    if (data.inTune) {
      badgeEl.classList.add('active');
      needleEl.classList.add('in-tune');
    } else {
      badgeEl.classList.remove('active');
      needleEl.classList.remove('in-tune');
    }
  }
}
