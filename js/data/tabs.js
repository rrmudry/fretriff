/**
 * Interactive Tablature Database & Riff Library
 * Features: Single-String (Super Beginner), Two-String & Power Riffs, and Multi-String Chords
 */

export const TAB_CATEGORIES = [
  { id: 'all', name: 'All Riffs', icon: '🎸' },
  { id: 'single_string', name: '🟢 1-String (Super Beginner)', icon: '🟢' },
  { id: 'two_string', name: '🟡 2-String & Power Riffs', icon: '🟡' },
  { id: 'multi_string', name: '🔴 Multi-String & Chords', icon: '🔴' }
];

export const TAB_PRESETS = [
  // =========================================================================
  // 🟢 SUPER BEGINNER: SINGLE-STRING RIFFS (Day 1 Success!)
  // =========================================================================
  {
    id: 'smoke_on_the_water_1str',
    title: 'Smoke on the Water (1-String Easy Version)',
    artist: 'Deep Purple',
    stringCategory: 'single_string',
    difficulty: 'Super Beginner (1 String)',
    stringTarget: 'Low E (6th) or D (4th) String',
    tempo: 105,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The easiest way to start! Played entirely on a single string with 1 finger (Frets: 0 -> 3 -> 5).',
    tips: 'Use your index finger. Start on open string 0, then press fret 3, then slide to fret 5. Keep steady timing!',
    tabColumns: [
      { notes: [{ str: 0, fret: 0 }], dur: 1.0, label: '0' },
      { notes: [{ str: 0, fret: 3 }], dur: 1.0, label: '3' },
      { notes: [{ str: 0, fret: 5 }], dur: 1.5, label: '5' },
      { notes: [], dur: 0.5, label: '-' },
      { notes: [{ str: 0, fret: 0 }], dur: 1.0, label: '0' },
      { notes: [{ str: 0, fret: 3 }], dur: 1.0, label: '3' },
      { notes: [{ str: 0, fret: 6 }], dur: 0.5, label: '6' },
      { notes: [{ str: 0, fret: 5 }], dur: 1.5, label: '5' },
      { notes: [{ str: 0, fret: 0 }], dur: 1.0, label: '0' },
      { notes: [{ str: 0, fret: 3 }], dur: 1.0, label: '3' },
      { notes: [{ str: 0, fret: 5 }], dur: 1.0, label: '5' },
      { notes: [{ str: 0, fret: 3 }], dur: 0.5, label: '3' },
      { notes: [{ str: 0, fret: 0 }], dur: 1.5, label: '0' }
    ]
  },
  {
    id: 'seven_nation_army',
    title: 'Seven Nation Army (1-String Anthem)',
    artist: 'The White Stripes',
    stringCategory: 'single_string',
    difficulty: 'Super Beginner (1 String)',
    stringTarget: 'A (5th) String',
    tempo: 120,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Instant anthemic riff played entirely on the 5th (A) string (Frets: 7 -> 7 -> 10 -> 7 -> 5 -> 3 -> 2).',
    tips: 'Slide smoothly from fret 7 up to fret 10, then step down frets 5 -> 3 -> 2.',
    tabColumns: [
      { notes: [{ str: 1, fret: 7 }], dur: 1.5, label: '7' },
      { notes: [{ str: 1, fret: 7 }], dur: 0.5, label: '7' },
      { notes: [{ str: 1, fret: 10 }], dur: 0.75, label: '10' },
      { notes: [{ str: 1, fret: 7 }], dur: 0.75, label: '7' },
      { notes: [{ str: 1, fret: 5 }], dur: 0.5, label: '5' },
      { notes: [{ str: 1, fret: 3 }], dur: 2.0, label: '3' },
      { notes: [{ str: 1, fret: 2 }], dur: 2.0, label: '2' },
      // Second phrase variation
      { notes: [{ str: 1, fret: 7 }], dur: 1.5, label: '7' },
      { notes: [{ str: 1, fret: 7 }], dur: 0.5, label: '7' },
      { notes: [{ str: 1, fret: 10 }], dur: 0.75, label: '10' },
      { notes: [{ str: 1, fret: 7 }], dur: 0.75, label: '7' },
      { notes: [{ str: 1, fret: 5 }], dur: 0.5, label: '5' },
      { notes: [{ str: 1, fret: 3 }], dur: 0.75, label: '3' },
      { notes: [{ str: 1, fret: 5 }], dur: 0.75, label: '5' },
      { notes: [{ str: 1, fret: 3 }], dur: 0.5, label: '3' },
      { notes: [{ str: 1, fret: 2 }], dur: 2.0, label: '2' }
    ]
  },
  {
    id: 'peter_gunn',
    title: 'Peter Gunn Theme (1-String Spy Groove)',
    artist: 'Duane Eddy / Blues Brothers',
    stringCategory: 'single_string',
    difficulty: 'Super Beginner (1 String)',
    stringTarget: 'Low E (6th) String',
    tempo: 120,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Iconic low-string groove on the Low E string (0 -> 0 -> 2 -> 0 -> 3 -> 0 -> 5 -> 4). Super fun to play!',
    tips: 'Use index for fret 2, middle for fret 3, pinky for fret 5, and ring for fret 4.',
    tabColumns: [
      { notes: [{ str: 0, fret: 0 }], dur: 0.5, label: '0' },
      { notes: [{ str: 0, fret: 0 }], dur: 0.5, label: '0' },
      { notes: [{ str: 0, fret: 2 }], dur: 0.5, label: '2' },
      { notes: [{ str: 0, fret: 0 }], dur: 0.5, label: '0' },
      { notes: [{ str: 0, fret: 3 }], dur: 0.5, label: '3' },
      { notes: [{ str: 0, fret: 0 }], dur: 0.5, label: '0' },
      { notes: [{ str: 0, fret: 5 }], dur: 0.5, label: '5' },
      { notes: [{ str: 0, fret: 4 }], dur: 0.5, label: '4' }
    ]
  },
  {
    id: 'mission_impossible',
    title: 'Mission: Impossible (1-String Secret Agent)',
    artist: 'Lalo Schifrin',
    stringCategory: 'single_string',
    difficulty: 'Super Beginner (1 String)',
    stringTarget: 'Low E (6th) String',
    tempo: 140,
    timeSignature: '5/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The world-famous spy hook played entirely on the 6th string (Frets: 3 - 3 - 6 - 8 | 3 - 3 - 1 - 2).',
    tips: 'Two quick notes on fret 3, then jump to 6 and 8. Feel the suspense!',
    tabColumns: [
      { notes: [{ str: 0, fret: 3 }], dur: 1.5, label: '3' },
      { notes: [{ str: 0, fret: 3 }], dur: 1.5, label: '3' },
      { notes: [{ str: 0, fret: 6 }], dur: 1.0, label: '6' },
      { notes: [{ str: 0, fret: 8 }], dur: 1.0, label: '8' },
      { notes: [{ str: 0, fret: 3 }], dur: 1.5, label: '3' },
      { notes: [{ str: 0, fret: 3 }], dur: 1.5, label: '3' },
      { notes: [{ str: 0, fret: 1 }], dur: 1.0, label: '1' },
      { notes: [{ str: 0, fret: 2 }], dur: 1.0, label: '2' }
    ]
  },
  {
    id: 'jaws_theme',
    title: 'Jaws Theme (1-String Tension Shark)',
    artist: 'John Williams',
    stringCategory: 'single_string',
    difficulty: 'Super Beginner (1 String)',
    stringTarget: 'Low E (6th) String',
    tempo: 80,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The easiest chromatic tension exercise! Alternates open string 0 and 1st fret (0 -> 1 -> 0 -> 1).',
    tips: 'Start slow and speed up with each repeat to create suspense!',
    tabColumns: [
      { notes: [{ str: 0, fret: 0 }], dur: 1.5, label: '0' },
      { notes: [{ str: 0, fret: 1 }], dur: 1.5, label: '1' },
      { notes: [{ str: 0, fret: 0 }], dur: 1.0, label: '0' },
      { notes: [{ str: 0, fret: 1 }], dur: 1.0, label: '1' },
      { notes: [{ str: 0, fret: 0 }], dur: 0.5, label: '0' },
      { notes: [{ str: 0, fret: 1 }], dur: 0.5, label: '1' },
      { notes: [{ str: 0, fret: 0 }], dur: 0.5, label: '0' },
      { notes: [{ str: 0, fret: 1 }], dur: 0.5, label: '1' },
      { notes: [{ str: 0, fret: 2 }], dur: 0.5, label: '2' },
      { notes: [{ str: 0, fret: 3 }], dur: 1.5, label: '3' }
    ]
  },
  {
    id: 'iron_man_1str',
    title: 'Iron Man (1-String Beginner Version)',
    artist: 'Black Sabbath',
    stringCategory: 'single_string',
    difficulty: 'Super Beginner (1 String)',
    stringTarget: 'Low E (6th) String',
    tempo: 75,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Play Black Sabbath’s heaviest riff on just one single string before learning the 2-finger power chord version!',
    tips: 'Slide your index finger along the 6th string: Fret 7 -> 10 -> 12, then quick slides 15 -> 14 -> 15.',
    tabColumns: [
      { notes: [{ str: 0, fret: 7 }], dur: 1.5, label: '7' },
      { notes: [{ str: 0, fret: 10 }], dur: 1.0, label: '10' },
      { notes: [{ str: 0, fret: 10 }], dur: 0.5, label: '10' },
      { notes: [{ str: 0, fret: 12 }], dur: 1.0, label: '12' },
      { notes: [{ str: 0, fret: 12 }], dur: 1.0, label: '12' },
      { notes: [{ str: 0, fret: 15 }], dur: 0.33, label: '15' },
      { notes: [{ str: 0, fret: 14 }], dur: 0.33, label: '14' },
      { notes: [{ str: 0, fret: 15 }], dur: 0.33, label: '15' },
      { notes: [{ str: 0, fret: 14 }], dur: 0.33, label: '14' },
      { notes: [{ str: 0, fret: 15 }], dur: 0.33, label: '15' },
      { notes: [{ str: 0, fret: 10 }], dur: 0.75, label: '10' },
      { notes: [{ str: 0, fret: 10 }], dur: 0.75, label: '10' },
      { notes: [{ str: 0, fret: 12 }], dur: 1.5, label: '12' }
    ]
  },

  // =========================================================================
  // 🟡 BEGINNER: 2-STRING & POWER CHORD RIFFS (Rock Energy!)
  // =========================================================================
  {
    id: 'brain_stew',
    title: 'Brain Stew (5-Power-Chord Slide)',
    artist: 'Green Day',
    stringCategory: 'two_string',
    difficulty: 'Beginner (2-String Power Chords)',
    stringTarget: 'Strings 6 & 5',
    tempo: 76,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The ultimate power-chord practice song! 5 power chords sliding down the neck (A5 -> G5 -> F#5 -> F5 -> E5).',
    tips: 'Lock your index on root and ring on 5th. Slide your hand down one fret at a time, muting the strings during rests.',
    tabColumns: [
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 0.5, label: 'A5' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 1.0, label: 'A5' },
      { notes: [], dur: 0.5, label: 'X' },
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 5 }], dur: 0.5, label: 'G5' },
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 5 }], dur: 1.0, label: 'G5' },
      { notes: [], dur: 0.5, label: 'X' },
      { notes: [{ str: 0, fret: 2 }, { str: 1, fret: 4 }], dur: 0.5, label: 'F#5' },
      { notes: [{ str: 0, fret: 2 }, { str: 1, fret: 4 }], dur: 1.0, label: 'F#5' },
      { notes: [], dur: 0.5, label: 'X' },
      { notes: [{ str: 0, fret: 1 }, { str: 1, fret: 3 }], dur: 0.5, label: 'F5' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }], dur: 1.5, label: 'E5' }
    ]
  },
  {
    id: 'tnt_acdc',
    title: 'T.N.T. (Oi! Power Riff)',
    artist: 'AC/DC',
    stringCategory: 'two_string',
    difficulty: 'Beginner (2-String Power Chords)',
    stringTarget: 'Strings 6 & 5',
    tempo: 126,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Iconic hard-rock groove using open E5, G5, and A5 power chords with classic rock pauses.',
    tips: 'Hit the open E power chord hard, then jump to the 3rd fret G5 and 5th fret A5 on the beat.',
    tabColumns: [
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }], dur: 1.5, label: 'E5' },
      { notes: [], dur: 0.5, label: '-' },
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 5 }], dur: 1.0, label: 'G5' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 1.0, label: 'A5' },
      { notes: [], dur: 0.5, label: '-' },
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 5 }], dur: 0.75, label: 'G5' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 0.75, label: 'A5' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }], dur: 2.0, label: 'E5' }
    ]
  },
  {
    id: 'smoke_on_the_water',
    title: 'Smoke on the Water (Classic Double-Stops)',
    artist: 'Deep Purple',
    stringCategory: 'two_string',
    difficulty: 'Beginner (2 Strings)',
    stringTarget: 'D (4th) & G (3rd) Strings',
    tempo: 112,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The standard 2-string version played with 4th intervals on strings 4 and 3.',
    tips: 'Pluck both the D and G strings together with your pick or thumb and index finger.',
    tabColumns: [
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 0 }], dur: 1, label: '0' },
      { notes: [{ str: 2, fret: 3 }, { str: 3, fret: 3 }], dur: 1, label: '3' },
      { notes: [{ str: 2, fret: 5 }, { str: 3, fret: 5 }], dur: 1.5, label: '5' },
      { notes: [], dur: 0.5, label: '-' },
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 0 }], dur: 1, label: '0' },
      { notes: [{ str: 2, fret: 3 }, { str: 3, fret: 3 }], dur: 1, label: '3' },
      { notes: [{ str: 2, fret: 6 }, { str: 3, fret: 6 }], dur: 0.5, label: '6' },
      { notes: [{ str: 2, fret: 5 }, { str: 3, fret: 5 }], dur: 1.5, label: '5' },
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 0 }], dur: 1, label: '0' },
      { notes: [{ str: 2, fret: 3 }, { str: 3, fret: 3 }], dur: 1, label: '3' },
      { notes: [{ str: 2, fret: 5 }, { str: 3, fret: 5 }], dur: 1.5, label: '5' },
      { notes: [{ str: 2, fret: 3 }, { str: 3, fret: 3 }], dur: 0.5, label: '3' },
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 0 }], dur: 1.5, label: '0' }
    ]
  },
  {
    id: 'you_really_got_me',
    title: 'You Really Got Me (2-Power-Chord Riff)',
    artist: 'The Kinks / Van Halen',
    stringCategory: 'two_string',
    difficulty: 'Beginner (2-String Power Chords)',
    stringTarget: 'Strings 6 & 5',
    tempo: 135,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The legendary 2-chord slide that started hard rock! Alternates between F5 and G5.',
    tips: 'Slide from 1st fret (F5) to 3rd fret (G5) with attitude and punchy downstrokes.',
    tabColumns: [
      { notes: [{ str: 0, fret: 1 }, { str: 1, fret: 3 }], dur: 0.5, label: 'F5' },
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 5 }], dur: 0.5, label: 'G5' },
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 5 }], dur: 1.0, label: 'G5' },
      { notes: [{ str: 0, fret: 1 }, { str: 1, fret: 3 }], dur: 0.5, label: 'F5' },
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 5 }], dur: 1.5, label: 'G5' },
      { notes: [], dur: 1.0, label: '-' }
    ]
  },
  {
    id: 'blitzkrieg_bop',
    title: 'Blitzkrieg Bop (Hey Ho, Let’s Go!)',
    artist: 'Ramones',
    stringCategory: 'two_string',
    difficulty: 'Beginner (2-String Power Chords)',
    stringTarget: 'Strings 6 & 5',
    tempo: 175,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'High-octane 3-chord punk rock. Uses A5, D5, and E5 power chords.',
    tips: 'Play with all downstrokes for that classic Ramones punch! Start at 0.5x speed.',
    tabColumns: [
      { notes: [{ str: 0, fret: 5 }, { str: 1, fret: 7 }], dur: 1.0, label: 'A5' },
      { notes: [{ str: 0, fret: 5 }, { str: 1, fret: 7 }], dur: 1.0, label: 'A5' },
      { notes: [{ str: 1, fret: 5 }, { str: 2, fret: 7 }], dur: 1.0, label: 'D5' },
      { notes: [{ str: 1, fret: 7 }, { str: 2, fret: 9 }], dur: 1.0, label: 'E5' },
      { notes: [{ str: 0, fret: 5 }, { str: 1, fret: 7 }], dur: 1.0, label: 'A5' },
      { notes: [{ str: 1, fret: 5 }, { str: 2, fret: 7 }], dur: 1.0, label: 'D5' },
      { notes: [{ str: 0, fret: 5 }, { str: 1, fret: 7 }], dur: 2.0, label: 'A5' }
    ]
  },
  {
    id: 'iron_man',
    title: 'Iron Man (Power Chord Slides)',
    artist: 'Black Sabbath',
    stringCategory: 'two_string',
    difficulty: 'Beginner-Intermediate (Power Chords)',
    stringTarget: 'Strings 6 & 5',
    tempo: 75,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The heavyweight riff using movable power chords: B5 -> D5 -> E5 -> G5/F#5.',
    tips: 'Keep your 2-finger power shape locked in place as you slide along the neck.',
    tabColumns: [
      { notes: [{ str: 0, fret: 7 }, { str: 1, fret: 9 }], dur: 1.5, label: 'B5' },
      { notes: [{ str: 0, fret: 10 }, { str: 1, fret: 12 }], dur: 1.0, label: 'D5' },
      { notes: [{ str: 0, fret: 10 }, { str: 1, fret: 12 }], dur: 0.5, label: 'D5' },
      { notes: [{ str: 0, fret: 12 }, { str: 1, fret: 14 }], dur: 1.0, label: 'E5' },
      { notes: [{ str: 0, fret: 12 }, { str: 1, fret: 14 }], dur: 1.0, label: 'E5' },
      { notes: [{ str: 0, fret: 15 }, { str: 1, fret: 17 }], dur: 0.33, label: 'G5' },
      { notes: [{ str: 0, fret: 14 }, { str: 1, fret: 16 }], dur: 0.33, label: 'F#5' },
      { notes: [{ str: 0, fret: 15 }, { str: 1, fret: 17 }], dur: 0.33, label: 'G5' },
      { notes: [{ str: 0, fret: 14 }, { str: 1, fret: 16 }], dur: 0.33, label: 'F#5' },
      { notes: [{ str: 0, fret: 15 }, { str: 1, fret: 17 }], dur: 0.33, label: 'G5' },
      { notes: [{ str: 0, fret: 10 }, { str: 1, fret: 12 }], dur: 0.75, label: 'D5' },
      { notes: [{ str: 0, fret: 10 }, { str: 1, fret: 12 }], dur: 0.75, label: 'D5' },
      { notes: [{ str: 0, fret: 12 }, { str: 1, fret: 14 }], dur: 1.5, label: 'E5' }
    ]
  },
  {
    id: 'blues_boogie_shuffle',
    title: '12-Bar Rock & Roll Boogie Shuffle',
    artist: 'Chuck Berry Style',
    stringCategory: 'two_string',
    difficulty: 'Beginner (2 Strings)',
    stringTarget: 'Strings 6 & 5 / Strings 5 & 4',
    tempo: 120,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The foundation of rock rhythm guitar! Hold the 5th chord and stretch ring finger for the 6th degree.',
    tips: 'Keep index finger anchored on fret 2 while ring finger alternates reaching for fret 4.',
    tabColumns: [
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }], dur: 0.5, label: 'E5' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }], dur: 0.5, label: 'E5' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 4 }], dur: 0.5, label: 'E6' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 4 }], dur: 0.5, label: 'E6' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }], dur: 0.5, label: 'E5' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }], dur: 0.5, label: 'E5' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 4 }], dur: 0.5, label: 'E6' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 4 }], dur: 0.5, label: 'E6' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 0.5, label: 'A5' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 0.5, label: 'A5' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 4 }], dur: 0.5, label: 'A6' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 4 }], dur: 0.5, label: 'A6' }
    ]
  },

  // =========================================================================
  // 🔴 MULTI-STRING & FULL CHORD RIFFS (Full Sound!)
  // =========================================================================
  {
    id: 'smells_like_teen_spirit',
    title: 'Smells Like Teen Spirit (4-Power-Chord Grunge)',
    artist: 'Nirvana',
    stringCategory: 'multi_string',
    difficulty: 'Beginner-Intermediate (Multi-String)',
    stringTarget: 'Strings 6, 5 & 4',
    tempo: 116,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The anthem of 90s grunge! 4 power chords alternating between strings 6 and 5.',
    tips: 'F5 (fret 1 str 6) -> Bb5 (fret 1 str 5) -> Ab5 (fret 4 str 6) -> Db5 (fret 4 str 5).',
    tabColumns: [
      { notes: [{ str: 0, fret: 1 }, { str: 1, fret: 3 }, { str: 2, fret: 3 }], dur: 0.75, label: 'F5' },
      { notes: [{ str: 0, fret: 1 }, { str: 1, fret: 3 }, { str: 2, fret: 3 }], dur: 0.75, label: 'F5' },
      { notes: [{ str: 1, fret: 1 }, { str: 2, fret: 3 }, { str: 3, fret: 3 }], dur: 0.75, label: 'Bb5' },
      { notes: [{ str: 1, fret: 1 }, { str: 2, fret: 3 }, { str: 3, fret: 3 }], dur: 0.75, label: 'Bb5' },
      { notes: [], dur: 0.5, label: '-' },
      { notes: [{ str: 0, fret: 4 }, { str: 1, fret: 6 }, { str: 2, fret: 6 }], dur: 0.75, label: 'Ab5' },
      { notes: [{ str: 0, fret: 4 }, { str: 1, fret: 6 }, { str: 2, fret: 6 }], dur: 0.75, label: 'Ab5' },
      { notes: [{ str: 1, fret: 4 }, { str: 2, fret: 6 }, { str: 3, fret: 6 }], dur: 0.75, label: 'Db5' },
      { notes: [{ str: 1, fret: 4 }, { str: 2, fret: 6 }, { str: 3, fret: 6 }], dur: 0.75, label: 'Db5' }
    ]
  },
  {
    id: 'boulevard_broken_dreams',
    title: 'Boulevard of Broken Dreams (Full Strum)',
    artist: 'Green Day',
    stringCategory: 'multi_string',
    difficulty: 'Beginner (Full Chords)',
    stringTarget: 'All 6 Strings',
    tempo: 84,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Clean electric progression with full open chords: Em -> G -> D -> A.',
    tips: 'Keep your strumming hand relaxed with smooth down-down-up-up-down-up rhythm.',
    tabColumns: [
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }, { str: 2, fret: 2 }, { str: 3, fret: 0 }, { str: 4, fret: 0 }, { str: 5, fret: 0 }], dur: 2.0, label: 'Em' },
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 2 }, { str: 2, fret: 0 }, { str: 3, fret: 0 }, { str: 4, fret: 3 }, { str: 5, fret: 3 }], dur: 2.0, label: 'G' },
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 2 }, { str: 4, fret: 3 }, { str: 5, fret: 2 }], dur: 2.0, label: 'D' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }, { str: 3, fret: 2 }, { str: 4, fret: 2 }, { str: 5, fret: 0 }], dur: 2.0, label: 'A' }
    ]
  },
  {
    id: 'sunshine_of_your_love',
    title: 'Sunshine of Your Love (Pentatonic Lead)',
    artist: 'Cream / Eric Clapton',
    stringCategory: 'multi_string',
    difficulty: 'Beginner-Intermediate (Multi-String Lead)',
    stringTarget: 'Strings 6, 5 & 4',
    tempo: 115,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Classic rock pentatonic riff stepping across strings 4, 5, and 6 with blues chromatics.',
    tips: 'Follow the descending chromatic notes (12 -> 11 -> 10) on the 5th string.',
    tabColumns: [
      { notes: [{ str: 2, fret: 12 }], dur: 0.5, label: '12' },
      { notes: [{ str: 2, fret: 12 }], dur: 0.5, label: '12' },
      { notes: [{ str: 2, fret: 10 }], dur: 0.5, label: '10' },
      { notes: [{ str: 2, fret: 12 }], dur: 1.0, label: '12' },
      { notes: [], dur: 0.5, label: '-' },
      { notes: [{ str: 1, fret: 12 }], dur: 0.75, label: '12' },
      { notes: [{ str: 1, fret: 11 }], dur: 0.75, label: '11' },
      { notes: [{ str: 1, fret: 10 }], dur: 0.75, label: '10' },
      { notes: [{ str: 0, fret: 10 }], dur: 0.75, label: '10' },
      { notes: [{ str: 1, fret: 8 }], dur: 0.5, label: '8' },
      { notes: [{ str: 0, fret: 10 }], dur: 1.5, label: '10' }
    ]
  }
];
