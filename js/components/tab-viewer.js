/**
 * Interactive Tablature Viewer & Riff Practice Trainer
 * Features: Single-String (Super Beginner), 2-String & Power Riffs, Multi-String Chords, and Speed Trainer
 */

import { TAB_PRESETS, TAB_CATEGORIES } from '../data/tabs.js';
import { guitarSynth } from '../audio/synth.js';

export class TabViewer {
  constructor(containerEl) {
    this.container = containerEl;
    this.currentCategory = 'all';
    this.filteredPresets = TAB_PRESETS;
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
        <!-- Category Filter Tabs for Super Beginners -->
        <div class="tab-category-bar">
          <span class="category-bar-label">Riff Level:</span>
          <div class="category-chips-wrap" id="tab-category-chips">
            ${TAB_CATEGORIES.map(cat => `
              <button class="filter-chip ${cat.id === this.currentCategory ? 'active' : ''}" data-tab-cat="${cat.id}">
                ${cat.name}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Header & Preset Selector -->
        <div class="tab-header">
          <div class="tab-selector-group">
            <label for="tab-preset-select" class="form-label">Select Riff / Song:</label>
            <select id="tab-preset-select" class="form-select">
              ${this.filteredPresets.map(t => `
                <option value="${t.id}" ${t.id === this.currentPreset.id ? 'selected' : ''}>
                  ${t.title} - ${t.artist}
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
                <button class="btn btn-sm btn-speed" data-speed="0.5">0.5x (Practice)</button>
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
            ${this.currentPreset.stringTarget ? `<span class="badge badge-string-target" id="tab-string-target">🎯 ${this.currentPreset.stringTarget}</span>` : ''}
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
              <p>Enter a simple sequence of notes (format <code>string:fret:duration</code> e.g. <code>0:0:1, 0:3:1, 0:5:2</code> where string 0 = Low E, 5 = High E):</p>
              <textarea id="custom-tab-text" class="form-control" rows="3" placeholder="e.g. 0:0:1, 0:3:1, 0:5:1.5, 0:0:1, 0:3:1, 0:6:0.5, 0:5:1.5"></textarea>
              <button id="btn-load-custom-tab" class="btn btn-sm btn-accent mt-2">Load Custom Tab</button>
            </div>
          </details>
        </div>
      </div>
    `;

    this.renderTabSheet();
  }

  updateCategory(catId) {
    this.currentCategory = catId;
    if (catId === 'all') {
      this.filteredPresets = TAB_PRESETS;
    } else {
      this.filteredPresets = TAB_PRESETS.filter(t => t.tabCategory === catId || t.stringCategory === catId);
    }

    // Update preset dropdown options
    const select = this.container.querySelector('#tab-preset-select');
    select.innerHTML = this.filteredPresets.map(t => `
      <option value="${t.id}">
        ${t.title} - ${t.artist}
      </option>
    `).join('');

    if (this.filteredPresets.length > 0) {
      this.loadPreset(this.filteredPresets[0]);
    }
  }

  loadPreset(preset) {
    this.stop();
    this.currentPreset = preset;
    this.tabColumns = preset.tabColumns;
    this.currentColIndex = 0;

    this.container.querySelector('#tab-title').textContent = preset.title;
    this.container.querySelector('#tab-artist').textContent = `by ${preset.artist}`;
    this.container.querySelector('#tab-diff').textContent = preset.difficulty;
    this.container.querySelector('#tab-desc').textContent = preset.description;
    this.container.querySelector('#tab-tip').innerHTML = `<strong>💡 How to play:</strong> ${preset.tips}`;

    const targetEl = this.container.querySelector('#tab-string-target');
    if (preset.stringTarget) {
      if (targetEl) {
        targetEl.textContent = `🎯 ${preset.stringTarget}`;
        targetEl.style.display = 'inline-block';
      }
    } else if (targetEl) {
      targetEl.style.display = 'none';
    }

    this.renderTabSheet();
  }

  renderTabSheet() {
    const sheet = this.container.querySelector('#tab-sheet');
    sheet.innerHTML = '';

    // Standard TAB String Names (from high string to low string):
    // line 0 = High E (str 5), line 1 = B (str 4), line 2 = G (str 3), line 3 = D (str 2), line 4 = A (str 1), line 5 = Low E (str 0)
    const stringLabels = ['e', 'B', 'G', 'D', 'A', 'E'];
    const stringIndices = [5, 4, 3, 2, 1, 0];

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

      stringIndices.forEach((strIdx) => {
        const slotEl = document.createElement('div');
        slotEl.className = 'tab-note-slot';
        
        const noteMatch = col.notes.find(n => n.str === strIdx);
        if (noteMatch) {
          slotEl.innerHTML = `<span class="fret-badge">${noteMatch.fret}</span>`;
          slotEl.classList.add('has-note');
        } else {
          slotEl.innerHTML = `<span class="empty-line">—</span>`;
        }

        colEl.appendChild(slotEl);
      });

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
    // Category chips click
    const categoryWrap = this.container.querySelector('#tab-category-chips');
    categoryWrap.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (chip) {
        categoryWrap.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.updateCategory(chip.dataset.tabCat);
      }
    });

    // Preset dropdown change
    const presetSelect = this.container.querySelector('#tab-preset-select');
    presetSelect.addEventListener('change', (e) => {
      const selected = TAB_PRESETS.find(p => p.id === e.target.value);
      if (selected) {
        this.loadPreset(selected);
      }
    });

    // Transport buttons
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
        alert('Invalid tab format. Use format str:fret:dur (e.g. 0:0:1, 0:3:1)');
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
        colEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        colEl.classList.remove('active-col');
      }
    });
  }
}
