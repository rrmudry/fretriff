/**
 * Interactive Tablature Database & Song Library
 * Features:
 * - 🎮 Fun Video Game & Movie Themes (Mario, Star Wars, Pirates, Harry Potter, Godfather)
 * - 🎸 Iconic First Guitar Solos (Californication, Smells Like Teen Spirit, Let It Be)
 * - 🎼 Full Song Sections & Arpeggios (Nothing Else Matters, House of the Rising Sun, Stand By Me, Knockin' on Heaven's Door)
 * - 🟢 1-String Super Beginner Tunes
 * - ⚡ Classic Rock Riffs & Power Anthems (Brain Stew, TNT, Smoke on the Water)
 */

export const TAB_CATEGORIES = [
  { id: 'all', name: 'All Tabs & Songs', icon: '🌟' },
  { id: 'themes', name: '🎮 Themes & Movie Melodies', icon: '🎮' },
  { id: 'solos', name: '🎸 Iconic First Solos', icon: '🎸' },
  { id: 'full_songs', name: '🎼 Full Song Parts & Arpeggios', icon: '🎼' },
  { id: 'single_string', name: '🟢 1-String (Super Beginner)', icon: '🟢' },
  { id: 'riffs', name: '⚡ Rock & Punk Riffs', icon: '⚡' }
];

