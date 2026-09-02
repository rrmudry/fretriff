/**
 * Daily Exercises & Practice Routine Hub
 */

import { EXERCISES, EXERCISE_CATEGORIES } from '../data/exercises.js';
import { DrumEngine } from '../audio/drums.js';
import { guitarSynth } from '../audio/synth.js';
import { PrintGenerator } from './print-generator.js';

export class ExerciseView {
  constructor(containerEl, onSelectExerciseTab = null) {
    this.container = containerEl;
    this.currentCategory = 'all';
    this.onSelectExerciseTab = onSelectExerciseTab;
    this.drumEngine = new DrumEngine(guitarSynth);
    this.printGen = new PrintGenerator();

    this.initUI();
    this.setupListeners();
    this.setupPrintModal();
  }

  initUI() {
    this.container.innerHTML = `
      <div class="exercise-hub-wrapper">
        <!-- Daily Warm-Up Banner & Routine Guide -->
        <div class="daily-routine-card">
          <div class="routine-header">
            <h3>⏱️ The 3-Minute Daily Electric Guitar Workout</h3>
            <span class="routine-badge">Daily Habit</span>
          </div>
          <p class="routine-subtitle">
            Just 3 minutes of daily focused finger drills before playing songs will build hand strength, coordination, and speed 5x faster!
          </p>
          <div class="routine-steps-grid">
            <div class="routine-step-box">
              <span class="step-time">Minute 1</span>
              <h4>🖐️ Finger Independence</h4>
              <p>Spider Walk (1-2-3-4) on frets 1 to 4 to wake up all 4 fingers.</p>
            </div>
            <div class="routine-step-box">
              <span class="step-time">Minute 2</span>
              <h4>⚡ Picking Accuracy</h4>
              <p>Alternate picking (Down-Up-Down-Up) & palm-muted rock chugs.</p>
            </div>
            <div class="routine-step-box">
              <span class="step-time">Minute 3</span>
              <h4>🔥 Power & Soloing</h4>
              <p>Movable power chord slides or Minor Pentatonic Box 1 ladder.</p>
            </div>
          </div>
        </div>

        <!-- Printable Drills & Worksheets Bar -->
        <div class="printable-banner-bar">
          <div class="printable-banner-info">
            <span class="printable-banner-icon">🖨️</span>
            <div>
              <h4>Printable Music Stand Sheets & Workout Guides</h4>
              <p>Print ink-friendly paper sheets for your music stand or guitar binder.</p>
            </div>
          </div>
          <div class="printable-btn-group">
            <button class="btn btn-sm btn-accent btn-open-print" data-sheet="daily_workout">
              📄 Print 3-Min Workout
            </button>
            <button class="btn btn-sm btn-outline btn-open-print" data-sheet="electric_dozen">
              🎸 Print Chord Poster
            </button>
            <button class="btn btn-sm btn-outline btn-open-print" data-sheet="practice_tracker">
              📅 Print Weekly Log
            </button>
            <button class="btn btn-sm btn-outline btn-open-print" data-sheet="blank_manuscript">
              📝 Blank TABs
            </button>
          </div>
        </div>

        <!-- Category Filters -->
        <div class="filter-toolbar">
          <div class="filter-chips-wrap" id="exercise-filter-chips">
            ${EXERCISE_CATEGORIES.map(cat => `
              <button class="filter-chip ${cat.id === this.currentCategory ? 'active' : ''}" data-cat="${cat.id}">
                ${cat.icon} ${cat.name}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Exercise Cards Grid -->
        <div class="exercises-grid" id="exercises-grid">
          <!-- Rendered dynamically -->
        </div>

        <!-- Print Modal Placeholder -->
        <div id="print-modal-container">
          ${this.printGen.renderPrintModal()}
        </div>
      </div>
    `;

    this.renderExerciseCards();
  }

  renderExerciseCards() {
    const grid = this.container.querySelector('#exercises-grid');
    grid.innerHTML = '';

    const filtered = EXERCISES.filter(ex => {
      return this.currentCategory === 'all' || ex.category === this.currentCategory;
    });

    filtered.forEach(ex => {
      const card = document.createElement('div');
      card.className = 'exercise-card';
      card.dataset.exerciseId = ex.id;

      card.innerHTML = `
        <div class="exercise-card-header">
          <div class="exercise-title-group">
            <h3 class="exercise-title">${ex.title}</h3>
            <span class="exercise-focus">${ex.focus}</span>
          </div>
          <span class="badge badge-exercise-diff">${ex.difficulty}</span>
        </div>

        <!-- BPM Target Milestones -->
        <div class="bpm-milestones-row">
          <span class="bpm-milestone-title">Speed Goals:</span>
          <div class="milestone-pill starter" title="Starter goal">🟢 Starter: ${ex.targetBpm.start} BPM</div>
          <div class="milestone-pill target" title="Target groove">🟡 Target: ${ex.targetBpm.target} BPM</div>
          <div class="milestone-pill master" title="Master speed">🔴 Master: ${ex.targetBpm.master} BPM</div>
        </div>

        <!-- Instructions List -->
        <div class="exercise-instructions">
          <ul>
            ${ex.instructions.map(inst => `<li>${inst}</li>`).join('')}
          </ul>
        </div>

        ${ex.proTip ? `
          <div class="exercise-protip">
            <strong>💡 Pro-Tip:</strong> ${ex.proTip}
          </div>
        ` : ''}

        <!-- Action Bar -->
        <div class="exercise-card-footer">
          <button class="btn btn-primary btn-launch-tab" data-tab-id="${ex.tabId}">
            ▶ Practice in Interactive Tab Trainer
          </button>
        </div>
      `;

      // Launch tab trainer click
      const launchBtn = card.querySelector('.btn-launch-tab');
      launchBtn.addEventListener('click', () => {
        if (this.onSelectExerciseTab) {
          this.onSelectExerciseTab(ex.tabId);
        }
      });

      grid.appendChild(card);
    });
  }

  setupListeners() {
    const filterWrap = this.container.querySelector('#exercise-filter-chips');
    filterWrap.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (chip) {
        this.currentCategory = chip.dataset.cat;
        filterWrap.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.renderExerciseCards();
      }
    });
  }

  setupPrintModal() {
    const modal = this.container.querySelector('#print-modal');
    const select = this.container.querySelector('#print-sheet-select');
    const previewContainer = this.container.querySelector('#print-paper-preview');
    const triggerPrintBtn = this.container.querySelector('#btn-trigger-print');
    const closeBtn = this.container.querySelector('#btn-close-print-modal');

    const updatePreview = (sheetId) => {
      select.value = sheetId;
      previewContainer.innerHTML = this.printGen.generateSheetHtml(sheetId);
    };

    // Open print modal buttons
    const openPrintBtns = this.container.querySelectorAll('.btn-open-print');
    openPrintBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const sheetId = btn.dataset.sheet || 'daily_workout';
        updatePreview(sheetId);
        modal.showModal();
      });
    });

    // Change sheet from dropdown
    select.addEventListener('change', (e) => {
      updatePreview(e.target.value);
    });

    // Trigger Browser Print
    triggerPrintBtn.addEventListener('click', () => {
      window.print();
    });

    // Close Modal
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
