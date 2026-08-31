/**
 * Interactive Tablature Viewer & Riff Practice Trainer
 * Renders 6-string guitar tabs with scrolling playhead and synchronized Web Audio playback
 */

import { TAB_PRESETS } from '../data/tabs.js';
import { guitarSynth } from '../audio/synth.js';

export class TabViewer {
  constructor(containerEl) {
    this.container = containerEl;
    this.currentPreset = TAB_PRESETS[0];
    this.isPlaying = false;
    this.currentColIndex = 0;
    this.speedMultiplier = 1.0;
    this.isLooping = true;
    this.playTimer = null;
    this.tabColumns = this.currentPreset.tabColumns;

    this.initUI();
    this.setupListeners();
  }

  initUI() {
    this.container.innerHTML = `
      <div class="tab-player-wrapper">
        <!-- Header & Preset Selector -->
        <div class="tab-header">
          <div class="tab-selector-group">
            <label for="tab-preset-select" class="form-label">Select Riff / Tab:</label>
            <select id="tab-preset-select" class="form-select">
              ${TAB_PRESETS.map(t => `
                <option value="${t.id}" ${t.id === this.currentPreset.id ? 'selected' : ''}>
                  ${t.title} - ${t.artist} (${t.difficulty})
                </option>
              `).join('')}
            </select>
          </div>

          <div class="tab-transport">
            <button id="btn-tab-play" class="btn btn-primary">
              <span class="btn-icon">▶</span> <span class="btn-text">Play Tab</span>
            </button>
            <button id="btn-tab-rewind" class="btn btn-outline" title="Rewind to start">⏮</button>
            
            <div class="speed-control-group">
              <span class="control-label">Speed:</span>
              <div class="btn-group">
                <button class="btn btn-sm btn-speed" data-speed="0.5">0.5x</button>
                <button class="btn btn-sm btn-speed" data-speed="0.75">0.75x</button>
                <button class="btn btn-sm btn-speed active" data-speed="1.0">1.0x</button>
                <button class="btn btn-sm btn-speed" data-speed="1.25">1.25x</button>
              </div>
            </div>

            <button id="btn-tab-loop" class="btn btn-sm btn-outline active" title="Toggle Loop">🔁 Loop: ON</button>
          </div>
        </div>

        <!-- Riff Info & Tips Banner -->
        <div class="tab-info-card">
          <div class="tab-info-main">
            <h3 id="tab-title">${this.currentPreset.title}</h3>
            <span class="tab-artist" id="tab-artist">by ${this.currentPreset.artist}</span>
            <span class="badge badge-difficulty" id="tab-diff">${this.currentPreset.difficulty}</span>
          </div>
          <p class="tab-desc" id="tab-desc">${this.currentPreset.description}</p>
          <div class="tab-tip-badge" id="tab-tip"><strong>💡 How to play:</strong> ${this.currentPreset.tips}</div>
        </div>

        <!-- The 6-String Tab Sheet Display -->
        <div class="tab-sheet-scroll-container" id="tab-sheet-container">
          <div class="tab-sheet" id="tab-sheet">
            <!-- Rendered dynamically -->
          </div>
        </div>

        <!-- Quick Tab Creator Section -->
        <div class="tab-creator-accordion">
          <details class="details-card">
            <summary class="details-summary">✍️ Create / Paste Custom Tab Text</summary>
            <div class="custom-tab-input-wrap">
              <p>Enter a simple sequence of notes (e.g. <code>str:fret:duration</code> like <code>0:0:1, 0:3:1, 0:5:2</code>):</p>
              <textarea id="custom-tab-text" class="form-control" rows="3" placeholder="e.g. 1:7:1.5, 1:7:0.5, 1:10:1, 1:7:1, 1:5:1, 1:3:2, 1:2:2"></textarea>
              <button id="btn-load-custom-tab" class="btn btn-sm btn-accent mt-2">Load Custom Tab</button>
            </div>
          </details>
        </div>
      </div>
    `;

    this.renderTabSheet();
  }

  renderTabSheet() {
    const sheet = this.container.querySelector('#tab-sheet');
    sheet.innerHTML = '';

    // Standard TAB String Names (from high string to low string):
    // Standard notation: line 0 = High E (str 5), line 1 = B (str 4), line 2 = G (str 3), line 3 = D (str 2), line 4 = A (str 1), line 5 = Low E (str 0)
    const stringLabels = ['e', 'B', 'G', 'D', 'A', 'E'];
    const stringIndices = [5, 4, 3, 2, 1, 0]; // mapping to 0-5 guitarSynth string indices

    // Left String Header Column
    const headerCol = document.createElement('div');
    headerCol.className = 'tab-string-labels';
    stringLabels.forEach((label) => {
      const lineLabel = document.createElement('div');
      lineLabel.className = 'tab-line-label';
      lineLabel.textContent = label;
      headerCol.appendChild(lineLabel);
    });
    sheet.appendChild(headerCol);

    // Render Note Columns
    const columnsWrap = document.createElement('div');
    columnsWrap.className = 'tab-columns-container';

    this.tabColumns.forEach((col, cIdx) => {
      const colEl = document.createElement('div');
      colEl.className = `tab-column ${cIdx === this.currentColIndex ? 'active-col' : ''}`;
      colEl.dataset.colIndex = cIdx;

      // Render 6 lines for this column
      stringIndices.forEach((strIdx) => {
        const slotEl = document.createElement('div');
        slotEl.className = 'tab-note-slot';
        
        // Find if this string has a note
        const noteMatch = col.notes.find(n => n.str === strIdx);
        if (noteMatch) {
          slotEl.innerHTML = `<span class="fret-badge">${noteMatch.fret}</span>`;
          slotEl.classList.add('has-note');
        } else {
          slotEl.innerHTML = `<span class="empty-line">—</span>`;
        }

        colEl.appendChild(slotEl);
      });

      // Click column to play immediately
      colEl.addEventListener('click', () => {
        this.currentColIndex = cIdx;
        this.updateColUI();
        this.playColumnNotes(col);
      });

      columnsWrap.appendChild(colEl);
    });

    sheet.appendChild(columnsWrap);
  }

