/**
 * The Guitar Chord Database
 * Features: The Electric Dozen, Essential 8 Open Chords, Power Chords, 7ths, and Sus Chords
 */

export const CHORD_CATEGORIES = [
  { id: 'all', name: 'All Chords' },
  { id: 'electric_dozen', name: '⚡ The Electric Dozen' },
  { id: 'essential_8', name: '🎸 Essential 8 Open Chords' },
  { id: 'power_chords', name: '🔥 Rock Power Chords' },
  { id: 'sevenths', name: '🎷 Blues & 7th Chords' },
  { id: 'color', name: '✨ Sus & Color Chords' }
];

export const CHORDS = [
  // --- ESSENTIAL 8 OPEN MAJORS & MINORS ---
  {
    id: 'E_maj',
    name: 'E Major',
    shortName: 'E',
    category: ['electric_dozen', 'essential_8'],
    difficulty: 'Beginner',
    frets: [0, 2, 2, 1, 0, 0],
    fingers: [0, 2, 3, 1, 0, 0],
    rootString: 0, // Low E
    notesSpelled: ['E', 'B', 'E', 'G#', 'B', 'E'],
    baseFret: 1,
    tip: 'Keep your fingers curled so they don’t accidentally touch and mute the open strings below them!'
  },
  {
    id: 'Em_min',
    name: 'E Minor',
    shortName: 'Em',
    category: ['electric_dozen', 'essential_8'],
    difficulty: 'Beginner',
    frets: [0, 2, 2, 0, 0, 0],
    fingers: [0, 2, 3, 0, 0, 0],
    rootString: 0,
    notesSpelled: ['E', 'B', 'E', 'G', 'B', 'E'],
    baseFret: 1,
    tip: 'Often called the easiest chord on guitar. Only 2 fingers needed!'
  },
  {
    id: 'A_maj',
    name: 'A Major',
    shortName: 'A',
    category: ['electric_dozen', 'essential_8'],
    difficulty: 'Beginner',
    frets: [-1, 0, 2, 2, 2, 0],
    fingers: [-1, 0, 1, 2, 3, 0],
    rootString: 1, // A string
    notesSpelled: ['X', 'A', 'E', 'A', 'C#', 'E'],
    baseFret: 1,
    tip: 'Squeeze 3 fingers tightly into the 2nd fret, or try barring with your index finger for rock rhythm.'
  },
  {
    id: 'Am_min',
    name: 'A Minor',
    shortName: 'Am',
    category: ['electric_dozen', 'essential_8'],
    difficulty: 'Beginner',
    frets: [-1, 0, 2, 2, 1, 0],
    fingers: [-1, 0, 2, 3, 1, 0],
    rootString: 1,
    notesSpelled: ['X', 'A', 'E', 'A', 'C', 'E'],
    baseFret: 1,
    tip: 'Notice this is the exact same shape as E Major, just moved down one string!'
  },
  {
    id: 'D_maj',
    name: 'D Major',
    shortName: 'D',
    category: ['electric_dozen', 'essential_8'],
    difficulty: 'Beginner',
    frets: [-1, -1, 0, 2, 3, 2],
    fingers: [-1, -1, 0, 1, 3, 2],
    rootString: 2, // D string
    notesSpelled: ['X', 'X', 'D', 'A', 'D', 'F#'],
    baseFret: 1,
    tip: 'Forms a triangle shape on the top 3 strings. Only strum from the open 4th (D) string down.'
  },
  {
    id: 'Dm_min',
    name: 'D Minor',
    shortName: 'Dm',
    category: ['electric_dozen', 'essential_8'],
    difficulty: 'Beginner',
    frets: [-1, -1, 0, 2, 3, 1],
    fingers: [-1, -1, 0, 2, 3, 1],
    rootString: 2,
    notesSpelled: ['X', 'X', 'D', 'A', 'D', 'F'],
    baseFret: 1,
    tip: 'The "saddest of all chords". Stretch your index finger to the 1st fret on the high E string.'
  },
  {
    id: 'C_maj',
    name: 'C Major',
    shortName: 'C',
    category: ['electric_dozen', 'essential_8'],
    difficulty: 'Beginner',
    frets: [-1, 3, 2, 0, 1, 0],
    fingers: [-1, 3, 2, 0, 1, 0],
    rootString: 1,
    notesSpelled: ['X', 'C', 'E', 'G', 'C', 'E'],
    baseFret: 1,
    tip: 'A classic diagonal staircase shape. Make sure your ring finger doesn’t touch the open G string.'
  },
  {
    id: 'G_maj',
    name: 'G Major',
    shortName: 'G',
    category: ['electric_dozen', 'essential_8'],
    difficulty: 'Beginner',
    frets: [3, 2, 0, 0, 0, 3],
    fingers: [2, 1, 0, 0, 0, 3],
    rootString: 0,
    notesSpelled: ['G', 'B', 'D', 'G', 'B', 'G'],
    baseFret: 1,
    tip: 'Strum all 6 strings boldly. You can also play the rock G with ring finger on 2nd string 3rd fret!'
  },

  // --- THE 4 ESSENTIAL 7TH CHORDS (Completing the Electric Dozen) ---
  {
    id: 'E7_dom',
    name: 'E Dominant 7th',
    shortName: 'E7',
    category: ['electric_dozen', 'sevenths'],
    difficulty: 'Beginner',
    frets: [0, 2, 0, 1, 0, 0],
    fingers: [0, 2, 0, 1, 0, 0],
    rootString: 0,
    notesSpelled: ['E', 'B', 'D', 'G#', 'B', 'E'],
    baseFret: 1,
    tip: 'Just like E Major, but lift your ring finger to let the open D string ring with bluesy tension.'
  },
  {
    id: 'A7_dom',
    name: 'A Dominant 7th',
    shortName: 'A7',
    category: ['electric_dozen', 'sevenths'],
    difficulty: 'Beginner',
    frets: [-1, 0, 2, 0, 2, 0],
    fingers: [-1, 0, 2, 0, 3, 0],
    rootString: 1,
    notesSpelled: ['X', 'A', 'E', 'G', 'C#', 'E'],
    baseFret: 1,
    tip: 'Just two fingers on the 2nd fret with an open G string ringing in between.'
  },
  {
    id: 'D7_dom',
    name: 'D Dominant 7th',
    shortName: 'D7',
    category: ['electric_dozen', 'sevenths'],
    difficulty: 'Beginner',
    frets: [-1, -1, 0, 2, 1, 2],
    fingers: [-1, -1, 0, 2, 1, 3],
    rootString: 2,
    notesSpelled: ['X', 'X', 'D', 'A', 'C', 'F#'],
    baseFret: 1,
    tip: 'An upside-down triangle compared to normal D major.'
  },
  {
    id: 'B7_dom',
    name: 'B Dominant 7th',
    shortName: 'B7',
    category: ['electric_dozen', 'sevenths'],
    difficulty: 'Beginner-Intermediate',
    frets: [-1, 2, 1, 2, 0, 2],
    fingers: [-1, 2, 1, 3, 0, 4],
    rootString: 1,
    notesSpelled: ['X', 'B', 'D#', 'A', 'B', 'F#'],
    baseFret: 1,
    tip: 'The magic chord for blues in E! Uses all 4 fingers—take your time positioning each one.'
  },

  // --- ROCK POWER CHORDS (Essential for Electric Guitar) ---
  {
    id: 'E5_power',
    name: 'E5 Power Chord',
    shortName: 'E5',
    category: ['electric_dozen', 'power_chords'],
    difficulty: 'Beginner',
    frets: [0, 2, 2, -1, -1, -1],
    fingers: [0, 1, 2, -1, -1, -1],
    rootString: 0,
    notesSpelled: ['E', 'B', 'E', 'X', 'X', 'X'],
    baseFret: 1,
    tip: 'The classic heavy metal open power chord. Heavy, punchy, and huge with distortion!'
  },
  {
    id: 'A5_power',
    name: 'A5 Power Chord',
    shortName: 'A5',
    category: ['electric_dozen', 'power_chords'],
    difficulty: 'Beginner',
    frets: [-1, 0, 2, 2, -1, -1],
    fingers: [-1, 0, 1, 2, -1, -1],
    rootString: 1,
    notesSpelled: ['X', 'A', 'E', 'A', 'X', 'X'],
    baseFret: 1,
    tip: 'Open A string + 2nd fret on D and G strings. Foundation of AC/DC & rock rhythm.'
  },
  {
    id: 'D5_power',
    name: 'D5 Power Chord',
    shortName: 'D5',
    category: ['power_chords'],
    difficulty: 'Beginner',
    frets: [-1, -1, 0, 2, 3, -1],
    fingers: [-1, -1, 0, 1, 2, -1],
    rootString: 2,
    notesSpelled: ['X', 'X', 'D', 'A', 'D', 'X'],
    baseFret: 1,
    tip: 'Open D power chord. Bright and cutting through the mix.'
  },
  {
    id: 'G5_power',
    name: 'G5 Power Chord (Movable)',
    shortName: 'G5',
    category: ['power_chords'],
    difficulty: 'Beginner',
    frets: [3, 5, 5, -1, -1, -1],
    fingers: [1, 3, 4, -1, -1, -1],
    rootString: 0,
    notesSpelled: ['G', 'D', 'G', 'X', 'X', 'X'],
    baseFret: 1,
    tip: 'Movable shape! Slide this exact shape anywhere along the 6th string to play ANY rock power chord.'
  },
  {
    id: 'C5_power',
    name: 'C5 Power Chord (Movable)',
    shortName: 'C5',
    category: ['power_chords'],
    difficulty: 'Beginner',
    frets: [-1, 3, 5, 5, -1, -1],
    fingers: [-1, 1, 3, 4, -1, -1],
    rootString: 1,
    notesSpelled: ['X', 'C', 'G', 'C', 'X', 'X'],
    baseFret: 1,
    tip: 'Movable 5th-string power chord shape. Used everywhere in Green Day, Nirvana, and Foo Fighters!'
  },
  {
    id: 'F5_power',
    name: 'F5 Power Chord',
    shortName: 'F5',
    category: ['power_chords'],
    difficulty: 'Beginner',
    frets: [1, 3, 3, -1, -1, -1],
    fingers: [1, 3, 4, -1, -1, -1],
    rootString: 0,
    notesSpelled: ['F', 'C', 'F', 'X', 'X', 'X'],
    baseFret: 1,
    tip: 'The easiest way to play an F chord on electric guitar without difficult full barre fingering!'
  },

  // --- EASY F & COLOR CHORDS ---
  {
    id: 'F_easy',
    name: 'F Major (Easy / Mini)',
    shortName: 'Fmaj7/F',
    category: ['essential_8', 'color'],
    difficulty: 'Beginner',
    frets: [-1, -1, 3, 2, 1, 0],
    fingers: [-1, -1, 3, 2, 1, 0],
    rootString: 2,
    notesSpelled: ['X', 'X', 'F', 'A', 'C', 'E'],
    baseFret: 1,
    tip: 'The secret beginner-friendly F chord! No barre required. Adds a lush, dreamy sound.'
  },
  {
    id: 'Cadd9_col',
    name: 'Cadd9',
    shortName: 'Cadd9',
    category: ['color'],
    difficulty: 'Beginner',
    frets: [-1, 3, 2, 0, 3, 3],
    fingers: [-1, 2, 1, 0, 3, 4],
    rootString: 1,
    notesSpelled: ['X', 'C', 'E', 'G', 'D', 'G'],
    baseFret: 1,
    tip: 'Anchor your ring and pinky on the 3rd fret of the top 2 strings. Switch seamlessly to G major!'
  },
  {
    id: 'Dsus4_col',
    name: 'Dsus4',
    shortName: 'Dsus4',
    category: ['color'],
    difficulty: 'Beginner',
    frets: [-1, -1, 0, 2, 3, 3],
    fingers: [-1, -1, 0, 1, 2, 4],
    rootString: 2,
    notesSpelled: ['X', 'X', 'D', 'A', 'D', 'G'],
    baseFret: 1,
    tip: 'Add your pinky to the 3rd fret on high E string while holding D Major. Instant acoustic rock flair!'
  },
  {
    id: 'Asus2_col',
    name: 'Asus2',
    shortName: 'Asus2',
    category: ['color'],
    difficulty: 'Beginner',
    frets: [-1, 0, 2, 2, 0, 0],
    fingers: [-1, 0, 1, 2, 0, 0],
    rootString: 1,
    notesSpelled: ['X', 'A', 'E', 'A', 'B', 'E'],
    baseFret: 1,
    tip: 'Lift your ring finger off A Major. Dreamy, open, and gorgeous on clean electric guitar.'
  }
];
