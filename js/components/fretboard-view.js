/**
 * Interactive 22-Fret Electric Guitar Neck & Pentatonic Lead Studio
 * Features: All Strings view, Single-String Focus Isolator, and Minor Pentatonic Scale
 */

import { NOTES_SHARP, STANDARD_TUNING_MIDI, getFretNote, getPentatonicNotes } from '../utils/music-theory.js';
import { guitarSynth } from '../audio/synth.js';

export class FretboardView {
  constructor(containerEl) {
    this.container = containerEl;
    this.numFrets = 15; // 15 frets visible
    this.selectedKey = 'A';
    this.displayMode = 'pentatonic'; // 'pentatonic', 'all_notes', 'roots_only'
    this.focusedString = 'all'; // 'all' or 0-5
    
    this.initUI();
    this.setupListeners();
  }

  initUI() {
    this.container.innerHTML = `
      <div class="fretboard-studio-wrapper">
        <!-- Controls Header -->
        <div class="fretboard-controls">
          <div class="control-item">
            <label for="fretboard-key-select" class="form-label">Scale Key / Root:</label>
            <select id="fretboard-key-select" class="form-select">
              ${NOTES_SHARP.map(n => `<option value="${n}" ${n === this.selectedKey ? 'selected' : ''}>Key of ${n}</option>`).join('')}
            </select>
          </div>

          <div class="control-item">
            <label for="fretboard-mode-select" class="form-label">View Mode:</label>
            <select id="fretboard-mode-select" class="form-select">
              <option value="pentatonic" selected>⚡ Minor Pentatonic Scale ("Rock Solo Pattern")</option>
              <option value="all_notes">🎼 All Fretboard Notes</option>
              <option value="roots_only">🎯 Root Notes Only</option>
            </select>
          </div>

          <div class="control-item">
            <label for="fretboard-string-focus" class="form-label">String Isolator:</label>
            <select id="fretboard-string-focus" class="form-select">
              <option value="all">🎸 All 6 Strings</option>
              <option value="0">🟢 Isolate Low E (6th) String</option>
              <option value="1">🟢 Isolate A (5th) String</option>
              <option value="2">🟡 Isolate D (4th) String</option>
              <option value="3">🟡 Isolate G (3rd) String</option>
              <option value="4">🔴 Isolate B (2nd) String</option>
              <option value="5">🔴 Isolate High E (1st) String</option>
            </select>
          </div>
        </div>

        <!-- Theory Lead Tip -->
        <div class="fretboard-tip-card">
          <h4>🎸 The Secret Sauce of Electric Guitar Solos</h4>
          <p id="fretboard-tip-text">
            The <strong>${this.selectedKey} Minor Pentatonic Scale</strong> (Notes: ${getPentatonicNotes(this.selectedKey).join(' - ')}) is the exact set of notes used in iconic guitar solos by Jimi Hendrix, Jimmy Page, and Slash. Play any of the highlighted notes over a progression in ${this.selectedKey} and it will immediately sound killer!
          </p>
        </div>

        <!-- The Visual Fretboard -->
        <div class="fretboard-scroll-wrap">
          <div class="fretboard-neck" id="fretboard-neck">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </div>
    `;

    this.renderFretboard();
  }

