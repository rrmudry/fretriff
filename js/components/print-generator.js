/**
 * Printable Worksheets & Drill Sheet Generator
 */

import { CHORDS } from '../data/chords.js';

export class PrintGenerator {
  constructor() {
    this.sheets = [
      { id: 'website_slips', title: '✂️ Website Info & QR Cut-Out Slips (4-Up)' },
      { id: 'daily_workout', title: '🏋️ 3-Minute Daily Workout Sheet' },
      { id: 'electric_dozen', title: '⚡ The "Electric Dozen" & Power Chords' },
      { id: 'practice_tracker', title: '📅 Weekly Practice Log & Speed Tracker' },
      { id: 'blank_manuscript', title: '📝 Blank TAB & Chord Manuscript' }
    ];
  }

  renderPrintModal() {
    return `
      <dialog id="print-modal" class="modal-dialog">
        <div class="printable-modal-content">
          <div class="printable-toolbar">
            <div class="printable-selector-group">
              <label for="print-sheet-select" class="form-label">Select Sheet:</label>
              <select id="print-sheet-select" class="form-select form-select-sm">
                ${this.sheets.map(s => `<option value="${s.id}">${s.title}</option>`).join('')}
              </select>
            </div>

            <div class="print-actions-group">
              <a href="fretriff-handout-slips.pdf" download="fretriff-handout-slips.pdf" target="_blank" class="btn btn-outline" style="margin-right: 0.5rem; text-decoration: none;">
                📥 Download PDF Slips
              </a>
              <button id="btn-trigger-print" class="btn btn-primary">
                🖨️ Print / Save as PDF
              </button>
              <button id="btn-close-print-modal" class="btn btn-outline" style="margin-left: 0.5rem;">
                ✕ Close
              </button>
            </div>
          </div>

          <!-- The Rendered Paper Preview -->
          <div class="print-paper-preview" id="print-paper-preview">
            <!-- Sheet content injected here -->
          </div>
        </div>
      </dialog>
    `;
  }

  generateSheetHtml(sheetId) {
    switch (sheetId) {
      case 'website_slips':
        return this.getWebsiteSlipsSheet();
      case 'daily_workout':
        return this.getDailyWorkoutSheet();
      case 'electric_dozen':
        return this.getElectricDozenSheet();
      case 'practice_tracker':
        return this.getPracticeTrackerSheet();
      case 'blank_manuscript':
        return this.getBlankManuscriptSheet();
      default:
        return this.getWebsiteSlipsSheet();
    }
  }