  playColumnNotes(col) {
    if (!col || !col.notes || col.notes.length === 0) return;
    guitarSynth.init();
    col.notes.forEach(n => {
      guitarSynth.playNote(n.str, n.fret, col.dur * 1.5);
    });
  }

  setupListeners() {
    const presetSelect = this.container.querySelector('#tab-preset-select');
    presetSelect.addEventListener('change', (e) => {
      this.stop();
      this.currentPreset = TAB_PRESETS.find(p => p.id === e.target.value) || TAB_PRESETS[0];
      this.tabColumns = this.currentPreset.tabColumns;
      this.currentColIndex = 0;

      this.container.querySelector('#tab-title').textContent = this.currentPreset.title;
      this.container.querySelector('#tab-artist').textContent = `by ${this.currentPreset.artist}`;
      this.container.querySelector('#tab-diff').textContent = this.currentPreset.difficulty;
      this.container.querySelector('#tab-desc').textContent = this.currentPreset.description;
      this.container.querySelector('#tab-tip').innerHTML = `<strong>💡 How to play:</strong> ${this.currentPreset.tips}`;

      this.renderTabSheet();
    });

    const playBtn = this.container.querySelector('#btn-tab-play');
    playBtn.addEventListener('click', () => {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
    });

    const rewindBtn = this.container.querySelector('#btn-tab-rewind');
    rewindBtn.addEventListener('click', () => {
      this.stop();
      this.currentColIndex = 0;
      this.updateColUI();
    });

    const speedButtons = this.container.querySelectorAll('.btn-speed');
    speedButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        speedButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.speedMultiplier = parseFloat(btn.dataset.speed);
      });
    });

    const loopBtn = this.container.querySelector('#btn-tab-loop');
    loopBtn.addEventListener('click', () => {
      this.isLooping = !this.isLooping;
      loopBtn.classList.toggle('active', this.isLooping);
      loopBtn.textContent = this.isLooping ? '🔁 Loop: ON' : '➡️ Loop: OFF';
    });

    // Custom Tab parser
    const loadCustomBtn = this.container.querySelector('#btn-load-custom-tab');
    loadCustomBtn.addEventListener('click', () => {
      const text = this.container.querySelector('#custom-tab-text').value.trim();
      if (!text) return;
      try {
        const parsed = text.split(',').map(part => {
          const [str, fret, dur] = part.trim().split(':').map(Number);
          return {
            notes: [{ str: isNaN(str) ? 0 : str, fret: isNaN(fret) ? 0 : fret }],
            dur: isNaN(dur) ? 1.0 : dur
          };
        });
        if (parsed.length > 0) {
          this.tabColumns = parsed;
          this.currentColIndex = 0;
          this.renderTabSheet();
        }
      } catch (err) {
        alert('Invalid tab format. Use format str:fret:dur (e.g. 1:7:1, 1:5:1)');
      }
    });
  }

  start() {
    if (this.isPlaying) return;
    this.isPlaying = true;

    const playBtn = this.container.querySelector('#btn-tab-play');
    playBtn.classList.add('btn-danger');
    playBtn.innerHTML = `<span class="btn-icon">⏹</span> <span class="btn-text">Stop</span>`;

    this.tickTab();
  }

  stop() {
    this.isPlaying = false;
    if (this.playTimer) {
      clearTimeout(this.playTimer);
      this.playTimer = null;
    }

    const playBtn = this.container.querySelector('#btn-tab-play');
    if (playBtn) {
      playBtn.classList.remove('btn-danger');
      playBtn.innerHTML = `<span class="btn-icon">▶</span> <span class="btn-text">Play Tab</span>`;
    }
  }

  tickTab() {
    if (!this.isPlaying) return;

    if (this.currentColIndex >= this.tabColumns.length) {
      if (this.isLooping) {
        this.currentColIndex = 0;
      } else {
        this.stop();
        return;
      }
    }

    const col = this.tabColumns[this.currentColIndex];
    this.updateColUI();
    this.playColumnNotes(col);

    const bpm = this.currentPreset.tempo || 100;
    const baseBeatDurationMs = (60 / bpm) * 1000;
    const colDurationMs = (col.dur || 1.0) * baseBeatDurationMs * (1 / this.speedMultiplier);

    this.currentColIndex++;
    this.playTimer = setTimeout(() => this.tickTab(), colDurationMs);
  }

  updateColUI() {
    const cols = this.container.querySelectorAll('.tab-column');
    cols.forEach((colEl, idx) => {
      if (idx === this.currentColIndex) {
        colEl.classList.add('active-col');
        // Auto scroll into view
        colEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        colEl.classList.remove('active-col');
      }
    });
  }
}
