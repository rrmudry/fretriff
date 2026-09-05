# ⚡ FretRiff - Electric Guitar Companion

An interactive, responsive web application built for beginner electric guitar students to master **chord progressions**, essential open chords (the **"Electric Dozen"**), **rock power chords**, **interactive tablature riffs**, and tune up with a **real-time microphone guitar tuner**.

Live Web App: **[https://rrmudry.github.io/fretriff/](https://rrmudry.github.io/fretriff/)**

Designed to run natively in any modern browser with zero server dependencies, hosted on **GitHub Pages**.

---

## 🎸 Key Features

### 1. ⚡ The "Electric Dozen" & Essential Chords
- **The Foundation 12**: Includes the Essential 8 Open Chords (`E`, `Em`, `A`, `Am`, `D`, `Dm`, `C`, `G`) + 4 Essential Dominant 7ths (`E7`, `A7`, `D7`, `B7`) + easy `Fmaj7/F` and color chords (`Cadd9`, `Dsus4`, `Asus2`).
- **Rock Power Chords (`E5`, `A5`, `D5`, `G5`, `C5`, `F5`)**: The 2-finger movable shapes that power rock, punk, and metal!
- **Interactive SVG Chord Diagrams**: Shows finger numbers, string numbers, root note highlights, and mute indicators.
- **Interactive Pluck & Strum**: Click any string on the diagram to test single note clarity, or swipe/click *Strum* to hear the chord through a simulated guitar amplifier.

### 2. 🎼 Chord Progression Studio ("Sounds Good Together")
- **Curated Hit Progressions**:
  - *The 4-Chord Pop Hitmaker* ($I - V - vi - IV$ e.g., `G - D - Em - C`)
  - *Classic Rock 3-Chord Anthem* ($I - IV - V$ e.g., `A - D - E`)
  - *Punk & Alt-Rock Power Anthem* ($I - \flat VII - IV$ e.g., `E5 - D5 - A5`)
  - *Moody & Cinematic* ($vi - IV - I - V$ e.g., `Em - C - G - D`)
  - *12-Bar Blues Boogie Shuffle* ($E7 \rightarrow A7 \rightarrow B7$)
  - *50s Doo-Wop & Ballad* ($I - vi - IV - V$ e.g., `C - Am - F - G`)
  - *Andalusian Rock Cadence* ($i - \flat VII - \flat VI - V$ e.g., `Am - G - F - E`)
- **Interactive Backing Track**: Strumming timing guides (Down/Up arrows), real-time Web Audio rock drums (Kick, Snare, Hi-hat), metronome, and tempo slider ($40-180\text{ BPM}$).
- **Custom Progression Builder**: Click any chord in the palette to build and audition your own song sequences!
- **Music Theory Made Simple**: Explains *why* chords resolve into each other using the Roman Numeral / Nashville system (Tonic Home, Dominant Tension, Subdominant Lift).

### 3. 📜 Interactive Tablature & Riff Trainer
- **Iconic Beginner Electric Riffs Pre-Loaded**:
  - *Smoke on the Water* (Deep Purple)
  - *Seven Nation Army* (The White Stripes)
  - *Iron Man* (Black Sabbath)
  - *Sunshine of Your Love* (Cream / Clapton)
  - *12-Bar Blues Boogie Shuffle* (Chuck Berry Style)
  - *Boulevard of Broken Dreams* (Green Day)
- **Interactive Playhead**: Animated cursor follows notes with synchronized Web Audio guitar playback.
- **Practice Controls**: Slow down tricky passages ($0.5\times, 0.75\times, 1.0\times, 1.25\times$), loop mode, and custom tab editor.

### 4. 🎯 Precision Guitar Tuner
- **Live Microphone Pitch Detection**: Uses optimized autocorrelation / YIN algorithm to detect pitch in real-time.
- **Visual Needle Gauge**: Displays cents offset ($\pm 50 \text{ cents}$), detected frequency in Hz, target frequency, and glowing green **"In Tune"** lock celebration.
- **Presets**: Standard ($E A D G B E$), Drop D, Half-Step Down, DADGAD, Open D.
- **Reference Pitch Generator**: Interactive guitar headstock pegs to play reference pitches for ear training.

### 5. ⚡ Fretboard Explorer & Pentatonic Lead Studio
- **Full 22-Fret Neck**: Interactive neck showing all notes and inlays.
- **Minor Pentatonic Box 1 Overlay**: The "magic soloing scale" for electric guitar. Click any fret to play the note.

---

## 🚀 Live Hosting

This application is deployed and publicly accessible on GitHub Pages:
**[https://rrmudry.github.io/fretriff/](https://rrmudry.github.io/fretriff/)**

---

## 🛠️ Technology Stack
- **HTML5 & Vanilla JavaScript (ES Modules)**: Fast, modern, zero external heavy build steps or broken paths.
- **Web Audio API**: Real-time synthesizer with Overdrive / Crunch amp simulation, physical pluck synthesis, and synthesized drum rhythm engine.
- **Vanilla CSS3**: Glassmorphism, cyber-rock dark theme, smooth micro-animations, and responsive layout.
