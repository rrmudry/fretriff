/**
 * Chord Progression Player & Play-Along Studio
 * Integrates Web Audio guitar strumming, drum backing grooves, and visual rhythm guides
 */

import { PROGRESSIONS } from '../data/progressions.js';
import { CHORDS } from '../data/chords.js';
import { guitarSynth } from '../audio/synth.js';
import { DrumEngine } from '../audio/drums.js';
import { renderChordSvg } from './chord-diagram.js';
import { transposeChord } from '../utils/music-theory.js';

export class ProgressionPlayer {
  constructor(containerEl) {
    this.container = containerEl;
    this.drumEngine = new DrumEngine(guitarSynth);
    this.currentProgression = PROGRESSIONS[0];
    this.currentChordIndex = 0;
    this.currentBeat = 0;
    this.isPlaying = false;
    this.transposeSemitones = 0;
    this.tempo = this.currentProgression.tempo;
    this.customChords = [];
    this.activeTimer = null;

    this.initUI();
    this.setupListeners();
  }

  getChordById(id) {
    return CHORDS.find(c => c.id === id) || CHORDS[0];
  }

  initUI() {
    this.container.innerHTML = `
      <div class="progression-studio-wrapper">
        <!-- Control Header & Preset Selector -->
        <div class="studio-header">
          <div class="preset-selector-group">
            <label for="progression-select" class="form-label">Song Progression:</label>
            <select id="progression-select" class="form-select">
              ${PROGRESSIONS.map(p => `
                <option value="${p.id}" ${p.id === this.currentProgression.id ? 'selected' : ''}>
                  ${p.category}: ${p.title} (${p.numerals})
                </option>
              `).join('')}
              <option value="custom">✨ Custom Progression Builder</option>
            </select>
          </div>

          <div class="transport-controls">
            <button id="btn-play-progression" class="btn btn-primary btn-lg">
              <span class="btn-icon">▶</span> <span class="btn-text">Play Progression</span>
            </button>
            <div class="tempo-control-group">
              <label for="tempo-slider" class="tempo-label">Tempo: <span id="tempo-val">${this.tempo}</span> BPM</label>
              <input type="range" id="tempo-slider" min="50" max="170" value="${this.tempo}" class="slider">
            </div>
            <div class="drum-mode-group">
              <label for="drum-select" class="form-label">Backing Beat:</label>
              <select id="drum-select" class="form-select form-select-sm">
                <option value="rock_standard">🥁 Rock 4/4 Beat</option>
                <option value="shuffle">🎷 Blues Shuffle</option>
                <option value="half_time">🔥 Heavy Half-Time</option>
                <option value="pop_groove">✨ Pop Groove</option>
                <option value="metronome">⏱️ Metronome Click</option>
                <option value="none">🔇 Guitar Only</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Visual Rhythm & Strum Guide Bar -->
        <div class="rhythm-guide-card">
          <div class="rhythm-guide-header">
            <div class="rhythm-info">
              <span class="badge badge-key">Key of ${this.currentProgression.key}</span>
              <span class="numerals-badge">${this.currentProgression.numerals}</span>
            </div>
            <div class="strum-guide-legend">
              <span class="legend-item"><span class="arrow-icon">↓</span> Downstroke</span>
              <span class="legend-item"><span class="arrow-icon">↑</span> Upstroke</span>
            </div>
          </div>
          <div class="beat-dots-container" id="beat-dots-container">
            <!-- Beat indicators rendered dynamically -->
          </div>
        </div>

        <!-- Active Chord Cards Row -->
        <div class="progression-cards-grid" id="progression-cards-grid">
          <!-- Rendered dynamically -->
        </div>

        <!-- Custom Builder Bar (Hidden unless custom is chosen) -->
        <div class="custom-builder-section" id="custom-builder-section" style="display: none;">
          <div class="custom-builder-header">
            <h4>Build Your Own Progression</h4>
            <p>Click any chord below to add it to your song sequence!</p>
          </div>
          <div class="custom-chord-palette" id="custom-chord-palette">
            ${CHORDS.map(c => `
              <button class="btn btn-sm btn-outline btn-add-chord" data-chord-id="${c.id}">
                + ${c.shortName}
              </button>
            `).join('')}
          </div>
          <div class="custom-sequence-bar">
            <span>Your Sequence:</span>
            <div class="custom-sequence-list" id="custom-sequence-list">
              <span class="text-muted">No chords added yet. Click chords above!</span>
            </div>
            <button id="btn-clear-custom" class="btn btn-sm btn-danger">Clear</button>
          </div>
        </div>

        <!-- Music Theory & Song Examples -->
        <div class="theory-and-songs-grid">
          <div class="info-card theory-card">
            <h4>💡 Why It Sounds Good Together</h4>
            <p id="theory-explanation-text">${this.currentProgression.theoryExplanation}</p>
          </div>
          <div class="info-card songs-card">
            <h4>🎧 Famous Songs Using This</h4>
            <ul id="famous-songs-list" class="songs-list">
              ${this.currentProgression.songs.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;

    this.renderChordsRow();
    this.renderBeatGuide();
  }

  renderChordsRow() {
    const grid = this.container.querySelector('#progression-cards-grid');
    grid.innerHTML = '';

    const chordIds = this.currentProgression.id === 'custom' 
      ? this.customChords 
      : this.currentProgression.chords;

    if (chordIds.length === 0) {
      grid.innerHTML = `<div class="empty-state">Add chords from the palette below to build your progression!</div>`;
      return;
    }

    chordIds.forEach((chordId, idx) => {
      const chord = this.getChordById(chordId);
      const card = document.createElement('div');
      card.className = `progression-chord-item ${idx === this.currentChordIndex ? 'active-beat' : ''}`;
      card.dataset.index = idx;

      card.innerHTML = `
        <div class="step-num">${idx + 1}</div>
        <div class="progression-chord-name">${chord.shortName}</div>
        <div class="progression-svg-wrap">
          ${renderChordSvg(chord, { width: 130, height: 160 })}
        </div>
        <button class="btn btn-xs btn-strum-single" data-chord-id="${chord.id}">Strum</button>
      `;

      card.querySelector('.btn-strum-single').addEventListener('click', (e) => {
        e.stopPropagation();
        guitarSynth.playChord(chord.frets, 'down', 30);
      });

      card.addEventListener('click', () => {
        this.currentChordIndex = idx;
        this.updateActiveChordUI();
        guitarSynth.playChord(chord.frets, 'down', 30);
      });

      grid.appendChild(card);
    });
  }

  renderBeatGuide() {
    const container = this.container.querySelector('#beat-dots-container');
    container.innerHTML = '';
    const beatsPerChord = this.currentProgression.beatsPerChord || 4;
    const strumPattern = this.currentProgression.strumPattern || ['D', 'D', 'U', 'U', 'D', 'U'];

    for (let b = 0; b < beatsPerChord; b++) {
      const dot = document.createElement('div');
      dot.className = `beat-box ${b === this.currentBeat ? 'current' : ''}`;
      const arrow = strumPattern[b % strumPattern.length] === 'U' ? '↑' : '↓';
      dot.innerHTML = `
        <span class="beat-number">Beat ${b + 1}</span>
        <span class="beat-strum-arrow">${arrow}</span>
      `;
      container.appendChild(dot);
    }
  }

  setupListeners() {
    const select = this.container.querySelector('#progression-select');
    select.addEventListener('change', (e) => {
      this.stop();
      if (e.target.value === 'custom') {
        this.currentProgression = {
          id: 'custom',
          title: 'Custom User Progression',
          key: 'Custom',
          numerals: 'User Made',
          chords: this.customChords,
          tempo: this.tempo,
          beatsPerChord: 4,
          drumPattern: 'rock_standard',
          strumPattern: ['D', 'D', 'U', 'U', 'D', 'U'],
          songs: ["Your own original rock hit!"],
          theoryExplanation: "Experiment with combinations! Try jumping between Home (I) and nearby chords to see what vibes you discover."
        };
        this.container.querySelector('#custom-builder-section').style.display = 'block';
      } else {
        this.currentProgression = PROGRESSIONS.find(p => p.id === e.target.value) || PROGRESSIONS[0];
        this.tempo = this.currentProgression.tempo;
        this.container.querySelector('#tempo-slider').value = this.tempo;
        this.container.querySelector('#tempo-val').textContent = this.tempo;
        this.container.querySelector('#drum-select').value = this.currentProgression.drumPattern;
        this.container.querySelector('#custom-builder-section').style.display = 'none';
      }
      this.updateDetails();
      this.renderChordsRow();
      this.renderBeatGuide();
    });

    const playBtn = this.container.querySelector('#btn-play-progression');
    playBtn.addEventListener('click', () => {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
    });

    const tempoSlider = this.container.querySelector('#tempo-slider');
    tempoSlider.addEventListener('input', (e) => {
      this.tempo = parseInt(e.target.value, 10);
      this.container.querySelector('#tempo-val').textContent = this.tempo;
      this.drumEngine.setBpm(this.tempo);
    });

    const drumSelect = this.container.querySelector('#drum-select');
    drumSelect.addEventListener('change', (e) => {
      this.drumEngine.setPattern(e.target.value);
    });

    // Custom Builder Buttons
    const palette = this.container.querySelector('#custom-chord-palette');
    palette.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-add-chord');
      if (btn) {
        const chordId = btn.dataset.chordId;
        this.customChords.push(chordId);
        this.renderCustomSequence();
        this.renderChordsRow();
        const chord = this.getChordById(chordId);
        guitarSynth.playChord(chord.frets, 'down', 30);
      }
    });

    const clearBtn = this.container.querySelector('#btn-clear-custom');
    clearBtn.addEventListener('click', () => {
      this.customChords = [];
      this.renderCustomSequence();
      this.renderChordsRow();
    });
  }

  renderCustomSequence() {
    const list = this.container.querySelector('#custom-sequence-list');
    if (this.customChords.length === 0) {
      list.innerHTML = `<span class="text-muted">No chords added yet. Click chords above!</span>`;
      return;
    }
    list.innerHTML = this.customChords.map((cId, idx) => {
      const chord = this.getChordById(cId);
      return `<span class="custom-chord-pill">${idx + 1}. ${chord.shortName}</span>`;
    }).join(' → ');
  }

  updateDetails() {
    this.container.querySelector('.badge-key').textContent = `Key of ${this.currentProgression.key}`;
    this.container.querySelector('.numerals-badge').textContent = this.currentProgression.numerals;
    this.container.querySelector('#theory-explanation-text').textContent = this.currentProgression.theoryExplanation;
    this.container.querySelector('#famous-songs-list').innerHTML = this.currentProgression.songs.map(s => `<li>${s}</li>`).join('');
  }

  start() {
    const chordIds = this.currentProgression.id === 'custom' ? this.customChords : this.currentProgression.chords;
    if (!chordIds || chordIds.length === 0) return;

    guitarSynth.init();
    this.isPlaying = true;
    this.currentChordIndex = 0;
    this.currentBeat = 0;

    const playBtn = this.container.querySelector('#btn-play-progression');
    playBtn.classList.add('btn-danger');
    playBtn.innerHTML = `<span class="btn-icon">⏹</span> <span class="btn-text">Stop</span>`;

    const drumPattern = this.container.querySelector('#drum-select').value;
    if (drumPattern !== 'none') {
      this.drumEngine.setBpm(this.tempo);
      this.drumEngine.setPattern(drumPattern);
      this.drumEngine.start();
    }

    this.tickProgression();
  }

  stop() {
    this.isPlaying = false;
    if (this.activeTimer) {
      clearTimeout(this.activeTimer);
      this.activeTimer = null;
    }
    this.drumEngine.stop();

    const playBtn = this.container.querySelector('#btn-play-progression');
    if (playBtn) {
      playBtn.classList.remove('btn-danger');
      playBtn.innerHTML = `<span class="btn-icon">▶</span> <span class="btn-text">Play Progression</span>`;
    }

    this.currentBeat = 0;
    this.updateActiveChordUI();
    this.renderBeatGuide();
  }

  tickProgression() {
    if (!this.isPlaying) return;

    const chordIds = this.currentProgression.id === 'custom' ? this.customChords : this.currentProgression.chords;
    const beatsPerChord = this.currentProgression.beatsPerChord || 4;
    const beatDurationMs = (60 / this.tempo) * 1000;

    // Strum chord on beat 0, or on specific strum steps
    if (this.currentBeat === 0) {
      const chordId = chordIds[this.currentChordIndex];
      const chord = this.getChordById(chordId);
      if (chord) {
        guitarSynth.playChord(chord.frets, 'down', 30);
      }
    } else if (this.currentBeat === 2) {
      // Secondary rhythmic pulse
      const chordId = chordIds[this.currentChordIndex];
      const chord = this.getChordById(chordId);
      if (chord) {
        guitarSynth.playChord(chord.frets, 'down', 25, null, 1.2);
      }
    }

    this.updateActiveChordUI();
    this.updateBeatUI();

    // Advance beat counter
    this.currentBeat++;
    if (this.currentBeat >= beatsPerChord) {
      this.currentBeat = 0;
      this.currentChordIndex = (this.currentChordIndex + 1) % chordIds.length;
    }

    this.activeTimer = setTimeout(() => this.tickProgression(), beatDurationMs);
  }

  updateActiveChordUI() {
    const items = this.container.querySelectorAll('.progression-chord-item');
    items.forEach((el, idx) => {
      if (idx === this.currentChordIndex) {
        el.classList.add('active-beat');
      } else {
        el.classList.remove('active-beat');
      }
    });
  }

  updateBeatUI() {
    const beatBoxes = this.container.querySelectorAll('.beat-box');
    beatBoxes.forEach((box, b) => {
      if (b === this.currentBeat) {
        box.classList.add('current');
      } else {
        box.classList.remove('current');
      }
    });
  }
}
