/**
 * Daily Beginner Guitar Exercises & Warm-Up Routines
 */

export const EXERCISE_CATEGORIES = [
  { id: 'all', name: 'All Exercises', icon: '🏋️' },
  { id: 'dexterity', name: '🖐️ Finger Dexterity & Spider Walks', icon: '🖐️' },
  { id: 'picking', name: '⚡ Alternate Picking & Palm Muting', icon: '⚡' },
  { id: 'chords', name: '🎸 Smooth Chord Switching', icon: '🎸' },
  { id: 'lead', name: '🔥 Hammer-Ons, Slides & Pentatonics', icon: '🔥' }
];

export const EXERCISES = [
  // =========================================================================
  // 🖐️ FINGER DEXTERITY & WARM-UPS
  // =========================================================================
  {
    id: 'spider_walk_classic',
    title: 'The Spider Walk (1-2-3-4 Chromatic Ladder)',
    category: 'dexterity',
    difficulty: 'Super Beginner to Pro',
    targetBpm: { start: 60, target: 90, master: 120 },
    tabId: 'spider_walk_tab',
    focus: 'Finger independence, fret hand stretch, and strict 1-finger-per-fret discipline.',
    instructions: [
      'Place index on fret 1, middle on fret 2, ring on fret 3, pinky on fret 4.',
      'Play 1-2-3-4 on the 6th string, then move to the 5th, 4th, 3rd, 2nd, and 1st string.',
      'Keep your fingertips curled on their tips right behind the fret wires.',
      'Do NOT lift earlier fingers until the next finger strikes!'
    ],
    proTip: 'Keep your fretting thumb rested on the back middle of the guitar neck, not wrapping over the top.'
  },
  {
    id: 'spider_skip_drill',
    title: 'The 1-3 Spider Alternate (1-3-2-4)',
    category: 'dexterity',
    difficulty: 'Beginner',
    targetBpm: { start: 50, target: 80, master: 110 },
    tabId: 'spider_skip_tab',
    focus: 'Coordination between non-adjacent fingers (Index + Ring, Middle + Pinky).',
    instructions: [
      'Play Index (fret 1) -> Ring (fret 3) -> Middle (fret 2) -> Pinky (fret 4).',
      'Move down the strings one by one.',
      'This trains your brain to control each finger individually without them sticking together.'
    ],
    proTip: 'Start slowly at 50 BPM. Accuracy and clean notes are 100x more important than raw speed!'
  },
  {
    id: 'pinky_power_builder',
    title: 'Pinky Power Builder (Frets 5 & 8 Stretch)',
    category: 'dexterity',
    difficulty: 'Beginner',
    targetBpm: { start: 60, target: 90, master: 120 },
    tabId: 'pinky_power_tab',
    focus: 'Eliminating the weak pinky finger syndrome on electric guitar.',
    instructions: [
      'Anchor your index finger on the 5th fret of the G string.',
      'Reach your pinky out to hammer and pick the 8th fret.',
      'Alternate between index (5) and pinky (8) across the G, B, and High E strings.'
    ],
    proTip: 'A strong pinky is the secret weapon for effortless rock solos and full power chords!'
  },

  // =========================================================================
  // ⚡ ALTERNATE PICKING & RHYTHM
  // =========================================================================
  {
    id: 'alternate_picking_engine',
    title: 'Alternate Picking Speed Engine (Down-Up-Down-Up)',
    category: 'picking',
    difficulty: 'Beginner',
    targetBpm: { start: 70, target: 100, master: 140 },
    tabId: 'alt_picking_tab',
    focus: 'Strict alternate picking mechanics and relaxed wrist motion.',
    instructions: [
      'Strictly alternate: Downstroke (↓) -> Upstroke (↑) -> Downstroke (↓) -> Upstroke (↑).',
      'Never play two downstrokes in a row during this drill!',
      'Keep your picking wrist relaxed—pick motion comes from the wrist, NOT the elbow.'
    ],
    proTip: 'Angle your pick slightly (~45 degrees) against the string so it glides smoothly across without catching.'
  },
  {
    id: 'palm_muting_chug_workout',
    title: 'Palm Muting Rock Chug Workout (Open to Muted)',
    category: 'picking',
    difficulty: 'Beginner',
    targetBpm: { start: 80, target: 110, master: 140 },
    tabId: 'palm_mute_tab',
    focus: 'The classic heavy rock/metal rhythm technique.',
    instructions: [
      'Rest the fleshy edge of your picking palm lightly on the strings right where they cross the bridge saddles.',
      'Play 4 tight, percussive "chugs" on the Low E string (Mute-Mute-Mute-Mute).',
      'Then lift your palm slightly for 4 ringing open notes (Open-Open-Open-Open).'
    ],
    proTip: 'If it sounds dead with no pitch, you are pressing too far forward. Move your palm back toward the bridge!'
  },

  // =========================================================================
  // 🎸 SMOOTH CHORD SWITCHING
  // =========================================================================
  {
    id: 'anchor_finger_switch',
    title: 'The Anchor Finger Switch (G Major ↔ Cadd9 ↔ Dsus4)',
    category: 'chords',
    difficulty: 'Beginner',
    targetBpm: { start: 60, target: 85, master: 115 },
    tabId: 'anchor_chord_tab',
    focus: 'Switching chords lightning fast by leaving anchor fingers locked in place.',
    instructions: [
      'Plant your Ring finger on Fret 3 (2nd string) and Pinky on Fret 3 (1st string).',
      'NEVER lift these two fingers!',
      'Switch between G Major, Cadd9, and Dsus4 by only moving your Index and Middle fingers.'
    ],
    proTip: 'This exact anchor technique is used in "Wonderwall", "Sweet Home Alabama", and hundreds of hit songs!'
  },
  {
    id: 'power_chord_slider_drill',
    title: 'Movable Power Chord Slider (1st → 3rd → 5th → 7th Fret)',
    category: 'chords',
    difficulty: 'Beginner',
    targetBpm: { start: 70, target: 100, master: 130 },
    tabId: 'power_slider_tab',
    focus: 'Sliding the 2-finger power chord shape up and down the neck without breaking form.',
    instructions: [
      'Form an F5 (1st fret on 6th string + 3rd fret on 5th string).',
      'Slide smoothly to G5 (3rd fret), then A5 (5th fret), then B5 (7th fret).',
      'Keep the 2-finger clamped grip locked as you slide your forearm along the fretboard.'
    ],
    proTip: 'Release fretting pressure slightly while sliding so your fingers glide effortlessly without dragging.'
  },

  // =========================================================================
  // 🔥 HAMMER-ONS, SLIDES & PENTATONICS
  // =========================================================================
  {
    id: 'hammer_pull_workout',
    title: 'Hammer-On & Pull-Off Workout (Legato Solo Drill)',
    category: 'lead',
    difficulty: 'Beginner-Intermediate',
    targetBpm: { start: 60, target: 85, master: 110 },
    tabId: 'hammer_pull_tab',
    focus: 'Fretting-hand stamina and clean sound production without picking every note.',
    instructions: [
      'Pick the 5th fret on the G string, then forcefully slam your ring finger onto the 7th fret (Hammer-On: 5h7).',
      'Then pluck the string off with your ring finger to sound the 5th fret again (Pull-Off: 7p5).',
      'Repeat on the B and High E strings.'
    ],
    proTip: 'Think of hammering like a quick, confident hammer striking an anvil. The sound comes from velocity!'
  },
  {
    id: 'pentatonic_ladder_drill',
    title: 'A Minor Pentatonic Box 1 Ladder (Up & Down)',
    category: 'lead',
    difficulty: 'Beginner',
    targetBpm: { start: 65, target: 95, master: 130 },
    tabId: 'pentatonic_ladder_tab',
    focus: 'The universal lead guitar solo scale across all 6 strings.',
    instructions: [
      'String 6: 5 - 8 | String 5: 5 - 7 | String 4: 5 - 7',
      'String 3: 5 - 7 | String 2: 5 - 8 | String 1: 5 - 8',
      'Then reverse and walk all the way back down from high E to low E.',
      'Use index finger for all 5th frets, ring for 7th frets, and pinky for 8th frets.'
    ],
    proTip: 'Once he memorizes this pattern, he can play along with any rock/blues progression in the app!'
  }
];
