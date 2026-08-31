/**
 * Interactive Tablature Database & Riff Library
 * Tab structure:
 * columns: Array of notes played simultaneously or successively.
 * Each column has { notes: [{ string: 0-5, fret: 0-22 }], duration: number (in beats, 1 = quarter note) }
 */

export const TAB_PRESETS = [
  // --- PUNK & POWER CHORD CLASSICS ---
  {
    id: 'brain_stew',
    title: 'Brain Stew (Power Chord Slide)',
    artist: 'Green Day',
    difficulty: 'Beginner',
    tempo: 76,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The ultimate beginner power-chord riff! 5 power chords sliding down the neck (A5 -> G5 -> F#5 -> F5 -> E5) with punchy stops.',
    tips: 'Lock your index and ring/pinky fingers in the power chord shape, then slide your entire hand smoothly down fret by fret. Release fret pressure slightly during rests to mute strings.',
    tabColumns: [
      // Measure 1: A5 (5th fret) -> G5 (3rd fret)
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 0.5, label: 'A5' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 1.0, label: 'A5' },
      { notes: [], dur: 0.5, label: 'X' }, // Mute rest
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 5 }], dur: 0.5, label: 'G5' },
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 5 }], dur: 1.0, label: 'G5' },
      { notes: [], dur: 0.5, label: 'X' },
      // Measure 2: F#5 (2nd fret) -> F5 (1st fret) -> E5 (open)
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
    difficulty: 'Beginner',
    tempo: 126,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Iconic hard-rock groove using open E5, G5, and A5 power chords with legendary rhythm punches.',
    tips: 'Hit the open E power chord hard, then slide to the 3rd fret G5 and 5th fret A5 on the beat.',
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
    id: 'smells_like_teen_spirit',
    title: 'Smells Like Teen Spirit (Main Riff)',
    artist: 'Nirvana',
    difficulty: 'Beginner-Intermediate',
    tempo: 116,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The anthem of 90s grunge! 4 power chords alternating between the 6th and 5th strings.',
    tips: 'F5 on 6th string -> Bb5 on 5th string (same 1st fret!), then slide up to Ab5 on 4th fret 6th string -> Db5 on 4th fret 5th string.',
    tabColumns: [
      // F5 on 1st fret (6th string)
      { notes: [{ str: 0, fret: 1 }, { str: 1, fret: 3 }], dur: 0.75, label: 'F5' },
      { notes: [{ str: 0, fret: 1 }, { str: 1, fret: 3 }], dur: 0.75, label: 'F5' },
      // Bb5 on 1st fret (5th string)
      { notes: [{ str: 1, fret: 1 }, { str: 2, fret: 3 }], dur: 0.75, label: 'Bb5' },
      { notes: [{ str: 1, fret: 1 }, { str: 2, fret: 3 }], dur: 0.75, label: 'Bb5' },
      { notes: [], dur: 0.5, label: '-' },
      // Ab5 on 4th fret (6th string)
      { notes: [{ str: 0, fret: 4 }, { str: 1, fret: 6 }], dur: 0.75, label: 'Ab5' },
      { notes: [{ str: 0, fret: 4 }, { str: 1, fret: 6 }], dur: 0.75, label: 'Ab5' },
      // Db5 on 4th fret (5th string)
      { notes: [{ str: 1, fret: 4 }, { str: 2, fret: 6 }], dur: 0.75, label: 'Db5' },
      { notes: [{ str: 1, fret: 4 }, { str: 2, fret: 6 }], dur: 0.75, label: 'Db5' }
    ]
  },
  {
    id: 'blitzkrieg_bop',
    title: 'Blitzkrieg Bop (Hey Ho, Let’s Go!)',
    artist: 'Ramones',
    difficulty: 'Beginner',
    tempo: 175,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'High-octane 3-chord punk rock. Uses A5, D5, and E5 power chords.',
    tips: 'Play with all downstrokes for that classic Ramones punch! Start slow and build up speed.',
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
    id: 'you_really_got_me',
    title: 'You Really Got Me (2-Chord Rock Riff)',
    artist: 'The Kinks / Van Halen',
    difficulty: 'Beginner',
    tempo: 135,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The legendary riff that birthed hard rock and distortion! Alternates between F5 and G5 power chords.',
    tips: 'Slide from 1st fret (F5) to 3rd fret (G5) with attitude!',
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
    id: 'eye_of_the_tiger',
    title: 'Eye of the Tiger (Palm-Muted Chug)',
    artist: 'Survivor',
    difficulty: 'Beginner',
    tempo: 109,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The ultimate boxing anthem. Great for learning rhythmic power chord stabs with C5, Bb5, and Ab5.',
    tips: 'Keep your picking hand palm resting lightly on the bridge to get that tight, muted chug sound.',
    tabColumns: [
      { notes: [{ str: 1, fret: 3 }, { str: 2, fret: 5 }], dur: 1.5, label: 'C5' },
      { notes: [], dur: 0.5, label: '-' },
      { notes: [{ str: 1, fret: 3 }, { str: 2, fret: 5 }], dur: 0.5, label: 'C5' },
      { notes: [{ str: 1, fret: 1 }, { str: 2, fret: 3 }], dur: 0.5, label: 'Bb5' },
      { notes: [{ str: 1, fret: 3 }, { str: 2, fret: 5 }], dur: 1.0, label: 'C5' },
      { notes: [], dur: 0.5, label: '-' },
      { notes: [{ str: 1, fret: 3 }, { str: 2, fret: 5 }], dur: 0.5, label: 'C5' },
      { notes: [{ str: 1, fret: 1 }, { str: 2, fret: 3 }], dur: 0.5, label: 'Bb5' },
      { notes: [{ str: 0, fret: 4 }, { str: 1, fret: 6 }], dur: 1.5, label: 'Ab5' }
    ]
  },
  {
    id: 'peter_gunn',
    title: 'Peter Gunn Theme (Spy Rock Groove)',
    artist: 'Duane Eddy / Blues Brothers',
    difficulty: 'Beginner',
    tempo: 120,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Iconic low-string groove played entirely on the low 6th (E) string! Super fun and easy to memorize.',
    tips: 'Use your index finger for fret 2, middle for fret 3, pinky for fret 5, and ring for fret 4.',
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
    id: 'smoke_on_the_water',
    title: 'Smoke on the Water (Classic 4ths)',
    artist: 'Deep Purple',
    difficulty: 'Beginner',
    tempo: 112,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The most famous beginner electric guitar riff in history! Played with two fingers on the D and G strings.',
    tips: 'Use your index finger for the open strings/3rd fret and ring/pinky for 5th and 6th frets.',
    tabColumns: [
      // Measure 1: 0 - 3 - 5
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 0 }], dur: 1, label: '0' },
      { notes: [{ str: 2, fret: 3 }, { str: 3, fret: 3 }], dur: 1, label: '3' },
      { notes: [{ str: 2, fret: 5 }, { str: 3, fret: 5 }], dur: 1.5, label: '5' },
      { notes: [], dur: 0.5, label: '-' },
      // Measure 2: 0 - 3 - 6-5
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 0 }], dur: 1, label: '0' },
      { notes: [{ str: 2, fret: 3 }, { str: 3, fret: 3 }], dur: 1, label: '3' },
      { notes: [{ str: 2, fret: 6 }, { str: 3, fret: 6 }], dur: 0.5, label: '6' },
      { notes: [{ str: 2, fret: 5 }, { str: 3, fret: 5 }], dur: 1.5, label: '5' },
      // Measure 3: 0 - 3 - 5 - 3 - 0
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 0 }], dur: 1, label: '0' },
      { notes: [{ str: 2, fret: 3 }, { str: 3, fret: 3 }], dur: 1, label: '3' },
      { notes: [{ str: 2, fret: 5 }, { str: 3, fret: 5 }], dur: 1, label: '5' },
      { notes: [{ str: 2, fret: 3 }, { str: 3, fret: 3 }], dur: 0.5, label: '3' },
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 0 }], dur: 1.5, label: '0' }
    ]
  },
  {
    id: 'seven_nation_army',
    title: 'Seven Nation Army (1-String Riff)',
    artist: 'The White Stripes',
    difficulty: 'Beginner',
    tempo: 120,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Instant anthemic riff played entirely on the 5th (A) string! Great for practicing fretting accuracy.',
    tips: 'Let each note ring clearly before sliding your finger to the next fret.',
    tabColumns: [
      { notes: [{ str: 1, fret: 7 }], dur: 1.5, label: '7' },
      { notes: [{ str: 1, fret: 7 }], dur: 0.5, label: '7' },
      { notes: [{ str: 1, fret: 10 }], dur: 0.75, label: '10' },
      { notes: [{ str: 1, fret: 7 }], dur: 0.75, label: '7' },
      { notes: [{ str: 1, fret: 5 }], dur: 0.5, label: '5' },
      { notes: [{ str: 1, fret: 3 }], dur: 2.0, label: '3' },
      { notes: [{ str: 1, fret: 2 }], dur: 2.0, label: '2' },
      // Repeat variation
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
    id: 'iron_man',
    title: 'Iron Man (Power Chord Slides)',
    artist: 'Black Sabbath',
    difficulty: 'Beginner-Intermediate',
    tempo: 75,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The heavyweight riff that defined heavy metal! Uses movable power chords on the 6th and 5th strings.',
    tips: 'Slide your hand smoothly along the neck while keeping your 2-finger power chord shape locked in place.',
    tabColumns: [
      { notes: [{ str: 0, fret: 7 }, { str: 1, fret: 9 }], dur: 1.5, label: 'B5' },
      { notes: [{ str: 0, fret: 10 }, { str: 1, fret: 12 }], dur: 1.0, label: 'D5' },
      { notes: [{ str: 0, fret: 10 }, { str: 1, fret: 12 }], dur: 0.5, label: 'D5' },
      { notes: [{ str: 0, fret: 12 }, { str: 1, fret: 14 }], dur: 1.0, label: 'E5' },
      { notes: [{ str: 0, fret: 12 }, { str: 1, fret: 14 }], dur: 1.0, label: 'E5' },
      // Fast slides: G5 -> F#5 -> G5 -> F#5 -> G5
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
    id: 'sunshine_of_your_love',
    title: 'Sunshine of Your Love (Pentatonic Lead)',
    artist: 'Cream / Eric Clapton',
    difficulty: 'Beginner-Intermediate',
    tempo: 115,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The quintessential rock riff based on the D Minor Pentatonic & Blues scale.',
    tips: 'Notice the descending chromatic notes (12 -> 11 -> 10) on the 5th string which gives the riff its blues flavor.',
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
  },
  {
    id: 'blues_boogie_shuffle',
    title: '12-Bar Rock & Roll Boogie Shuffle',
    artist: 'Chuck Berry Style',
    difficulty: 'Beginner',
    tempo: 120,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The foundation of rock rhythm guitar! Hold the 5th power chord and stretch your ring finger to alternate with the 6th degree.',
    tips: 'Keep your index finger anchored on the 2nd fret while your ring finger reaches for the 4th fret.',
    tabColumns: [
      // 4 beats of E5/E6
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }], dur: 0.5, label: 'E5' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }], dur: 0.5, label: 'E5' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 4 }], dur: 0.5, label: 'E6' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 4 }], dur: 0.5, label: 'E6' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }], dur: 0.5, label: 'E5' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }], dur: 0.5, label: 'E5' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 4 }], dur: 0.5, label: 'E6' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 4 }], dur: 0.5, label: 'E6' },
      // 4 beats of A5/A6
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 0.5, label: 'A5' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 0.5, label: 'A5' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 4 }], dur: 0.5, label: 'A6' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 4 }], dur: 0.5, label: 'A6' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 0.5, label: 'A5' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }], dur: 0.5, label: 'A5' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 4 }], dur: 0.5, label: 'A6' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 4 }], dur: 0.5, label: 'A6' }
    ]
  },
  {
    id: 'boulevard_broken_dreams',
    title: 'Boulevard of Broken Dreams (Verse)',
    artist: 'Green Day',
    difficulty: 'Beginner',
    tempo: 84,
    timeSignature: '4/4',
    tuning: 'Standard (Capo 1 / Standard)',
    description: 'Atmospheric clean electric rhythm with Em - G - D - A open chord progression.',
    tips: 'Keep your strumming hand relaxed with smooth down-down-up-up-down-up strokes.',
    tabColumns: [
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }, { str: 2, fret: 2 }, { str: 3, fret: 0 }, { str: 4, fret: 0 }, { str: 5, fret: 0 }], dur: 2.0, label: 'Em' },
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 2 }, { str: 2, fret: 0 }, { str: 3, fret: 0 }, { str: 4, fret: 3 }, { str: 5, fret: 3 }], dur: 2.0, label: 'G' },
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 2 }, { str: 4, fret: 3 }, { str: 5, fret: 2 }], dur: 2.0, label: 'D' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }, { str: 3, fret: 2 }, { str: 4, fret: 2 }, { str: 5, fret: 0 }], dur: 2.0, label: 'A' }
    ]
  }
];
