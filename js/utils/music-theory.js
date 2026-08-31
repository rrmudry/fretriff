/**
 * Music Theory and Calculation Utilities for Guitar
 */

export const NOTES_SHARP = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
export const NOTES_FLAT  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// Standard Guitar Open String MIDI Numbers (0-indexed 6th string to 1st string)
// E2=40, A2=45, D3=50, G3=55, B3=59, E4=64
export const STANDARD_TUNING_MIDI = [40, 45, 50, 55, 59, 64];

export const TUNING_PRESETS = {
  standard: {
    name: 'Standard (E A D G B E)',
    notes: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
    midi: [40, 45, 50, 55, 59, 64],
    frequencies: [82.41, 110.00, 146.83, 196.00, 246.94, 329.63]
  },
  drop_d: {
    name: 'Drop D (D A D G B E)',
    notes: ['D2', 'A2', 'D3', 'G3', 'B3', 'E4'],
    midi: [38, 45, 50, 55, 59, 64],
    frequencies: [73.42, 110.00, 146.83, 196.00, 246.94, 329.63]
  },
  half_step_down: {
    name: 'Half-Step Down (Eb Ab Db Gb Bb Eb)',
    notes: ['Eb2', 'Ab2', 'Db3', 'Gb3', 'Bb3', 'Eb4'],
    midi: [39, 44, 49, 54, 58, 63],
    frequencies: [77.78, 103.83, 138.59, 185.00, 233.08, 311.13]
  },
  open_d: {
    name: 'Open D (D A D F# A D)',
    notes: ['D2', 'A2', 'D3', 'F#3', 'A3', 'D4'],
    midi: [38, 45, 50, 54, 57, 62],
    frequencies: [73.42, 110.00, 146.83, 185.00, 220.00, 293.66]
  },
  dadgad: {
    name: 'DADGAD (D A D G A D)',
    notes: ['D2', 'A2', 'D3', 'G3', 'A3', 'D4'],
    midi: [38, 45, 50, 55, 57, 62],
    frequencies: [73.42, 110.00, 146.83, 196.00, 220.00, 293.66]
  }
};

/**
 * Convert MIDI number to frequency in Hz
 */
export function midiToFrequency(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

/**
 * Convert frequency in Hz to closest MIDI note & cents deviation
 */
export function frequencyToNote(frequency) {
  if (!frequency || frequency < 20 || frequency > 5000) {
    return null;
  }
  const midiNum = 69 + 12 * Math.log2(frequency / 440);
  const roundedMidi = Math.round(midiNum);
  const cents = Math.floor((midiNum - roundedMidi) * 100);
  const noteIndex = ((roundedMidi % 12) + 12) % 12;
  const octave = Math.floor(roundedMidi / 12) - 1;
  const noteName = NOTES_SHARP[noteIndex];
  const targetFreq = midiToFrequency(roundedMidi);

  return {
    midi: roundedMidi,
    note: noteName,
    octave,
    fullNote: `${noteName}${octave}`,
    cents,
    targetFreq,
    frequency
  };
}

/**
 * Get note name and octave for a given string and fret in standard tuning
 * @param {number} stringIndex 0-5 (0 = 6th/Low E, 5 = 1st/High E)
 * @param {number} fret 0-22
 */
export function getFretNote(stringIndex, fret, tuningMidi = STANDARD_TUNING_MIDI) {
  const baseMidi = tuningMidi[stringIndex];
  const totalMidi = baseMidi + fret;
  const noteIndex = ((totalMidi % 12) + 12) % 12;
  const octave = Math.floor(totalMidi / 12) - 1;
  return {
    name: NOTES_SHARP[noteIndex],
    octave,
    midi: totalMidi,
    frequency: midiToFrequency(totalMidi)
  };
}

/**
 * Minor Pentatonic Scale Formula (Root, m3, P4, P5, m7) -> intervals [0, 3, 5, 7, 10]
 */
export function getPentatonicNotes(rootNote) {
  const cleanRoot = rootNote.replace(/[0-9]/g, '').trim();
  let rootIndex = NOTES_SHARP.indexOf(cleanRoot);
  if (rootIndex === -1) {
    rootIndex = NOTES_FLAT.indexOf(cleanRoot);
  }
  if (rootIndex === -1) rootIndex = 9; // default A

  const intervals = [0, 3, 5, 7, 10];
  return intervals.map(semitones => NOTES_SHARP[(rootIndex + semitones) % 12]);
}

/**
 * Transpose chord name by semitones
 */
export function transposeChord(chordName, semitones) {
  if (semitones === 0) return chordName;
  const match = chordName.match(/^([A-G][b#]?)(.*)$/);
  if (!match) return chordName;

  const root = match[1];
  const quality = match[2];

  let index = NOTES_SHARP.indexOf(root);
  if (index === -1) {
    index = NOTES_FLAT.indexOf(root);
  }
  if (index === -1) return chordName;

  const newIndex = ((index + semitones) % 12 + 12) % 12;
  return `${NOTES_SHARP[newIndex]}${quality}`;
}
