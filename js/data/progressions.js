/**
 * Chord Progressions Database & Music Theory Explanations
 */

export const PROGRESSIONS = [
  {
    id: 'pop_4chord_g',
    title: 'The 4-Chord Pop & Rock Hitmaker',
    subtitle: 'The famous I - V - vi - IV progression heard in hundreds of hit songs',
    key: 'G',
    numerals: 'I - V - vi - IV',
    chords: ['G_maj', 'D_maj', 'Em_min', 'C_maj'],
    tempo: 95,
    beatsPerChord: 4,
    drumPattern: 'rock_standard',
    strumPattern: ['D', 'D', 'U', 'U', 'D', 'U'], // Down, Down, Up, Up, Down, Up
    category: 'Pop & Modern Rock',
    songs: ["Don't Stop Believin' - Journey", "With or Without You - U2", "Dammit - Blink-182", "Someone Like You - Adele"],
    theoryExplanation: 'Why it sounds amazing: G is your "Home" chord (I). D (V) builds bright energy, Em (vi) brings a touch of emotion/mystery, and C (IV) lifts the song right before resolving happily back to G!'
  },
  {
    id: 'classic_rock_3chord_a',
    title: 'Classic Rock 3-Chord Anthem',
    subtitle: 'The iconic I - IV - V rock and roll engine',
    key: 'A',
    numerals: 'I - IV - V',
    chords: ['A_maj', 'D_maj', 'E_maj', 'D_maj'],
    tempo: 110,
    beatsPerChord: 4,
    drumPattern: 'rock_standard',
    strumPattern: ['D', 'D', 'D', 'U', 'D', 'U'],
    category: 'Classic Rock',
    songs: ["Wild Thing - The Troggs", "Twist and Shout - The Beatles", "Bad Moon Rising - CCR", "Blitzkrieg Bop - Ramones"],
    theoryExplanation: 'The three most important chords in rock music! A is Home (I), D is the lift (IV), and E is the driving tension (V) that demands to resolve back to A.'
  },
  {
    id: 'punk_power_riff',
    title: 'Punk & Alt-Rock Power Anthem',
    subtitle: 'Movable power chords that shake the floor with overdrive',
    key: 'E',
    numerals: 'I - bVII - IV',
    chords: ['E5_power', 'D5_power', 'A5_power', 'E5_power'],
    tempo: 125,
    beatsPerChord: 4,
    drumPattern: 'half_time',
    strumPattern: ['D', 'D', 'D', 'D'], // Hard downstrokes
    category: 'Rock & Punk',
    songs: ["TNT - AC/DC", "Brain Stew - Green Day", "Smells Like Teen Spirit vibe - Nirvana", "All The Small Things - Blink-182"],
    theoryExplanation: 'Power chords (Roots + 5ths) have no major/minor clash, letting you crank up the distortion and slide around the neck with punchy, unstoppable energy.'
  },
  {
    id: 'moody_emotional_em',
    title: 'Moody & Cinematic Indie',
    subtitle: 'The vi - IV - I - V emotional progression',
    key: 'G (Em)',
    numerals: 'vi - IV - I - V',
    chords: ['Em_min', 'C_maj', 'G_maj', 'D_maj'],
    tempo: 84,
    beatsPerChord: 4,
    drumPattern: 'rock_standard',
    strumPattern: ['D', 'U', 'D', 'U', 'D', 'U'],
    category: 'Indie & Alternative',
    songs: ["Zombie - The Cranberries", "Let Her Go - Passenger", "Demons - Imagine Dragons", "Africa - Toto"],
    theoryExplanation: 'Starting on the minor chord (Em) sets a reflective, moody tone. Then stepping through C and G adds soaring hope, while D guides you back to Em.'
  },
  {
    id: 'blues_12_bar_e',
    title: '12-Bar Blues Boogie Shuffle',
    subtitle: 'The timeless 12-bar cycle that gave birth to rock and roll',
    key: 'E',
    numerals: 'I (x4) - IV (x2) - I (x2) - V - IV - I - V',
    chords: [
      'E7_dom', 'E7_dom', 'E7_dom', 'E7_dom',
      'A7_dom', 'A7_dom', 'E7_dom', 'E7_dom',
      'B7_dom', 'A7_dom', 'E7_dom', 'B7_dom'
    ],
    tempo: 100,
    beatsPerChord: 4,
    drumPattern: 'shuffle',
    strumPattern: ['D', 'U', 'D', 'U'], // Shuffle bounce
    category: 'Blues & Boogie',
    songs: ["Johnny B. Goode - Chuck Berry", "Pride and Joy - Stevie Ray Vaughan", "Hound Dog - Elvis Presley", "Crossroads - Eric Clapton"],
    theoryExplanation: 'The 12-bar blues uses dominant 7th chords (E7, A7, B7) to create a groovy, gritty bounce. The last measure features the "Turnaround" (B7) that sets up the next repeat!'
  },
  {
    id: 'doowop_50s_c',
    title: '50s Doo-Wop & Heartbreak Ballad',
    subtitle: 'The classic I - vi - IV - V progression',
    key: 'C',
    numerals: 'I - vi - IV - V',
    chords: ['C_maj', 'Am_min', 'F_easy', 'G_maj'],
    tempo: 78,
    beatsPerChord: 4,
    drumPattern: 'pop_groove',
    strumPattern: ['D', 'D', 'U', 'D', 'U'],
    category: 'Oldies & Ballads',
    songs: ["Stand By Me - Ben E. King", "Every Breath You Take - The Police", "Earth Angel - The Penguins", "Unchained Melody - Righteous Brothers"],
    theoryExplanation: 'Smooth, nostalgic, and romantic. Each chord flows like steps in a circle: C -> Am -> F -> G -> C.'
  },
  {
    id: 'andalusian_flamenco_rock',
    title: 'Andalusian Rock Cadence',
    subtitle: 'The dramatic descending i - bVII - bVI - V',
    key: 'A minor',
    numerals: 'i - bVII - bVI - V',
    chords: ['Am_min', 'G_maj', 'F_easy', 'E_maj'],
    tempo: 92,
    beatsPerChord: 4,
    drumPattern: 'rock_standard',
    strumPattern: ['D', 'D', 'D', 'U'],
    category: 'Classic Rock',
    songs: ["Stairway to Heaven (Solo) - Led Zeppelin", "Sultans of Swing - Dire Straits", "Hotel California - Eagles", "Smooth - Santana"],
    theoryExplanation: 'A descending staircase of bass notes (A -> G -> F -> E). Finishing on major E creates a huge classical/Spanish resolution back to Am!'
  },
  {
    id: 'acoustic_campfire_d',
    title: 'Acoustic / Electric Folk Anthem',
    subtitle: 'The bright and open D - Cadd9 - G - D progression',
    key: 'D',
    numerals: 'I - bVII - IV - I',
    chords: ['D_maj', 'Cadd9_col', 'G_maj', 'D_maj'],
    tempo: 88,
    beatsPerChord: 4,
    drumPattern: 'rock_standard',
    strumPattern: ['D', 'D', 'U', 'U', 'D', 'U'],
    category: 'Acoustic & Folk-Rock',
    songs: ["Sweet Home Alabama - Lynyrd Skynyrd", "Free Fallin' - Tom Petty", "Wonderwall - Oasis", "Knockin' On Heaven's Door - Bob Dylan / Guns N' Roses"],
    theoryExplanation: 'By anchoring fingers on the top strings, Cadd9 and G transition effortlessly from D major, creating a shimmering, wide-open guitar sound.'
  }
];