  renderFretboard() {
    const neck = this.container.querySelector('#fretboard-neck');
    neck.innerHTML = '';

    const pentatonicNotes = getPentatonicNotes(this.selectedKey);
    // Standard visual order: High E on top (idx 5) to Low E on bottom (idx 0)
    let stringIndices = [5, 4, 3, 2, 1, 0];
    if (this.focusedString !== 'all') {
      const target = parseInt(this.focusedString, 10);
      stringIndices = [target];
    }

    // Marker frets
    const singleDotFrets = [3, 5, 7, 9, 15, 17, 19, 21];
    const doubleDotFrets = [12];

    // Fret Number Header Row
    const numRow = document.createElement('div');
    numRow.className = 'fret-number-row';
    const openNum = document.createElement('div');
    openNum.className = 'fret-num-col open-col-header';
    openNum.textContent = 'Open';
    numRow.appendChild(openNum);

    for (let f = 1; f <= this.numFrets; f++) {
      const numCol = document.createElement('div');
      numCol.className = 'fret-num-col';
      numCol.textContent = f;
      numRow.appendChild(numCol);
    }
    neck.appendChild(numRow);

    // Render Strings & Frets
    stringIndices.forEach((strIdx) => {
      const stringRow = document.createElement('div');
      stringRow.className = 'fret-string-row';

      // Open string fret (fret 0)
      const openFretEl = document.createElement('div');
      openFretEl.className = 'fret-cell fret-0-nut';
      const openNote = getFretNote(strIdx, 0);
      this.populateFretCell(openFretEl, strIdx, 0, openNote, pentatonicNotes);
      stringRow.appendChild(openFretEl);

      // Frets 1 to N
      for (let f = 1; f <= this.numFrets; f++) {
        const fretCell = document.createElement('div');
        fretCell.className = 'fret-cell';
        
        // Fret inlays / dots
        if (strIdx === 2 && singleDotFrets.includes(f)) {
          const dot = document.createElement('div');
          dot.className = 'fret-inlay-dot';
          fretCell.appendChild(dot);
        } else if ((strIdx === 1 || strIdx === 3) && doubleDotFrets.includes(f)) {
          const dot = document.createElement('div');
          dot.className = 'fret-inlay-dot double-dot';
          fretCell.appendChild(dot);
        }

        const note = getFretNote(strIdx, f);
        this.populateFretCell(fretCell, strIdx, f, note, pentatonicNotes);
        stringRow.appendChild(fretCell);
      }

      neck.appendChild(stringRow);
    });
  }

  populateFretCell(cell, strIdx, fret, note, pentatonicNotes) {
    const isRoot = (note.name === this.selectedKey);
    const isPentatonic = pentatonicNotes.includes(note.name);

    let showNote = false;
    let noteClass = 'fret-note-marker';

    if (this.displayMode === 'all_notes') {
      showNote = true;
      if (isRoot) noteClass += ' root-marker';
    } else if (this.displayMode === 'pentatonic') {
      if (isPentatonic) {
        showNote = true;
        noteClass += isRoot ? ' root-marker' : ' pentatonic-marker';
      }
    } else if (this.displayMode === 'roots_only') {
      if (isRoot) {
        showNote = true;
        noteClass += ' root-marker';
      }
    }

    if (showNote) {
      const marker = document.createElement('div');
      marker.className = noteClass;
      marker.innerHTML = `<span>${note.name}</span>`;
      cell.appendChild(marker);
    }

    cell.dataset.str = strIdx;
    cell.dataset.fret = fret;
    cell.title = `${note.name}${note.octave} (String ${6 - strIdx}, Fret ${fret})`;

    cell.addEventListener('click', () => {
      guitarSynth.init();
      guitarSynth.playNote(strIdx, fret, 2.0);
      cell.classList.add('fret-plucked');
      setTimeout(() => cell.classList.remove('fret-plucked'), 300);
    });
  }

  setupListeners() {
    const keySelect = this.container.querySelector('#fretboard-key-select');
    keySelect.addEventListener('change', (e) => {
      this.selectedKey = e.target.value;
      const notes = getPentatonicNotes(this.selectedKey).join(' - ');
      this.container.querySelector('#fretboard-tip-text').innerHTML = `
        The <strong>${this.selectedKey} Minor Pentatonic Scale</strong> (Notes: ${notes}) is the exact set of notes used in iconic guitar solos by Jimi Hendrix, Jimmy Page, and Slash. Play any of the highlighted notes over a progression in ${this.selectedKey} and it will immediately sound killer!
      `;
      this.renderFretboard();
    });

    const modeSelect = this.container.querySelector('#fretboard-mode-select');
    modeSelect.addEventListener('change', (e) => {
      this.displayMode = e.target.value;
      this.renderFretboard();
    });

    const focusSelect = this.container.querySelector('#fretboard-string-focus');
    focusSelect.addEventListener('change', (e) => {
      this.focusedString = e.target.value;
      this.renderFretboard();
    });
  }
}