  getDailyWorkoutSheet() {
    return `
      <div class="printable-sheet">
        <div class="sheet-header">
          <div class="sheet-title-group">
            <h2>⚡ FretRiff Daily Guitar Workout</h2>
            <p>3-Minute Daily Finger Independence & Technique Routine</p>
          </div>
          <div class="sheet-meta-box">
            <div>Student: <span class="meta-field">_________________</span></div>
            <div>Date: <span class="meta-field">_________</span></div>
          </div>
        </div>

        <!-- Drill 1: Spider Walk -->
        <div class="drill-block">
          <div class="drill-block-header">
            <span class="drill-title">1. The Spider Walk (1-2-3-4 Chromatic Warm-Up)</span>
            <span class="drill-meta">Goal: 60 → 90 → 120 BPM</span>
          </div>
          <p class="drill-instruction">Curl fingertips on tips behind fret wire. Play with 1-finger-per-fret discipline across all 6 strings.</p>
          <div class="printable-tab-staff">
e|---------------------------------------------------------1-2-3-4---|
B|-------------------------------------------------1-2-3-4-----------|
G|-----------------------------------------1-2-3-4-------------------|
D|---------------------------------1-2-3-4---------------------------|
A|-------------------------1-2-3-4-----------------------------------|
E|-1-2-3-4-1-2-3-4-1-2-3-4-------------------------------------------|
Fingers: 1 2 3 4  (Index, Middle, Ring, Pinky)</div>
        </div>

        <!-- Drill 2: The 1-3 Spider Alternate -->
        <div class="drill-block">
          <div class="drill-block-header">
            <span class="drill-title">2. The 1-3 Spider Alternate (1-3-2-4 Coordination)</span>
            <span class="drill-meta">Goal: 50 → 80 → 110 BPM</span>
          </div>
          <p class="drill-instruction">Index (1) → Ring (3) → Middle (2) → Pinky (4). Trains fingers to move independently.</p>
          <div class="printable-tab-staff">
e|-------------------------------------------------1-3-2-4---|
B|-----------------------------------------1-3-2-4-----------|
G|---------------------------------1-3-2-4-------------------|
D|-------------------------1-3-2-4---------------------------|
A|-----------------1-3-2-4-----------------------------------|
E|-1-3-2-4-1-3-2-4-------------------------------------------|</div>
        </div>

        <!-- Drill 3: Alternate Picking -->
        <div class="drill-block">
          <div class="drill-block-header">
            <span class="drill-title">3. Alternate Picking Engine (Down-Up-Down-Up)</span>
            <span class="drill-meta">Goal: 70 → 100 → 140 BPM</span>
          </div>
          <p class="drill-instruction">Strict down/up strokes. Pick from the relaxed wrist, never double-downstroke.</p>
          <div class="printable-tab-staff">
Pick:  ↓  ↑  ↓  ↑   ↓  ↑  ↓  ↑   ↓  ↑  ↓  ↑   ↓
E|-----0--0--0--0---3--3--3--3---5--5--5--5---0---|</div>
        </div>

        <!-- Drill 4: Palm Muting Rock Chugs -->
        <div class="drill-block">
          <div class="drill-block-header">
            <span class="drill-title">4. Palm Muting Rock Chug Workout</span>
            <span class="drill-meta">Goal: 80 → 110 → 140 BPM</span>
          </div>
          <p class="drill-instruction">Rest picking palm on bridge saddle. 4 tight muted chugs (P.M.) followed by 4 ringing open notes.</p>
          <div class="printable-tab-staff">
       P.M. - - - - - - - -        Open Ringing       G5   A5
E|-----0---0---0---0-------|-------0---0---0---0---|--3----5---|
A|-------------------------|-----------------------|--5----7---|</div>
        </div>

        <!-- Drill 5: Anchor Chords -->
        <div class="drill-block">
          <div class="drill-block-header">
            <span class="drill-title">5. The Anchor Finger Switch (G ↔ Cadd9 ↔ Dsus4)</span>
            <span class="drill-meta">Goal: 60 → 85 → 115 BPM</span>
          </div>
          <p class="drill-instruction">Keep Ring & Pinky locked on Fret 3 of strings 1 & 2! Only move Index & Middle fingers.</p>
          <div class="printable-tab-staff">
       G Major (Anchored)         Cadd9                     Dsus4
e|-----3-------------------|------3------------------|------3-----------|
B|-----3 (Ring Finger)-----|------3 (Ring Finger)----|------3-----------|
G|-----0-------------------|------0------------------|------2-----------|
D|-----0-------------------|------2 (Middle Finger)--|------0-----------|
A|-----2 (Index Finger)----|------3 (Ring/Middle)----|------x-----------|
E|-----3 (Middle Finger)---|------x------------------|------x-----------|</div>
        </div>

        <!-- Drill 6: A Minor Pentatonic Ladder -->
        <div class="drill-block">
          <div class="drill-block-header">
            <span class="drill-title">6. A Minor Pentatonic Box 1 Scale Ladder</span>
            <span class="drill-meta">Goal: 65 → 95 → 130 BPM</span>
          </div>
          <p class="drill-instruction">The classic rock lead solo scale! Ascend from Low E to High E, then descend back.</p>
          <div class="printable-tab-staff">
e|---------------------------------5-8-8-5---------------------------------|
B|-----------------------------5-8---------8-5-----------------------------|
G|-------------------------5-7-----------------7-5-------------------------|
D|---------------------5-7-------------------------7-5---------------------|
A|-----------------5-7---------------------------------7-5-----------------|
E|-5-8-8-5-5-8---------------------------------------------8-5-------------|
Fingers: 1 4  1 3  1 3  1 3  1 4  1 4 (Index=5, Ring=7, Pinky=8)</div>
        </div>
      </div>
    `;
  }

