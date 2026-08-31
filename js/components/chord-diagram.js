/**
 * Interactive SVG Chord Diagram Generator & String Plucker
 */

import { guitarSynth } from '../audio/synth.js';
import { STANDARD_TUNING_MIDI } from '../utils/music-theory.js';

export function renderChordSvg(chord, options = {}) {
  const width = options.width || 180;
  const height = options.height || 210;
  const numStrings = 6;
  const numFrets = 4;
  
  const padX = 28;
  const padTop = 38;
  const padBottom = 22;

  const stringSpacing = (width - padX * 2) / (numStrings - 1);
  const fretSpacing = (height - padTop - padBottom) / numFrets;

  const baseFret = chord.baseFret || 1;
  const isNut = baseFret === 1;

  let svg = `<svg class="chord-svg" viewBox="0 0 ${width} ${height}" data-chord-id="${chord.id}">`;

  // Draw Top Nut or Base Fret label
  if (isNut) {
    svg += `<rect x="${padX - 1}" y="${padTop - 5}" width="${(numStrings - 1) * stringSpacing + 2}" height="5" fill="var(--color-text-primary, #e2e8f0)" rx="1"/>`;
  } else {
    svg += `<text x="${padX - 14}" y="${padTop + fretSpacing * 0.7}" class="fret-num-label">${baseFret}fr</text>`;
  }

  // Draw Fret wires (Horizontal)
  for (let f = 0; f <= numFrets; f++) {
    const y = padTop + f * fretSpacing;
    svg += `<line x1="${padX}" y1="${y}" x2="${padX + (numStrings - 1) * stringSpacing}" y2="${y}" stroke="var(--color-border-fret, #475569)" stroke-width="${f === 0 && !isNut ? 2 : 1.5}"/>`;
  }

  // Draw Strings (Vertical, with realistic thickness from low E to high E)
  for (let s = 0; s < numStrings; s++) {
    const x = padX + s * stringSpacing;
    const strokeWidth = 2.8 - (s * 0.35); // 6th string thickest, 1st thinnest
    svg += `<line x1="${x}" y1="${padTop}" x2="${x}" y2="${padTop + numFrets * fretSpacing}" stroke="var(--color-string, #94a3b8)" stroke-width="${strokeWidth}" class="string-line" data-string="${s}"/>`;
  }

  // Draw Open / Mute Indicators at Top
  chord.frets.forEach((fret, s) => {
    const x = padX + s * stringSpacing;
    const y = padTop - 14;

    if (fret === -1) {
      // Muted string (X)
      svg += `<text x="${x}" y="${y}" class="mute-indicator" text-anchor="middle">✕</text>`;
    } else if (fret === 0) {
      // Open ringing string (O)
      svg += `<circle cx="${x}" cy="${y - 4}" r="5" class="open-indicator" data-string="${s}" data-fret="0"/>`;
    }
  });

  // Draw Finger Dots on Frets
  chord.frets.forEach((fret, s) => {
    if (fret > 0) {
      const relFret = fret - baseFret + 1;
      if (relFret >= 1 && relFret <= numFrets) {
        const x = padX + s * stringSpacing;
        const y = padTop + (relFret - 0.5) * fretSpacing;
        const isRoot = (s === chord.rootString);
        const fingerNum = chord.fingers ? chord.fingers[s] : '';
        const displayLabel = isRoot && (!fingerNum || fingerNum <= 0) ? 'R' : (fingerNum > 0 ? fingerNum : '');

        const dotClass = isRoot ? 'finger-dot root-dot' : 'finger-dot';
        svg += `
          <g class="dot-group" data-string="${s}" data-fret="${fret}">
            <circle cx="${x}" cy="${y}" r="9" class="${dotClass}"/>
            <text x="${x}" y="${y + 3.5}" class="dot-label" text-anchor="middle">${displayLabel}</text>
          </g>
        `;
      }
    }
  });

  // String names / notes at bottom
  chord.notesSpelled.forEach((note, s) => {
    const x = padX + s * stringSpacing;
    const y = height - 4;
    svg += `<text x="${x}" y="${y}" class="bottom-note-label" text-anchor="middle">${note}</text>`;
  });

  svg += `</svg>`;
  return svg;
}

/**
 * Creates an interactive Chord Card DOM element
 */
export function createChordCard(chord, onSelect = null) {
  const card = document.createElement('div');
  card.className = 'chord-card';
  card.dataset.chordId = chord.id;

  const isPower = chord.category.includes('power_chords');
  const isDozen = chord.category.includes('electric_dozen');
  const isSuperBeginner = chord.category.includes('super_beginner');

  let tagsHtml = '';
  if (isSuperBeginner) tagsHtml += `<span class="badge badge-super-beginner">🟢 1-2 Finger</span>`;
  if (isDozen) tagsHtml += `<span class="badge badge-dozen">⚡ Electric Dozen</span>`;
  if (isPower) tagsHtml += `<span class="badge badge-power">🔥 Rock Power</span>`;

  card.innerHTML = `
    <div class="chord-card-header">
      <div class="chord-title-group">
        <h3 class="chord-name">${chord.name}</h3>
        <span class="chord-short-name">${chord.shortName}</span>
      </div>
      <div class="chord-tags">${tagsHtml}</div>
    </div>
    
    <div class="chord-svg-container" title="Click string to pluck, or swipe to strum!">
      ${renderChordSvg(chord)}
    </div>

    <div class="chord-card-footer">
      <div class="chord-actions">
        <button class="btn btn-sm btn-strum" data-action="strum" title="Strum Chord">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
          Strum
        </button>
        <button class="btn btn-sm btn-outline btn-arpeggiate" data-action="arpeggiate" title="Pluck String by String">
          Arpeggio
        </button>
      </div>
      ${chord.tip ? `<p class="chord-tip"><strong>Pro-Tip:</strong> ${chord.tip}</p>` : ''}
    </div>
  `;

  // Attach interactive audio events
  const strumBtn = card.querySelector('[data-action="strum"]');
  strumBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    guitarSynth.playChord(chord.frets, 'down', 30);
    card.classList.add('active-strum');
    setTimeout(() => card.classList.remove('active-strum'), 400);
  });

  const arpeggioBtn = card.querySelector('[data-action="arpeggiate"]');
  arpeggioBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    guitarSynth.playChord(chord.frets, 'down', 160, null, 2.5);
  });

  // Clicking dots / open strings plucks that exact string
  const svgEl = card.querySelector('.chord-svg');
  svgEl.addEventListener('click', (e) => {
    const dot = e.target.closest('.dot-group, .open-indicator');
    if (dot) {
      const stringIdx = parseInt(dot.dataset.string, 10);
      const fret = parseInt(dot.dataset.fret, 10);
      guitarSynth.playNote(stringIdx, fret);
      dot.classList.add('pulse-pluck');
      setTimeout(() => dot.classList.remove('pulse-pluck'), 300);
    } else {
      guitarSynth.playChord(chord.frets, 'down', 30);
    }
  });

  if (onSelect) {
    card.addEventListener('click', () => onSelect(chord));
  }

  return card;
}
