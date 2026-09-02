/**
 * RiffLab - Electric Guitar Companion Main Application Coordinator
 */

import { CHORDS, CHORD_CATEGORIES } from './data/chords.js';
import { createChordCard } from './components/chord-diagram.js';
import { ProgressionPlayer } from './components/progression-player.js';
import { TabViewer } from './components/tab-viewer.js';
import { ExerciseView } from './components/exercise-view.js';
import { TunerUI } from './components/tuner-ui.js';
import { FretboardView } from './components/fretboard-view.js';
import { guitarSynth } from './audio/synth.js';

class App {
  constructor() {
    this.currentCategory = 'electric_dozen';
    this.searchQuery = '';
    this.progressionPlayer = null;
    this.tabViewer = null;
    this.exerciseView = null;
    this.tunerUI = null;
    this.fretboardView = null;

    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupAudioSettings();
    this.renderChordLibraryFilters();
    this.renderChordGrid();
    this.initModules();
    this.setupEducationalModals();
  }

  setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-tab-btn');
    const sections = document.querySelectorAll('.app-section');

    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetSectionId = btn.dataset.target;
        
        navButtons.forEach(b => b.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
          targetSection.classList.add('active');
        }

        // Initialize Web Audio on user click
        guitarSynth.init();
      });
    });
  }

  setupAudioSettings() {
    // Sound Mode Selector (Overdrive, Clean, Acoustic)
    const toneSelect = document.getElementById('amp-tone-select');
    if (toneSelect) {
      toneSelect.addEventListener('change', (e) => {
        guitarSynth.setSoundMode(e.target.value);
      });
    }

    // Volume Slider
    const volSlider = document.getElementById('master-vol-slider');
    if (volSlider) {
      volSlider.addEventListener('input', (e) => {
        guitarSynth.setVolume(parseFloat(e.target.value));
      });
    }

    // Mute Button
    const muteBtn = document.getElementById('btn-master-mute');
    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        const isMuted = guitarSynth.toggleMute();
        muteBtn.classList.toggle('muted', isMuted);
        muteBtn.innerHTML = isMuted ? '🔇' : '🔊';
      });
    }

    // Global click resume audio context
    document.addEventListener('click', () => {
      guitarSynth.init();
    }, { once: true });
  }

  renderChordLibraryFilters() {
    const filterContainer = document.getElementById('chord-filter-chips');
    if (!filterContainer) return;

    filterContainer.innerHTML = CHORD_CATEGORIES.map(cat => `
      <button class="filter-chip ${cat.id === this.currentCategory ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.name}
      </button>
    `).join('');

    filterContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (chip) {
        this.currentCategory = chip.dataset.cat;
        filterContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.renderChordGrid();
      }
    });

    const searchInput = document.getElementById('chord-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderChordGrid();
      });
    }
  }

  renderChordGrid() {
    const grid = document.getElementById('chords-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = CHORDS.filter(chord => {
      // Category Match
      const matchesCategory = (this.currentCategory === 'all') || chord.category.includes(this.currentCategory);
      
      // Search Match
      const matchesSearch = !this.searchQuery || 
        chord.name.toLowerCase().includes(this.searchQuery) ||
        chord.shortName.toLowerCase().includes(this.searchQuery) ||
        chord.notesSpelled.some(n => n.toLowerCase() === this.searchQuery);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <p>No chords found matching "${this.searchQuery}". Try selecting another category or clear the search!</p>
        </div>
      `;
      return;
    }

    filtered.forEach(chord => {
      const card = createChordCard(chord);
      grid.appendChild(card);
    });
  }

  initModules() {
    // 1. Progression Studio
    const progContainer = document.getElementById('progression-studio-container');
    if (progContainer) {
      this.progressionPlayer = new ProgressionPlayer(progContainer);
    }

    // 2. Tab Player
    const tabContainer = document.getElementById('tab-viewer-container');
    if (tabContainer) {
      this.tabViewer = new TabViewer(tabContainer);
    }

    // 3. Daily Exercises & Warm-Up Gym
    const exerciseContainer = document.getElementById('exercises-container');
    if (exerciseContainer) {
      this.exerciseView = new ExerciseView(exerciseContainer, (tabId) => {
        // Switch to the tabs section in main navigation
        const tabNavBtn = document.querySelector('.nav-tab-btn[data-target="section-tabs"]');
        if (tabNavBtn) tabNavBtn.click();

        if (this.tabViewer) {
          this.tabViewer.loadPresetById(tabId);
        }
      });
    }

    // 4. Guitar Tuner
    const tunerContainer = document.getElementById('tuner-container');
    if (tunerContainer) {
      this.tunerUI = new TunerUI(tunerContainer);
    }

    // 5. Fretboard Lead Visualizer
    const fretboardContainer = document.getElementById('fretboard-container');
    if (fretboardContainer) {
      this.fretboardView = new FretboardView(fretboardContainer);
    }
  }

  setupEducationalModals() {
    const openGuideBtn = document.getElementById('btn-open-theory-guide');
    const modal = document.getElementById('theory-guide-modal');
    const closeBtn = document.getElementById('btn-close-modal');

    if (openGuideBtn && modal && closeBtn) {
      openGuideBtn.addEventListener('click', () => {
        modal.showModal();
      });

      closeBtn.addEventListener('click', () => {
        modal.close();
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.close();
        }
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