  getElectricDozenSheet() {
    const dozenChords = CHORDS.filter(c => c.category.includes('electric_dozen') || c.category.includes('super_beginner') || c.category.includes('power_chords')).slice(0, 16);

    return `
      <div class="printable-sheet">
        <div class="sheet-header">
          <div class="sheet-title-group">
            <h2>🎸 The Electric Guitar Foundation & Power Chords</h2>
            <p>Essential Open Chords, 1-Finger Mini-Chords & Rock Power Chords</p>
          </div>
          <div class="sheet-meta-box">
            <div>Quick Reference Sheet</div>
          </div>
        </div>

        <div class="printable-chords-grid">
          ${dozenChords.map(chord => `
            <div class="printable-chord-box">
              <div class="printable-chord-name">${chord.name}</div>
              <div class="printable-chord-formula">${chord.shortName} • Frets: ${chord.frets.map(f => f === -1 ? 'x' : f).join('-')}</div>
              <svg width="100" height="110" viewBox="0 0 100 110" class="printable-chord-svg">
                <!-- Nut -->
                <line x1="15" y1="18" x2="85" y2="18" stroke="#000" stroke-width="${chord.baseFret > 1 ? 1 : 4}"/>
                <!-- Frets -->
                <line x1="15" y1="36" x2="85" y2="36" stroke="#555" stroke-width="1"/>
                <line x1="15" y1="54" x2="85" y2="54" stroke="#555" stroke-width="1"/>
                <line x1="15" y1="72" x2="85" y2="72" stroke="#555" stroke-width="1"/>
                <line x1="15" y1="90" x2="85" y2="90" stroke="#555" stroke-width="1"/>
                <!-- Strings -->
                ${[0, 1, 2, 3, 4, 5].map(s => {
                  const x = 15 + s * 14;
                  return `<line x1="${x}" y1="18" x2="${x}" y2="90" stroke="#000" stroke-width="1"/>`;
                }).join('')}
                <!-- Dots & Markers -->
                ${chord.frets.map((fret, s) => {
                  const x = 15 + s * 14;
                  if (fret === -1) {
                    return `<text x="${x}" y="12" font-size="10" font-weight="bold" text-anchor="middle" fill="#000">✕</text>`;
                  } else if (fret === 0) {
                    return `<circle cx="${x}" cy="10" r="3.5" fill="none" stroke="#000" stroke-width="1.5"/>`;
                  } else {
                    const y = 18 + (fret - chord.baseFret + 0.5) * 18;
                    const finger = chord.fingers[s] || '';
                    return `
                      <circle cx="${x}" cy="${y}" r="6" fill="#000"/>
                      <text x="${x}" y="${y + 3.5}" font-size="8" font-weight="bold" text-anchor="middle" fill="#fff">${finger}</text>
                    `;
                  }
                }).join('')}
              </svg>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  getPracticeTrackerSheet() {
    return `
      <div class="printable-sheet">
        <div class="sheet-header">
          <div class="sheet-title-group">
            <h2>📅 Weekly Practice Log & Speed Tracker</h2>
            <p>Track your 3-minute daily warm-up and BPM milestone progress</p>
          </div>
          <div class="sheet-meta-box">
            <div>Week of: <span class="meta-field">_________</span></div>
            <div>Target Goal: <span class="meta-field">_________</span></div>
          </div>
        </div>

        <table class="printable-log-table">
          <thead>
            <tr>
              <th style="width: 15%;">Day</th>
              <th style="width: 30%;">Focus Exercises / Riffs</th>
              <th style="width: 15%;">Start BPM</th>
              <th style="width: 15%;">End BPM</th>
              <th style="width: 10%;">Done?</th>
              <th style="width: 15%;">Notes & Wins</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Monday</strong></td><td>Spider Walk + Brain Stew</td><td></td><td></td><td>[  ]</td><td></td></tr>
            <tr><td><strong>Tuesday</strong></td><td>Alternate Picking + Smoke on Water</td><td></td><td></td><td>[  ]</td><td></td></tr>
            <tr><td><strong>Wednesday</strong></td><td>Anchor Chords + Demons</td><td></td><td></td><td>[  ]</td><td></td></tr>
            <tr><td><strong>Thursday</strong></td><td>Palm Muting + The Kids Aren't Alright</td><td></td><td></td><td>[  ]</td><td></td></tr>
            <tr><td><strong>Friday</strong></td><td>Pentatonic Scale + Californication Solo</td><td></td><td></td><td>[  ]</td><td></td></tr>
            <tr><td><strong>Saturday</strong></td><td>Power Chord Slides + Super Mario</td><td></td><td></td><td>[  ]</td><td></td></tr>
            <tr><td><strong>Sunday</strong></td><td>Free Jam & Song Recital!</td><td></td><td></td><td>[  ]</td><td></td></tr>
          </tbody>
        </table>

        <div style="margin-top: 1.5rem; background: #f9fafb; border: 1px solid #d1d5db; padding: 1rem; border-radius: 4px;">
          <h4 style="margin: 0 0 0.5rem 0; font-size: 0.95rem;">🏆 Weekly Goal & Teacher/Parent Notes:</h4>
          <div style="height: 60px; border-bottom: 1px dashed #9ca3af;"></div>
        </div>
      </div>
    `;
  }

  getBlankManuscriptSheet() {
    return `
      <div class="printable-sheet">
        <div class="sheet-header">
          <div class="sheet-title-group">
            <h2>📝 Blank Tablature & Chord Manuscript</h2>
            <p>Write your own riffs, chord progressions, and custom tabs</p>
          </div>
          <div class="sheet-meta-box">
            <div>Song / Idea: <span class="meta-field">_________________</span></div>
          </div>
        </div>

        <!-- 4 Blank TAB Staves -->
        ${[1, 2, 3, 4].map(num => `
          <div class="blank-tab-staff">
            <div class="blank-staff-lines">
              <span class="blank-staff-label">T<br>A<br>B</span>
            </div>
          </div>
        `).join('')}

        <div style="margin-top: 1.5rem;">
          <h4 style="margin: 0 0 0.75rem 0; font-size: 0.9rem; font-weight: 700;">Chord Shapes Used:</h4>
          <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 0.75rem;">
            ${[1, 2, 3, 4, 5, 6].map(() => `
              <div style="border: 1px solid #9ca3af; height: 95px; border-radius: 3px; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding: 4px;">
                <div style="width: 80%; border-bottom: 1px solid #9ca3af; margin-bottom: 6px; font-size: 0.75rem; text-align: center; color: #6b7280;">Name</div>
                <div style="width: 70%; height: 60px; border: 1px solid #9ca3af; background: repeating-linear-gradient(to bottom, transparent, transparent 13px, #9ca3af 13px, #9ca3af 14px), repeating-linear-gradient(to right, transparent, transparent 11px, #9ca3af 11px, #9ca3af 12px);"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  getWebsiteSlipsSheet() {
    const singleCardHtml = `
      <div class="slip-card">
        <div class="slip-header">
          <div class="slip-brand">
            <span class="slip-icon">⚡</span>
            <div>
              <div class="slip-title">FretRiff</div>
              <span class="slip-subtitle">Electric Guitar Companion</span>
            </div>
          </div>
          <span class="slip-badge">Free Web App</span>
        </div>

        <div class="slip-body">
          <div class="slip-qr-col">
            <img class="qr-image" src="assets/fretriff-qr.png" alt="Scan QR Code to visit FretRiff">
            <span class="qr-scan-hint">Scan with Camera</span>
            <span class="qr-url">rrmudry.github.io/fretriff</span>
          </div>

          <ul class="slip-features">
            <li><span class="feature-icon">🎸</span> <div><strong>The Electric Dozen:</strong> Open chords & rock power chords</div></li>
            <li><span class="feature-icon">🎼</span> <div><strong>Progression Studio:</strong> Interactive chord combinations</div></li>
            <li><span class="feature-icon">📜</span> <div><strong>Interactive TABs:</strong> Offspring, Imagine Dragons & rock riffs</div></li>
            <li><span class="feature-icon">🏋️</span> <div><strong>3-Min Workout:</strong> Spider walks, picking & printable logs</div></li>
            <li><span class="feature-icon">🎯</span> <div><strong>Precision Tuner:</strong> Real-time microphone chromatic pitch</div></li>
            <li><span class="feature-icon">⚡</span> <div><strong>Pentatonic Soloing:</strong> Fretboard scale visualizer</div></li>
          </ul>
        </div>

        <div class="slip-banner">
          <span class="slip-banner-text">🚀 Zero login • No ads • Works on phones, tablets & laptops</span>
        </div>

        <div class="slip-footer">
          <span>https://rrmudry.github.io/fretriff/</span>
          <span class="slip-cut-hint">✂ Cut slip for your music stand</span>
        </div>
      </div>
    `;

    return `
      <div class="website-slips-page">
        <!-- Cutting Guides -->
        <div class="cut-line-horizontal">
          <span class="scissor-label">✂ CUT HERE</span>
          <span class="scissor-label">✂ CUT HERE</span>
        </div>
        <div class="cut-line-vertical">
          <span class="scissor-label">✂ CUT</span>
          <span class="scissor-label">✂ CUT</span>
        </div>

        ${singleCardHtml}
        ${singleCardHtml}
        ${singleCardHtml}
        ${singleCardHtml}
      </div>
    `;
  }
}