export const TAB_PRESETS = [
  // =========================================================================
  // 🎮 THEMES & MOVIE MELODIES (Most fun for beginners to show off!)
  // =========================================================================
  {
    id: 'super_mario_theme',
    title: 'Super Mario Bros (Overworld Theme)',
    artist: 'Nintendo / Koji Kondo',
    tabCategory: 'themes',
    stringCategory: 'two_string',
    difficulty: 'Beginner (Fun Melody)',
    tempo: 100,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The most iconic video game melody of all time! Starts with the famous triple-E intro, then launches into the bouncy main theme.',
    tips: 'Use your high E string (fret 0) and B string (frets 1 & 3). Practice the intro slowly: 0-0-0-1-0-3 on strings 1 & 2!',
    tabColumns: [
      // Intro: E E - E - C E - G
      { notes: [{ str: 5, fret: 0 }], dur: 0.5, label: 'E' },
      { notes: [{ str: 5, fret: 0 }], dur: 0.5, label: 'E' },
      { notes: [], dur: 0.5, label: '-' },
      { notes: [{ str: 5, fret: 0 }], dur: 0.5, label: 'E' },
      { notes: [], dur: 0.5, label: '-' },
      { notes: [{ str: 4, fret: 1 }], dur: 0.5, label: 'C' },
      { notes: [{ str: 5, fret: 0 }], dur: 1.0, label: 'E' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.5, label: 'G' },
      { notes: [], dur: 0.5, label: '-' },
      { notes: [{ str: 2, fret: 5 }], dur: 1.5, label: 'Low G' },
      { notes: [], dur: 1.0, label: '-' },
      // Main Bouncy Theme Part A: C - G - E - A - B - Bb A
      { notes: [{ str: 4, fret: 1 }], dur: 1.0, label: 'C' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 2, fret: 2 }], dur: 1.0, label: 'E' },
      { notes: [{ str: 3, fret: 2 }], dur: 0.75, label: 'A' },
      { notes: [{ str: 4, fret: 0 }], dur: 0.75, label: 'B' },
      { notes: [{ str: 4, fret: 1 }], dur: 0.5, label: 'A#' },
      { notes: [{ str: 3, fret: 2 }], dur: 1.0, label: 'A' },
      // Finish: G - E - G - A - F - G - E - C - D - B
      { notes: [{ str: 3, fret: 0 }], dur: 0.66, label: 'G' },
      { notes: [{ str: 5, fret: 0 }], dur: 0.66, label: 'E' },
      { notes: [{ str: 5, fret: 3 }], dur: 0.66, label: 'G' },
      { notes: [{ str: 5, fret: 5 }], dur: 1.0, label: 'A' },
      { notes: [{ str: 5, fret: 1 }], dur: 0.5, label: 'F' },
      { notes: [{ str: 5, fret: 3 }], dur: 0.5, label: 'G' },
      { notes: [{ str: 5, fret: 0 }], dur: 1.0, label: 'E' }
    ]
  },
  {
    id: 'star_wars_imperial_march',
    title: 'The Imperial March (Darth Vader Theme)',
    artist: 'John Williams / Star Wars',
    tabCategory: 'themes',
    stringCategory: 'single_string',
    difficulty: 'Beginner (1-2 Strings)',
    tempo: 104,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The darkest and most powerful theme in cinematic history! Sounds incredible with crunchy electric guitar overdrive.',
    tips: 'Play with heavy, staccato pick strikes on the G and B strings.',
    tabColumns: [
      // G - G - G - Eb - Bb - G
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 2, fret: 1 }], dur: 0.75, label: 'Eb' },
      { notes: [{ str: 4, fret: 3 }], dur: 0.25, label: 'Bb' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 2, fret: 1 }], dur: 0.75, label: 'Eb' },
      { notes: [{ str: 4, fret: 3 }], dur: 0.25, label: 'Bb' },
      { notes: [{ str: 3, fret: 0 }], dur: 2.0, label: 'G' },
      // High section: D - D - D - Eb - Bb - F# - Eb - Bb - G
      { notes: [{ str: 5, fret: 10 }], dur: 1.0, label: 'D' },
      { notes: [{ str: 5, fret: 10 }], dur: 1.0, label: 'D' },
      { notes: [{ str: 5, fret: 10 }], dur: 1.0, label: 'D' },
      { notes: [{ str: 5, fret: 11 }], dur: 0.75, label: 'Eb' },
      { notes: [{ str: 4, fret: 11 }], dur: 0.25, label: 'Bb' },
      { notes: [{ str: 3, fret: 11 }], dur: 1.0, label: 'F#' },
      { notes: [{ str: 2, fret: 1 }], dur: 0.75, label: 'Eb' },
      { notes: [{ str: 4, fret: 3 }], dur: 0.25, label: 'Bb' },
      { notes: [{ str: 3, fret: 0 }], dur: 2.0, label: 'G' }
    ]
  },
  {
    id: 'pirates_caribbean',
    title: "He's a Pirate (Pirates of the Caribbean)",
    artist: 'Hans Zimmer / Klaus Badelt',
    tabCategory: 'themes',
    stringCategory: 'two_string',
    difficulty: 'Beginner (High Energy)',
    tempo: 140,
    timeSignature: '6/8',
    tuning: 'Standard (E A D G B E)',
    description: 'High-energy swashbuckling anthem! Fast, galloping melody across the D and G strings.',
    tips: 'Use alternate picking (down-up-down-up) to keep the rhythm bouncy like a galloping pirate ship.',
    tabColumns: [
      { notes: [{ str: 2, fret: 0 }], dur: 0.5, label: 'D' },
      { notes: [{ str: 2, fret: 2 }], dur: 0.5, label: 'E' },
      { notes: [{ str: 2, fret: 3 }], dur: 0.5, label: 'F' },
      { notes: [{ str: 2, fret: 3 }], dur: 1.0, label: 'F' },
      { notes: [{ str: 2, fret: 3 }], dur: 0.5, label: 'F' },
      { notes: [{ str: 3, fret: 0 }], dur: 0.5, label: 'G' },
      { notes: [{ str: 3, fret: 2 }], dur: 0.5, label: 'A' },
      { notes: [{ str: 3, fret: 2 }], dur: 1.0, label: 'A' },
      { notes: [{ str: 3, fret: 2 }], dur: 0.5, label: 'A' },
      { notes: [{ str: 3, fret: 3 }], dur: 0.5, label: 'Bb' },
      { notes: [{ str: 3, fret: 2 }], dur: 0.5, label: 'A' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 2, fret: 3 }], dur: 0.5, label: 'F' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 2, fret: 2 }], dur: 0.5, label: 'E' },
      { notes: [{ str: 2, fret: 0 }], dur: 1.5, label: 'D' }
    ]
  },
  {
    id: 'harry_potter_theme',
    title: "Hedwig's Theme (Harry Potter)",
    artist: 'John Williams',
    tabCategory: 'themes',
    stringCategory: 'two_string',
    difficulty: 'Beginner (Mystical Melody)',
    tempo: 90,
    timeSignature: '3/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The magical, mysterious waltz that introduces the wizarding world. Beautiful on clean electric guitar.',
    tips: 'Let each note sustain into the next to create a shimmering, enchanted sound.',
    tabColumns: [
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'B' },
      { notes: [{ str: 4, fret: 0 }], dur: 1.5, label: 'E' },
      { notes: [{ str: 4, fret: 3 }], dur: 0.5, label: 'G' },
      { notes: [{ str: 4, fret: 2 }], dur: 1.0, label: 'F#' },
      { notes: [{ str: 4, fret: 0 }], dur: 2.0, label: 'E' },
      { notes: [{ str: 5, fret: 2 }], dur: 1.0, label: 'B' },
      { notes: [{ str: 5, fret: 0 }], dur: 3.0, label: 'A' },
      { notes: [{ str: 4, fret: 2 }], dur: 3.0, label: 'F#' },
      // Part 2
      { notes: [{ str: 4, fret: 0 }], dur: 1.5, label: 'E' },
      { notes: [{ str: 4, fret: 3 }], dur: 0.5, label: 'G' },
      { notes: [{ str: 4, fret: 2 }], dur: 1.0, label: 'F#' },
      { notes: [{ str: 3, fret: 3 }], dur: 2.0, label: 'D#' },
      { notes: [{ str: 4, fret: 1 }], dur: 1.0, label: 'F' },
      { notes: [{ str: 3, fret: 0 }], dur: 3.0, label: 'B' }
    ]
  },
  {
    id: 'godfather_theme',
    title: 'The Godfather Theme (Speak Softly Love)',
    artist: 'Nino Rota',
    tabCategory: 'themes',
    stringCategory: 'single_string',
    difficulty: 'Super Beginner (Expressive)',
    tempo: 80,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Timeless, romantic, and tragic Italian melody. Played with delicate emotion across strings 2 and 3.',
    tips: 'Add a tiny bit of finger vibrato (wiggling the fretting finger) on the longer sustained notes.',
    tabColumns: [
      { notes: [{ str: 2, fret: 0 }], dur: 1.0, label: 'D' },
      { notes: [{ str: 3, fret: 2 }], dur: 1.0, label: 'A' },
      { notes: [{ str: 4, fret: 1 }], dur: 1.0, label: 'C' },
      { notes: [{ str: 4, fret: 0 }], dur: 1.0, label: 'B' },
      { notes: [{ str: 3, fret: 2 }], dur: 1.0, label: 'A' },
      { notes: [{ str: 4, fret: 1 }], dur: 1.0, label: 'C' },
      { notes: [{ str: 3, fret: 2 }], dur: 2.0, label: 'A' },
      { notes: [{ str: 3, fret: 3 }], dur: 1.0, label: 'Bb' },
      { notes: [{ str: 3, fret: 2 }], dur: 1.0, label: 'A' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 2, fret: 2 }], dur: 3.0, label: 'E' }
    ]
  },
  {
    id: 'happy_birthday',
    title: 'Happy Birthday (The Universal Party Trick)',
    artist: 'Traditional',
    tabCategory: 'themes',
    stringCategory: 'single_string',
    difficulty: 'Super Beginner (1-2 Strings)',
    tempo: 95,
    timeSignature: '3/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The single most useful melody any beginner guitarist will ever learn! Play it for friends and family.',
    tips: 'Played on the 3rd (G) and 2nd (B) strings. Frets: 0-0-2-0 on G string, then 1-0 on B string.',
    tabColumns: [
      { notes: [{ str: 3, fret: 0 }], dur: 0.75, label: 'G' },
      { notes: [{ str: 3, fret: 0 }], dur: 0.25, label: 'G' },
      { notes: [{ str: 3, fret: 2 }], dur: 1.0, label: 'A' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 4, fret: 1 }], dur: 1.0, label: 'C' },
      { notes: [{ str: 4, fret: 0 }], dur: 2.0, label: 'B' },
      // Phrase 2
      { notes: [{ str: 3, fret: 0 }], dur: 0.75, label: 'G' },
      { notes: [{ str: 3, fret: 0 }], dur: 0.25, label: 'G' },
      { notes: [{ str: 3, fret: 2 }], dur: 1.0, label: 'A' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 4, fret: 3 }], dur: 1.0, label: 'D' },
      { notes: [{ str: 4, fret: 1 }], dur: 2.0, label: 'C' },
      // Climax
      { notes: [{ str: 3, fret: 0 }], dur: 0.75, label: 'G' },
      { notes: [{ str: 3, fret: 0 }], dur: 0.25, label: 'G' },
      { notes: [{ str: 5, fret: 3 }], dur: 1.0, label: 'High G' },
      { notes: [{ str: 5, fret: 0 }], dur: 1.0, label: 'E' },
      { notes: [{ str: 4, fret: 1 }], dur: 1.0, label: 'C' },
      { notes: [{ str: 4, fret: 0 }], dur: 1.0, label: 'B' },
      { notes: [{ str: 3, fret: 2 }], dur: 1.0, label: 'A' },
      // Resolution
      { notes: [{ str: 5, fret: 1 }], dur: 0.75, label: 'F' },
      { notes: [{ str: 5, fret: 1 }], dur: 0.25, label: 'F' },
      { notes: [{ str: 5, fret: 0 }], dur: 1.0, label: 'E' },
      { notes: [{ str: 4, fret: 1 }], dur: 1.0, label: 'C' },
      { notes: [{ str: 4, fret: 3 }], dur: 1.0, label: 'D' },
      { notes: [{ str: 4, fret: 1 }], dur: 2.5, label: 'C' }
    ]
  },

  // =========================================================================
  // 🎸 ICONIC FIRST GUITAR SOLOS (Real Lead Guitar!)
  // =========================================================================
  {
    id: 'californication_solo',
    title: 'Californication (Complete Guitar Solo)',
    artist: 'Red Hot Chili Peppers / John Frusciante',
    tabCategory: 'solos',
    stringCategory: 'two_string',
    difficulty: 'Beginner-Intermediate (First Solo)',
    tempo: 96,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Widely considered the best first solo for any beginner electric guitarist! Lyrical, deeply emotional, and slow.',
    tips: 'Played on strings 2 and 3 around frets 9 to 14. Slide into fret 11 with confidence and let the high notes sing!',
    tabColumns: [
      // Measure 1: Slide into 11 on G, 10 on B
      { notes: [{ str: 3, fret: 9 }], dur: 0.5, label: '9' },
      { notes: [{ str: 3, fret: 11 }], dur: 1.5, label: '11' },
      { notes: [{ str: 4, fret: 10 }], dur: 1.0, label: '10' },
      { notes: [{ str: 3, fret: 11 }], dur: 1.0, label: '11' },
      // Measure 2: 12 on B -> 10 on B -> 11 on G
      { notes: [{ str: 4, fret: 12 }], dur: 1.5, label: '12' },
      { notes: [{ str: 4, fret: 10 }], dur: 0.5, label: '10' },
      { notes: [{ str: 3, fret: 11 }], dur: 2.0, label: '11' },
      // Measure 3: 14 on B -> 12 on B -> 10 on B
      { notes: [{ str: 4, fret: 14 }], dur: 1.5, label: '14' },
      { notes: [{ str: 4, fret: 12 }], dur: 0.5, label: '12' },
      { notes: [{ str: 4, fret: 10 }], dur: 1.0, label: '10' },
      { notes: [{ str: 3, fret: 11 }], dur: 1.0, label: '11' },
      // Measure 4: Resolution bend / slide
      { notes: [{ str: 4, fret: 12 }], dur: 1.5, label: '12' },
      { notes: [{ str: 4, fret: 10 }], dur: 0.5, label: '10' },
      { notes: [{ str: 3, fret: 9 }], dur: 2.0, label: '9' }
    ]
  },
  {
    id: 'smells_like_teen_spirit_solo',
    title: 'Smells Like Teen Spirit (Guitar Solo)',
    artist: 'Nirvana / Kurt Cobain',
    tabCategory: 'solos',
    stringCategory: 'two_string',
    difficulty: 'Beginner (Lead Solo)',
    tempo: 116,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'Kurt Cobain’s iconic solo that doubles the vocal melody with crushing distortion and feedback.',
    tips: 'Slide from fret 8 down to 6 and 5 on the G string. Simple, rhythmic, and unforgettable!',
    tabColumns: [
      { notes: [{ str: 3, fret: 8 }], dur: 1.0, label: '8' },
      { notes: [{ str: 3, fret: 6 }], dur: 1.0, label: '6' },
      { notes: [{ str: 3, fret: 5 }], dur: 1.0, label: '5' },
      { notes: [{ str: 2, fret: 6 }], dur: 1.0, label: '6' },
      { notes: [{ str: 3, fret: 5 }], dur: 1.0, label: '5' },
      { notes: [{ str: 3, fret: 6 }], dur: 0.5, label: '6' },
      { notes: [{ str: 3, fret: 5 }], dur: 1.5, label: '5' },
      { notes: [{ str: 2, fret: 6 }], dur: 1.0, label: '6' },
      { notes: [{ str: 2, fret: 4 }], dur: 2.0, label: '4' }
    ]
  },
  {
    id: 'let_it_be_solo',
    title: 'Let It Be (Melodic Slow Solo)',
    artist: 'The Beatles / George Harrison',
    tabCategory: 'solos',
    stringCategory: 'two_string',
    difficulty: 'Beginner-Intermediate (Melodic)',
    tempo: 75,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'A masterclass in soulful, singing lead guitar phrasing using the C major & A minor pentatonic scale.',
    tips: 'Hold notes with your fingertip right behind the fret wire for pure, ringing sustain.',
    tabColumns: [
      { notes: [{ str: 3, fret: 7 }], dur: 0.5, label: '7' },
      { notes: [{ str: 3, fret: 9 }], dur: 1.5, label: '9' },
      { notes: [{ str: 4, fret: 8 }], dur: 1.0, label: '8' },
      { notes: [{ str: 4, fret: 10 }], dur: 1.0, label: '10' },
      { notes: [{ str: 5, fret: 8 }], dur: 2.0, label: '8' },
      { notes: [{ str: 4, fret: 10 }], dur: 0.5, label: '10' },
      { notes: [{ str: 4, fret: 8 }], dur: 0.5, label: '8' },
      { notes: [{ str: 3, fret: 9 }], dur: 1.0, label: '9' },
      { notes: [{ str: 3, fret: 7 }], dur: 2.0, label: '7' }
    ]
  },

  // =========================================================================
  // 🎼 FULL SONG SECTIONS & ARPEGGIOS
  // =========================================================================
  {
    id: 'nothing_else_matters_intro',
    title: 'Nothing Else Matters (Full Intro Arpeggio)',
    artist: 'Metallica',
    tabCategory: 'full_songs',
    stringCategory: 'multi_string',
    difficulty: 'Beginner (Open String Arpeggio)',
    tempo: 72,
    timeSignature: '6/8',
    tuning: 'Standard (E A D G B E)',
    description: 'The most famous open-string fingerpicking/arpeggio intro in rock! James Hetfield wrote it while talking on the phone with his fretting hand free.',
    tips: 'Your left hand does ZERO work in the first 4 measures! All notes are open strings: Low E -> G -> B -> High E -> B -> G.',
    tabColumns: [
      // Measure 1: Open strings 6, 3, 2, 1, 2, 3
      { notes: [{ str: 0, fret: 0 }], dur: 1.0, label: 'Low E' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 4, fret: 0 }], dur: 1.0, label: 'B' },
      { notes: [{ str: 5, fret: 0 }], dur: 1.0, label: 'High E' },
      { notes: [{ str: 4, fret: 0 }], dur: 1.0, label: 'B' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      // Measure 2: Repeat open string cycle
      { notes: [{ str: 0, fret: 0 }], dur: 1.0, label: 'Low E' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      { notes: [{ str: 4, fret: 0 }], dur: 1.0, label: 'B' },
      { notes: [{ str: 5, fret: 0 }], dur: 1.0, label: 'High E' },
      { notes: [{ str: 4, fret: 0 }], dur: 1.0, label: 'B' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: 'G' },
      // Measure 3: High 7th fret harmonic melody
      { notes: [{ str: 5, fret: 7 }], dur: 2.0, label: '7' },
      { notes: [{ str: 4, fret: 0 }], dur: 1.0, label: '0' },
      { notes: [{ str: 3, fret: 0 }], dur: 1.0, label: '0' },
      { notes: [{ str: 5, fret: 0 }], dur: 2.0, label: '0' }
    ]
  },
  {
    id: 'house_of_the_rising_sun',
    title: 'House of the Rising Sun (Full Arpeggio Verse)',
    artist: 'The Animals',
    tabCategory: 'full_songs',
    stringCategory: 'multi_string',
    difficulty: 'Beginner (Full Arpeggio)',
    tempo: 78,
    timeSignature: '6/8',
    tuning: 'Standard (E A D G B E)',
    description: 'The definitive 6/8 fingerpicking chord progression: Am -> C -> D -> F -> Am -> E -> Am -> E.',
    tips: 'Hold each chord shape firmly and pick down the strings (Bass -> 3rd -> 2nd -> 1st -> 2nd -> 3rd).',
    tabColumns: [
      // Am chord arpeggio
      { notes: [{ str: 1, fret: 0 }], dur: 0.5, label: 'A' },
      { notes: [{ str: 2, fret: 2 }], dur: 0.5, label: 'E' },
      { notes: [{ str: 3, fret: 2 }], dur: 0.5, label: 'A' },
      { notes: [{ str: 4, fret: 1 }], dur: 0.5, label: 'C' },
      { notes: [{ str: 5, fret: 0 }], dur: 0.5, label: 'E' },
      { notes: [{ str: 4, fret: 1 }], dur: 0.5, label: 'C' },
      // C chord arpeggio
      { notes: [{ str: 1, fret: 3 }], dur: 0.5, label: 'C' },
      { notes: [{ str: 2, fret: 2 }], dur: 0.5, label: 'E' },
      { notes: [{ str: 3, fret: 0 }], dur: 0.5, label: 'G' },
      { notes: [{ str: 4, fret: 1 }], dur: 0.5, label: 'C' },
      { notes: [{ str: 5, fret: 0 }], dur: 0.5, label: 'E' },
      { notes: [{ str: 4, fret: 1 }], dur: 0.5, label: 'C' },
      // D chord arpeggio
      { notes: [{ str: 2, fret: 0 }], dur: 0.5, label: 'D' },
      { notes: [{ str: 3, fret: 2 }], dur: 0.5, label: 'A' },
      { notes: [{ str: 4, fret: 3 }], dur: 0.5, label: 'D' },
      { notes: [{ str: 5, fret: 2 }], dur: 0.5, label: 'F#' },
      { notes: [{ str: 4, fret: 3 }], dur: 0.5, label: 'D' },
      { notes: [{ str: 3, fret: 2 }], dur: 0.5, label: 'A' },
      // F easy chord arpeggio
      { notes: [{ str: 2, fret: 3 }], dur: 0.5, label: 'F' },
      { notes: [{ str: 3, fret: 2 }], dur: 0.5, label: 'A' },
      { notes: [{ str: 4, fret: 1 }], dur: 0.5, label: 'C' },
      { notes: [{ str: 5, fret: 0 }], dur: 0.5, label: 'E' },
      { notes: [{ str: 4, fret: 1 }], dur: 0.5, label: 'C' },
      { notes: [{ str: 3, fret: 2 }], dur: 0.5, label: 'A' }
    ]
  },
  {
    id: 'stand_by_me_song',
    title: 'Stand By Me (Intro & Verse Progression)',
    artist: 'Ben E. King',
    tabCategory: 'full_songs',
    stringCategory: 'multi_string',
    difficulty: 'Beginner (Bassline + Strum)',
    tempo: 118,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The beloved classic combining the walking bassline and sweet acoustic/electric chord groove (A -> F#m -> D -> E7 -> A).',
    tips: 'Play the low bass note on beat 1, then strum the chord on beats 2 and 4 with a rhythmic backbeat.',
    tabColumns: [
      // A chord & bass walk
      { notes: [{ str: 1, fret: 0 }], dur: 1.0, label: 'A bass' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }, { str: 3, fret: 2 }], dur: 1.0, label: 'A' },
      { notes: [{ str: 1, fret: 4 }], dur: 1.0, label: 'C# bass' },
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }, { str: 3, fret: 2 }], dur: 1.0, label: 'A' },
      // F#m bass walk
      { notes: [{ str: 0, fret: 2 }], dur: 1.0, label: 'F# bass' },
      { notes: [{ str: 0, fret: 2 }, { str: 1, fret: 4 }, { str: 2, fret: 4 }], dur: 1.0, label: 'F#m' },
      { notes: [{ str: 0, fret: 0 }], dur: 1.0, label: 'E bass' },
      { notes: [{ str: 0, fret: 2 }, { str: 1, fret: 4 }, { str: 2, fret: 4 }], dur: 1.0, label: 'F#m' },
      // D -> E7 -> A
      { notes: [{ str: 2, fret: 0 }], dur: 1.0, label: 'D bass' },
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 2 }, { str: 4, fret: 3 }], dur: 1.0, label: 'D' },
      { notes: [{ str: 0, fret: 0 }], dur: 1.0, label: 'E bass' },
      { notes: [{ str: 0, fret: 0 }, { str: 1, fret: 2 }, { str: 3, fret: 1 }], dur: 1.0, label: 'E7' }
    ]
  },
  {
    id: 'knockin_on_heavens_door',
    title: "Knockin' on Heaven's Door (Full Strum Pattern)",
    artist: 'Bob Dylan / Guns N’ Roses',
    tabCategory: 'full_songs',
    stringCategory: 'multi_string',
    difficulty: 'Beginner (Full Chords)',
    tempo: 68,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'One of the most famous campfire and rock songs in history: G -> D -> Am7, then G -> D -> C.',
    tips: 'Use smooth down-down-down-up strumming. Let every chord ring full and open.',
    tabColumns: [
      // Measure 1: G -> D
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 2 }, { str: 2, fret: 0 }, { str: 3, fret: 0 }, { str: 4, fret: 0 }, { str: 5, fret: 3 }], dur: 2.0, label: 'G' },
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 2 }, { str: 4, fret: 3 }, { str: 5, fret: 2 }], dur: 2.0, label: 'D' },
      // Measure 2: Am
      { notes: [{ str: 1, fret: 0 }, { str: 2, fret: 2 }, { str: 3, fret: 2 }, { str: 4, fret: 1 }, { str: 5, fret: 0 }], dur: 4.0, label: 'Am' },
      // Measure 3: G -> D
      { notes: [{ str: 0, fret: 3 }, { str: 1, fret: 2 }, { str: 2, fret: 0 }, { str: 3, fret: 0 }, { str: 4, fret: 0 }, { str: 5, fret: 3 }], dur: 2.0, label: 'G' },
      { notes: [{ str: 2, fret: 0 }, { str: 3, fret: 2 }, { str: 4, fret: 3 }, { str: 5, fret: 2 }], dur: 2.0, label: 'D' },
      // Measure 4: C
      { notes: [{ str: 1, fret: 3 }, { str: 2, fret: 2 }, { str: 3, fret: 0 }, { str: 4, fret: 1 }, { str: 5, fret: 0 }], dur: 4.0, label: 'C' }
    ]
  },
  {
    id: 'boulevard_broken_dreams',
    title: 'Boulevard of Broken Dreams (Verse & Chorus)',
    artist: 'Green Day',
    tabCategory: 'full_songs',
    stringCategory: 'multi_string',
    difficulty: 'Beginner (Full Chords)',
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
  },

  // =========================================================================
  // ⚡ ROCK & PUNK RIFFS
  // =========================================================================
  {
    id: 'brain_stew',
    title: 'Brain Stew (5-Power-Chord Slide)',
    artist: 'Green Day',
    tabCategory: 'riffs',
    stringCategory: 'two_string',
    difficulty: 'Beginner (Power Chords)',
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
    tabCategory: 'riffs',
    stringCategory: 'two_string',
    difficulty: 'Beginner (Power Chords)',
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
    id: 'smells_like_teen_spirit',
    title: 'Smells Like Teen Spirit (4-Power-Chord Grunge)',
    artist: 'Nirvana',
    tabCategory: 'riffs',
    stringCategory: 'multi_string',
    difficulty: 'Beginner-Intermediate',
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
    id: 'smoke_on_the_water',
    title: 'Smoke on the Water (Classic Double-Stops)',
    artist: 'Deep Purple',
    tabCategory: 'riffs',
    stringCategory: 'two_string',
    difficulty: 'Beginner (2 Strings)',
    tempo: 112,
    timeSignature: '4/4',
    tuning: 'Standard (E A D G B E)',
    description: 'The standard 2-string version played with 4th intervals on strings 4 and 3.',
    tips: 'Pluck both the D and G strings together with your pick.',
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
    id: 'seven_nation_army',
    title: 'Seven Nation Army (1-String Anthem)',
    artist: 'The White Stripes',
    tabCategory: 'single_string',
    stringCategory: 'single_string',
    difficulty: 'Super Beginner (1 String)',
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
      { notes: [{ str: 1, fret: 2 }], dur: 2.0, label: '2' }
    ]
  }
];
