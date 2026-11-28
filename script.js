/* ==========================================================================
   Projects Data (Realistic Full-Stack & Frontend Software Engineering Showcase)
   ========================================================================== */
const cardInfos = {
  sectionTitle: 'Featured Projects',
  icons: {
    close: './default/SVG/Cancel.svg',
    live: './default/SVG/liveIcon.svg',
    github: './default/SVG/githubIcon.svg',
  },
  featured: {
    id: 'modal0',
    category: 'Full-Stack Commerce',
    title: 'NexCart — Composable E-Commerce & Analytics Platform',
    image: './default/SVG/projects/project-ecommerce.svg',
    description:
      'A high-throughput multi-vendor e-commerce platform and merchant intelligence suite with real-time inventory synchronization, Stripe Split-Pay checkout, and sub-50ms search indexing.',
    modalDescription:
      'Engineered to replace monolithic storefront bottlenecks, NexCart decouples the customer checkout experience from merchant warehouse telemetry. The backend orchestrates distributed inventory locks with Redis and PostgreSQL row-level security, while the React + TypeScript dashboard streams live conversion funnels and automated Stripe Connect payouts.',
    highlights: [
      'Sub-50ms faceted product search and optimistic cart mutations with Redis read-through caching.',
      'Idempotent Stripe Connect webhook pipeline processing multi-vendor payouts with 99.98% reliability.',
      'Role-based merchant analytics dashboard featuring real-time cohort retention and Gross Merchandise Value (GMV) forecasting.',
    ],
    technologies: ['React.js', 'TypeScript', 'Ruby on Rails', 'PostgreSQL', 'Redis', 'Stripe API'],
    live: 'https://tajemouti.github.io/',
    source: 'https://github.com/tajemouti/nexcart-commerce',
  },
  projects: [
    {
      id: 'modal1',
      category: 'SaaS Observability',
      filterTags: ['saas-cloud', 'real-time'],
      title: 'PulseMetrics — Real-Time Telemetry & APM Cloud',
      image: './default/SVG/projects/project-analytics.svg',
      description:
        'High-frequency infrastructure observability dashboard ingesting 40K+ events/sec with live P99 latency gauges and automated anomaly alerts.',
      modalDescription:
        'PulseMetrics provides engineering teams with zero-lag visibility into microservice health, API throughput, and database query bottlenecks. Built on an event-driven WebSocket pipeline backed by TimescaleDB hypertables, it aggregates millions of telemetry spans into interactive time-series visualizations without browser frame drops.',
      highlights: [
        'Streaming WebSocket ingestion engine handling 42,000+ telemetry events per second with backpressure control.',
        'Custom Canvas/SVG time-series rendering engine maintaining 60fps across 100K+ data points.',
        'Automated P99 latency anomaly detection with instant Slack and PagerDuty webhook escalation.',
      ],
      technologies: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'WebSockets', 'Docker'],
      live: 'https://tajemouti.github.io/',
      source: 'https://github.com/tajemouti/pulsemetrics-apm',
    },
    {
      id: 'modal2',
      category: 'AI Productivity',
      filterTags: ['full-stack'],
      title: 'TaskForge AI — Intelligent Sprint & Workflow Engine',
      image: './default/SVG/projects/project-workflow.svg',
      description:
        'Collaborative agile workspace with LLM-assisted ticket triage, automated sprint velocity forecasting, and offline-first local state sync.',
      modalDescription:
        'TaskForge AI streamlines engineering project management by turning raw product specs into structured, dependency-mapped sprint backlogs. It pairs an optimistic IndexedDB local store with conflict-free state synchronization so distributed teams can drag, triage, and keyboard-navigate boards with zero network latency.',
      highlights: [
        'AI-assisted issue decomposition and story-point estimation powered by structured LLM function calling.',
        'Offline-first architecture with optimistic UI updates and automatic background delta reconciliation.',
        'Full keyboard-first command palette (Cmd+K) and accessible drag-and-drop Kanban board.',
      ],
      technologies: ['React.js', 'TypeScript', 'Ruby on Rails', 'GraphQL', 'PostgreSQL', 'Tailwind'],
      live: 'https://tajemouti.github.io/',
      source: 'https://github.com/tajemouti/taskforge-ai',
    },
    {
      id: 'modal3',
      category: 'Developer Tools',
      filterTags: ['saas-cloud'],
      title: 'DevGate — API Gateway & Interactive OpenAPI Hub',
      image: './default/SVG/projects/project-apihub.svg',
      description:
        'Unified developer portal and edge API gateway featuring distributed token-bucket rate limiting, HMAC webhook signing, and a live REST playground.',
      modalDescription:
        'DevGate bridges API infrastructure and developer experience by combining an edge reverse-proxy gateway with an auto-generated interactive documentation portal. Developers can provision scoped API keys, inspect live webhook delivery payloads, and replay failed requests directly from the browser.',
      highlights: [
        'Distributed Redis token-bucket rate limiter enforcing per-tenant quotas with <2ms overhead.',
        'Interactive OpenAPI 3.1 request builder with live cURL, TypeScript, and Ruby SDK code generation.',
        'Cryptographic HMAC-SHA256 webhook dispatcher with exponential backoff and dead-letter replay queue.',
      ],
      technologies: ['TypeScript', 'Node.js', 'Redis', 'REST API', 'Docker', 'OpenAPI'],
      live: 'https://tajemouti.github.io/',
      source: 'https://github.com/tajemouti/devgate-api-hub',
    },
    {
      id: 'modal4',
      category: 'FinTech Platform',
      filterTags: ['full-stack'],
      title: 'FinFlow — Multi-Currency Treasury & Ledger Suite',
      image: './default/SVG/projects/project-fintech.svg',
      description:
        'Immutable double-entry accounting engine and corporate expense platform with automated FX hedging, virtual cards, and real-time runway forecasting.',
      modalDescription:
        'Designed for global startups managing multi-currency liquidity, FinFlow enforces strict ACID double-entry ledger invariants in PostgreSQL to eliminate reconciliation drift. Finance teams can issue programmable virtual cards, automate invoice approval workflows, and simulate 12-month cash runway under dynamic FX rates.',
      highlights: [
        'Immutable double-entry ledger schema with cryptographic audit trails and zero floating-point rounding errors.',
        'Automated multi-currency FX conversion engine with real-time liquidity pool rebalancing.',
        'Granular role-based access control (RBAC) and RSpec test suite achieving 98.6% domain coverage.',
      ],
      technologies: ['Ruby on Rails', 'React.js', 'PostgreSQL', 'RSpec', 'Redis', 'REST API'],
      live: 'https://tajemouti.github.io/',
      source: 'https://github.com/tajemouti/finflow-treasury',
    },
    {
      id: 'modal5',
      category: 'Real-Time Collab',
      filterTags: ['real-time', 'full-stack'],
      title: 'CodeSync Live — CRDT Multiplayer Cloud IDE',
      image: './default/SVG/projects/project-collab.svg',
      description:
        'Browser-based multiplayer code editor with conflict-free Yjs CRDT synchronization, live peer cursors, and isolated container code execution.',
      modalDescription:
        'CodeSync Live enables technical interviews and distributed pair programming directly in the browser with sub-15ms keystroke propagation. Built on Yjs Conflict-Free Replicated Data Types (CRDTs) over WebRTC and WebSockets, it pairs multi-cursor AST editing with ephemeral, resource-capped Docker execution sandboxes.',
      highlights: [
        'Zero-conflict concurrent editing across 25+ simultaneous peers using Yjs CRDT delta streams.',
        'Ephemeral sandboxed code runner executing JavaScript, TypeScript, and Ruby with strict cgroup memory caps.',
        'Live peer presence indicators, inline AST diagnostics, and integrated low-latency WebRTC audio rooms.',
      ],
      technologies: ['TypeScript', 'React.js', 'WebRTC', 'Node.js', 'Docker', 'WebSockets'],
      live: 'https://tajemouti.github.io/',
      source: 'https://github.com/tajemouti/codesync-live',
    },
    {
      id: 'modal6',
      category: 'Cloud & DevOps',
      filterTags: ['saas-cloud', 'real-time'],
      title: 'CloudOps Mesh — Kubernetes GitOps & Canary Engine',
      image: './default/SVG/projects/project-cloudops.svg',
      description:
        'Visual Kubernetes topology control plane automating progressive canary rollouts, Prometheus SLO gates, and instant one-click rollback recovery.',
      modalDescription:
        'CloudOps Mesh simplifies multi-cluster Kubernetes operations by visualizing live service-mesh traffic topologies alongside automated GitOps deployment pipelines. During releases, it continuously evaluates Prometheus error budgets and P95 latency SLOs to automatically promote or roll back canary pods.',
      highlights: [
        'Interactive service-mesh topology graph rendering live pod health, CPU saturation, and gRPC traffic edges.',
        'Automated canary traffic shifting (10% → 50% → 100%) gated by real-time Prometheus & Grafana SLO queries.',
        'Instant zero-downtime rollback orchestration reducing Mean Time to Recovery (MTTR) by 78%.',
      ],
      technologies: ['React.js', 'TypeScript', 'Docker', 'PostgreSQL', 'CLI', 'REST API'],
      live: 'https://tajemouti.github.io/',
      source: 'https://github.com/tajemouti/cloudops-mesh',
    },
  ],
};

/* ==========================================================================
   1. Render Projects Section & Case-Study Modals
   ========================================================================== */
function renderPortfolio() {
  const workSection = document.getElementById('projects-section');
  const modalsContainer = document.getElementById('modals-container');
  if (!workSection || !modalsContainer) return;

  const { featured, projects, sectionTitle } = cardInfos;

  const featuredTechList = featured.technologies
    .map((tech) => `<li class="lang-list1">${tech}</li>`)
    .join('');

  const filterCategories = [
    { id: 'all', label: 'All', i18nKey: 'filter_all', count: projects.length },
    {
      id: 'full-stack',
      label: 'Full-Stack',
      i18nKey: 'filter_fullstack',
      count: projects.filter((p) => p.filterTags.includes('full-stack')).length,
    },
    {
      id: 'saas-cloud',
      label: 'SaaS & Cloud',
      i18nKey: 'filter_saas',
      count: projects.filter((p) => p.filterTags.includes('saas-cloud')).length,
    },
    {
      id: 'real-time',
      label: 'Real-Time',
      i18nKey: 'filter_realtime',
      count: projects.filter((p) => p.filterTags.includes('real-time')).length,
    },
  ];

  const filterBarHtml = `
    <div class="project-filters reveal" role="toolbar" aria-label="Filter projects by category">
      ${filterCategories
        .map(
          (cat, idx) => `
        <button
          class="filter-pill ${idx === 0 ? 'is-active' : ''}"
          type="button"
          data-filter="${cat.id}"
          aria-pressed="${idx === 0 ? 'true' : 'false'}"
        >
          <span class="filter-pill-label" data-i18n="${cat.i18nKey}">${cat.label}</span>
          <span class="filter-pill-count">${cat.count}</span>
        </button>
      `,
        )
        .join('')}
    </div>
  `;

  const cardsHtml = projects
    .map(
      (project, index) => `
      <article
        class="card reveal"
        data-categories="${project.filterTags.join(' ')}"
        style="--stagger-index: ${index % 3};"
        tabindex="0"
        role="button"
        aria-pressed="false"
        aria-label="${project.title} — click to flip card"
      >
        <div class="card-inner">
          <div class="card-front">
            <img class="card-img" src="${project.image}" alt="${project.title} preview" loading="lazy">
            <div class="right-block2">
              <div class="card-front-meta">
                <span class="card-category-badge">${project.category}</span>
                <span class="card-flip-hint" data-i18n="card_flip_front" aria-hidden="true">Click to flip ↻</span>
              </div>
              <h3 class="right-block2-heading" data-scramble>${project.title}</h3>
              <ul class="lang2" aria-label="Technologies used">
                ${project.technologies.slice(0, 4).map((tech) => `<li class="lang-list2">${tech}</li>`).join('')}
              </ul>
            </div>
          </div>
          <div class="card-back">
            <div class="card-back-content">
              <div class="card-front-meta">
                <span class="featured-badge">${project.category}</span>
                <span class="card-flip-hint" data-i18n="card_flip_back" aria-hidden="true">Click to flip ↺</span>
              </div>
              <h3 class="card-back-heading">${project.title}</h3>
              <p class="card-back-description" data-i18n="proj_${project.id}_desc">${project.description}</p>
              <ul class="lang1" aria-label="Technologies used">
                ${project.technologies.map((tech) => `<li class="lang-list1">${tech}</li>`).join('')}
              </ul>
            </div>
            <button data-modal-target="#${project.id}" class="btn-primary card-back-btn" type="button">
              <span data-i18n="btn_view_case_study">View Case Study</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </article>
    `,
    )
    .join('');

  workSection.innerHTML = `
    <div class="work-section-heading reveal">
      <h2 class="work-section-title heading-reveal">
        <span class="heading-reveal-text" data-i18n="projects_heading">${sectionTitle}</span>
      </h2>
    </div>
    <article class="main-card reveal">
      <div class="main-card-media">
        <img class="img-placeholder" src="${featured.image}" alt="${featured.title} featured screenshot">
      </div>
      <div class="right-block1">
        <span class="featured-badge" data-scramble>${featured.category} • Featured</span>
        <h3 class="right-block1-heading" data-scramble>${featured.title}</h3>
        <p class="right-block1-description" data-i18n="proj_modal0_desc">${featured.description}</p>
        <ul class="lang1" aria-label="Technologies used">
          ${featuredTechList}
        </ul>
        <button class="btn-primary magnetic" data-modal-target="#${featured.id}" type="button">
          <span data-i18n="btn_view_case_study">View Case Study</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
    ${filterBarHtml}
    <div id="cards-grid">
      ${cardsHtml}
    </div>
    <div id="carousel-dots" class="carousel-dots" role="tablist" aria-label="Mobile project carousel pagination"></div>
  `;

  const allModalItems = [featured, ...projects];

  modalsContainer.innerHTML = allModalItems
    .map(
      (item) => `
      <div
        class="modal"
        id="${item.id}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${item.id}-title"
        aria-hidden="true"
      >
        <div class="modal-header">
          <div class="modal-heading">
            <div class="modal-title-group">
              <span class="featured-badge modal-category-badge">${item.category}</span>
              <h3 class="modal-title" id="${item.id}-title">${item.title}</h3>
            </div>
            <button data-close-button class="close-button" type="button" aria-label="Close case study modal">
              <span class="close-icon" aria-hidden="true">×</span>
            </button>
          </div>
          <ul class="languages" aria-label="Project technologies">
            ${item.technologies.map((tech) => `<li class="lang-list1">${tech}</li>`).join('')}
          </ul>
        </div>
        <div class="right-block">
          <div class="snapshot">
            <img class="modal-img" src="${item.image}" alt="${item.title} architecture and UI preview">
          </div>
          <div class="modal-body">
            <div class="modal-copy-group">
              <h4 class="modal-section-label">Architecture &amp; Overview</h4>
              <p class="modal-text">${item.modalDescription}</p>
              <h4 class="modal-section-label">Key Engineering Highlights</h4>
              <ul class="modal-highlights">
                ${item.highlights.map((pt) => `<li class="modal-highlight-item">${pt}</li>`).join('')}
              </ul>
            </div>
            <div class="action">
              <a class="action-button" href="${item.live}" rel="noopener noreferrer" target="_blank">
                <span>Live Demo</span>
                <img src="${cardInfos.icons.live}" alt="" aria-hidden="true">
              </a>
              <a class="btn-secondary modal-source-btn" href="${item.source}" rel="noopener noreferrer" target="_blank">
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `,
    )
    .join('');
}

/* ==========================================================================
   2. Mobile Navigation Drawer
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const closeBtn = document.getElementById('mobile-menu-close');

  if (!menuToggle || !mobileMenu) return;

  const openMenu = () => {
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
    if (closeBtn) closeBtn.focus();
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('is-open');
    if (isOpen) closeMenu();
    else openMenu();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  mobileMenu.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
}

/* ==========================================================================
   3. Project Modal Dialogs
   ========================================================================== */
function initModals() {
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  if (!overlay) return;

  const openModal = (modalEl) => {
    if (!modalEl) return;
    SoundEngine.playChime();
    modalEl.classList.add('active');
    modalEl.setAttribute('aria-hidden', 'false');
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
    const closeBtn = modalEl.querySelector('[data-close-button]');
    if (closeBtn) closeBtn.focus();
  };

  const closeModal = (modalEl) => {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    modalEl.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  const closeAllModals = () => {
    document.querySelectorAll('.modal.active, .terminal-modal.active').forEach((activeModal) => {
      closeModal(activeModal);
    });
  };

  openModalButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const targetModal = document.querySelector(button.dataset.modalTarget);
      openModal(targetModal);
    });
  });

  // Persistent Click-Only Toggle for 3D Flip Project Cards (With Swipe-vs-Tap Guard for Mobile Carousel)
  const flipCards = document.querySelectorAll('.card');
  const toggleCardFlip = (cardEl) => {
    SoundEngine.playFlip();
    const isNowFlipped = cardEl.classList.toggle('is-flipped');
    cardEl.setAttribute('aria-pressed', isNowFlipped ? 'true' : 'false');
    if (typeof AchievementEngine !== 'undefined') {
      AchievementEngine.unlock('card_shark');
    }
  };

  flipCards.forEach((cardEl) => {
    let startX = 0;
    let startY = 0;
    let isSwiping = false;

    cardEl.addEventListener(
      'pointerdown',
      (event) => {
        startX = event.clientX;
        startY = event.clientY;
        isSwiping = false;
      },
      { passive: true },
    );

    cardEl.addEventListener(
      'pointermove',
      (event) => {
        if (Math.abs(event.clientX - startX) > 10 || Math.abs(event.clientY - startY) > 10) {
          isSwiping = true;
        }
      },
      { passive: true },
    );

    cardEl.addEventListener(
      'touchstart',
      (event) => {
        if (event.touches && event.touches[0]) {
          startX = event.touches[0].clientX;
          startY = event.touches[0].clientY;
          isSwiping = false;
        }
      },
      { passive: true },
    );

    cardEl.addEventListener(
      'touchmove',
      (event) => {
        if (event.touches && event.touches[0]) {
          if (
            Math.abs(event.touches[0].clientX - startX) > 10 ||
            Math.abs(event.touches[0].clientY - startY) > 10
          ) {
            isSwiping = true;
          }
        }
      },
      { passive: true },
    );

    cardEl.addEventListener('click', (event) => {
      if (isSwiping) {
        isSwiping = false;
        return;
      }
      if (event.target.closest('[data-modal-target], a, button')) return;
      toggleCardFlip(cardEl);
    });

    cardEl.addEventListener('keydown', (event) => {
      if ((event.key === 'Enter' || event.key === ' ') && event.target === cardEl) {
        event.preventDefault();
        toggleCardFlip(cardEl);
      }
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const parentModal = button.closest('.modal');
      closeModal(parentModal);
    });
  });

  overlay.addEventListener('click', closeAllModals);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllModals();
    }
  });
}

/* ==========================================================================
   3b. Procedural Web Audio Micro-Sound Engine (Zero Audio Files)
   ========================================================================== */
const SoundEngine = {
  ctx: null,
  enabled: localStorage.getItem('portfolioSound') === 'true',

  getContext() {
    if (!this.enabled) return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!this.ctx) {
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  },

  playClick() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(720, now);
    osc.frequency.exponentialRampToValueAtTime(280, now + 0.032);
    gain.gain.setValueAtTime(0.035, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.032);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.035);
  },

  playFlip() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.085);
    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.095);
  },

  playKeyTick() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(980, now);
    osc.frequency.exponentialRampToValueAtTime(420, now + 0.018);
    gain.gain.setValueAtTime(0.014, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.022);
  },

  playChime() {
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    [587.33, 880].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const start = now + idx * 0.055;
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.035, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.14);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.15);
    });
  },
};

/* ==========================================================================
   3c. Multi-Track Procedural Synthwave / Cyberpunk / Chiptune Jukebox (8 Tracks)
   ========================================================================== */
const NOTE_FREQ = {
  R: 0,
  C2: 65.41, Cs2: 69.3, D2: 73.42, Eb2: 77.78, E2: 82.41, F2: 87.31, Fs2: 92.5, G2: 98.0, Gs2: 103.83, A2: 110.0, Bb2: 116.54, B2: 123.47,
  C3: 130.81, Cs3: 138.59, D3: 146.83, Eb3: 155.56, E3: 164.81, F3: 174.61, Fs3: 185.0, G3: 196.0, Gs3: 207.65, A3: 220.0, Bb3: 233.08, B3: 246.94,
  C4: 261.63, Cs4: 277.18, D4: 293.66, Eb4: 311.13, E4: 329.63, F4: 349.23, Fs4: 369.99, G4: 392.0, Ab4: 415.3, Gs4: 415.3, A4: 440.0, Bb4: 466.16, B4: 493.88,
  C5: 523.25, Cs5: 554.37, D5: 587.33, Eb5: 622.25, E5: 659.25, F5: 698.46, Fs5: 739.99, G5: 783.99, Gs5: 830.61, A5: 880.0, Bb5: 932.33, B5: 987.77,
};

const MIDI_TRACKS = [
  {
    id: 1,
    title: 'Neon Commit',
    bpm: 126,
    stepMs: 119,
    wave: 'sawtooth',
    filterHz: 1850,
    drums: 'outrun',
    lead: [
      ['A4', 2], ['E5', 2], ['C5', 2], ['E5', 2], ['G5', 3], ['E5', 1], ['D5', 2], ['C5', 2],
      ['F4', 2], ['C5', 2], ['A4', 2], ['C5', 2], ['E5', 3], ['C5', 1], ['B4', 2], ['G4', 2],
      ['C5', 2], ['G5', 2], ['E5', 2], ['G5', 2], ['A5', 3], ['G5', 1], ['E5', 2], ['D5', 2],
      ['B4', 2], ['E5', 2], ['D5', 2], ['B4', 2], ['C5', 4], ['A4', 4],
    ],
    bass: [
      ['A2', 1], ['A2', 1], ['A3', 1], ['A2', 1], ['A2', 1], ['A2', 1], ['A3', 1], ['A2', 1],
      ['F2', 1], ['F2', 1], ['F3', 1], ['F2', 1], ['F2', 1], ['F2', 1], ['F3', 1], ['F2', 1],
      ['C3', 1], ['C3', 1], ['G3', 1], ['C3', 1], ['C3', 1], ['C3', 1], ['G3', 1], ['C3', 1],
      ['G2', 1], ['G2', 1], ['D3', 1], ['G2', 1], ['G2', 1], ['G2', 1], ['E3', 1], ['G2', 1],
    ],
  },
  {
    id: 2,
    title: 'Cyberpunk Terminal',
    bpm: 130,
    stepMs: 115,
    wave: 'sawtooth',
    filterHz: 1550,
    drums: 'cyber',
    lead: [
      ['D4', 1], ['F4', 1], ['A4', 2], ['D5', 2], ['Cs5', 2], ['D5', 2], ['A4', 2], ['F4', 2], ['E4', 2],
      ['Bb3', 1], ['D4', 1], ['F4', 2], ['Bb4', 2], ['A4', 2], ['G4', 2], ['F4', 2], ['E4', 4],
      ['D4', 1], ['F4', 1], ['A4', 2], ['F5', 2], ['E5', 2], ['D5', 2], ['C5', 2], ['Bb4', 2], ['A4', 2],
      ['G4', 2], ['Bb4', 2], ['A4', 2], ['Cs5', 2], ['D5', 6], ['R', 2],
    ],
    bass: [
      ['D2', 1], ['D2', 1], ['D3', 1], ['D2', 1], ['F2', 1], ['D2', 1], ['A2', 1], ['D2', 1],
      ['Bb2', 1], ['Bb2', 1], ['F3', 1], ['Bb2', 1], ['G2', 1], ['G2', 1], ['D3', 1], ['G2', 1],
      ['D2', 1], ['D2', 1], ['D3', 1], ['D2', 1], ['F2', 1], ['D2', 1], ['A2', 1], ['D2', 1],
      ['G2', 1], ['G2', 1], ['Bb2', 1], ['G2', 1], ['A2', 1], ['A2', 1], ['Cs3', 1], ['A2', 1],
    ],
  },
  {
    id: 3,
    title: '8-Bit Overdrive',
    bpm: 138,
    stepMs: 109,
    wave: 'square',
    filterHz: 2400,
    drums: 'arcade',
    lead: [
      ['E5', 1], ['B4', 1], ['C5', 1], ['D5', 2], ['C5', 1], ['B4', 1], ['A4', 2], ['A4', 1], ['C5', 1], ['E5', 2], ['D5', 1], ['C5', 1],
      ['B4', 2], ['C5', 1], ['D5', 2], ['E5', 2], ['C5', 2], ['A4', 2], ['A4', 4], ['R', 1],
      ['D5', 2], ['F5', 1], ['A5', 2], ['G5', 1], ['F5', 1], ['E5', 3], ['C5', 1], ['E5', 2], ['D5', 1], ['C5', 1],
      ['B4', 2], ['B4', 1], ['C5', 1], ['D5', 2], ['E5', 2], ['C5', 2], ['A4', 2], ['A4', 2],
    ],
    bass: [
      ['E2', 2], ['E3', 2], ['E2', 2], ['E3', 2], ['A2', 2], ['A3', 2], ['A2', 2], ['A3', 2],
      ['Gs2', 2], ['E3', 2], ['E2', 2], ['E3', 2], ['A2', 2], ['E3', 2], ['A2', 2], ['E2', 2],
      ['D3', 2], ['A3', 2], ['D3', 2], ['F3', 2], ['C3', 2], ['G3', 2], ['C3', 2], ['E3', 2],
      ['B2', 2], ['E3', 2], ['Gs2', 2], ['E3', 2], ['A2', 2], ['E3', 2], ['A2', 4],
    ],
  },
  {
    id: 4,
    title: 'Midnight Deploy',
    bpm: 120,
    stepMs: 125,
    wave: 'triangle',
    filterHz: 1950,
    drums: 'outrun',
    lead: [
      ['Fs4', 2], ['A4', 2], ['Cs5', 2], ['E5', 4], ['Cs5', 2], ['B4', 2], ['A4', 2],
      ['D4', 2], ['Fs4', 2], ['A4', 2], ['Cs5', 4], ['B4', 2], ['A4', 2], ['Gs4', 2],
      ['E4', 2], ['Gs4', 2], ['B4', 2], ['D5', 4], ['Cs5', 2], ['B4', 2], ['A4', 2],
      ['Fs4', 2], ['A4', 2], ['B4', 2], ['Cs5', 4], ['Fs5', 4], ['R', 2],
    ],
    bass: [
      ['Fs2', 2], ['Fs3', 1], ['Fs2', 1], ['Fs2', 2], ['Fs3', 1], ['E3', 1],
      ['D2', 2], ['D3', 1], ['D2', 1], ['D2', 2], ['D3', 1], ['A2', 1],
      ['A2', 2], ['E3', 1], ['A2', 1], ['A2', 2], ['E3', 1], ['Cs3', 1],
      ['E2', 2], ['B2', 1], ['E2', 1], ['E2', 2], ['Gs2', 1], ['B2', 1],
    ],
  },
  {
    id: 5,
    title: 'Packet Rush',
    bpm: 128,
    stepMs: 117,
    wave: 'sawtooth',
    filterHz: 1750,
    drums: 'tech',
    lead: [
      ['C5', 1], ['Eb5', 1], ['G4', 1], ['C5', 1], ['F5', 2], ['Eb5', 1], ['D5', 1], ['C5', 1], ['Bb4', 1], ['G4', 2], ['Bb4', 2], ['C5', 2],
      ['Ab4', 1], ['C5', 1], ['Eb5', 1], ['Ab4', 1], ['G5', 2], ['F5', 1], ['Eb5', 1], ['D5', 2], ['Bb4', 2], ['G4', 4],
      ['C5', 1], ['Eb5', 1], ['G5', 2], ['Ab5', 2], ['G5', 2], ['F5', 1], ['Eb5', 1], ['D5', 2], ['C5', 2], ['Bb4', 2],
      ['Ab4', 2], ['Bb4', 2], ['C5', 2], ['D5', 2], ['C5', 6], ['R', 2],
    ],
    bass: [
      ['C2', 1], ['C3', 1], ['C2', 1], ['C3', 1], ['C2', 1], ['C3', 1], ['Eb2', 1], ['G2', 1],
      ['Gs2', 1], ['Eb3', 1], ['Gs2', 1], ['Eb3', 1], ['Bb2', 1], ['F3', 1], ['G2', 1], ['D3', 1],
      ['C2', 1], ['C3', 1], ['C2', 1], ['C3', 1], ['C2', 1], ['C3', 1], ['Eb2', 1], ['G2', 1],
      ['F2', 1], ['C3', 1], ['G2', 1], ['D3', 1], ['C2', 2], ['G2', 2],
    ],
  },
  {
    id: 6,
    title: 'Silicon Horizon',
    bpm: 124,
    stepMs: 121,
    wave: 'sawtooth',
    filterHz: 2050,
    drums: 'outrun',
    lead: [
      ['E4', 2], ['Fs4', 2], ['G4', 2], ['B4', 4], ['A4', 2], ['G4', 2], ['Fs4', 2],
      ['D4', 2], ['E4', 2], ['Fs4', 2], ['A4', 4], ['G4', 2], ['Fs4', 2], ['E4', 2],
      ['C4', 2], ['E4', 2], ['G4', 2], ['B4', 2], ['D5', 4], ['B4', 2], ['G4', 2],
      ['A4', 2], ['B4', 2], ['C5', 2], ['D5', 2], ['E5', 6], ['R', 2],
    ],
    bass: [
      ['E2', 1], ['E2', 1], ['B2', 1], ['E2', 1], ['E2', 1], ['E2', 1], ['B2', 1], ['E2', 1],
      ['D2', 1], ['D2', 1], ['A2', 1], ['D2', 1], ['D2', 1], ['D2', 1], ['A2', 1], ['D2', 1],
      ['C2', 1], ['C2', 1], ['G2', 1], ['C2', 1], ['C2', 1], ['C2', 1], ['G2', 1], ['C2', 1],
      ['D2', 1], ['D2', 1], ['A2', 1], ['D2', 1], ['B2', 1], ['B2', 1], ['Fs3', 1], ['B2', 1],
    ],
  },
  {
    id: 7,
    title: 'Stack Overflow',
    bpm: 134,
    stepMs: 112,
    wave: 'square',
    filterHz: 2250,
    drums: 'arcade',
    lead: [
      ['G4', 1], ['B4', 1], ['D5', 1], ['G5', 2], ['Fs5', 1], ['E5', 1], ['D5', 1], ['B4', 2], ['G4', 2], ['A4', 2], ['B4', 2],
      ['C5', 1], ['E5', 1], ['G5', 2], ['Fs5', 2], ['D5', 2], ['B4', 1], ['D5', 1], ['G5', 4], ['R', 2],
      ['E5', 1], ['D5', 1], ['C5', 1], ['B4', 1], ['A4', 2], ['E5', 2], ['D5', 1], ['C5', 1], ['B4', 1], ['A4', 1], ['G4', 2], ['D5', 2],
      ['C5', 2], ['B4', 2], ['A4', 2], ['Fs4', 2], ['G4', 6], ['R', 2],
    ],
    bass: [
      ['G2', 2], ['D3', 2], ['G2', 2], ['D3', 2], ['E2', 2], ['B2', 2], ['E2', 2], ['B2', 2],
      ['C3', 2], ['G3', 2], ['D3', 2], ['A3', 2], ['G2', 2], ['D3', 2], ['G2', 4],
      ['C3', 2], ['G3', 2], ['A2', 2], ['E3', 2], ['B2', 2], ['Fs3', 2], ['E2', 2], ['B2', 2],
      ['C3', 2], ['G2', 2], ['D3', 2], ['D2', 2], ['G2', 4], ['D3', 4],
    ],
  },
  {
    id: 8,
    title: 'Zero Latency',
    bpm: 132,
    stepMs: 114,
    wave: 'sawtooth',
    filterHz: 1900,
    drums: 'tech',
    lead: [
      ['A4', 1], ['C5', 1], ['E5', 1], ['A5', 2], ['G5', 1], ['E5', 1], ['C5', 1], ['D5', 1], ['F5', 1], ['A5', 2], ['G5', 2], ['E5', 2],
      ['G4', 1], ['B4', 1], ['D5', 1], ['G5', 2], ['F5', 1], ['D5', 1], ['B4', 1], ['C5', 2], ['E5', 2], ['A4', 4],
      ['F4', 1], ['A4', 1], ['C5', 1], ['F5', 2], ['E5', 1], ['C5', 1], ['A4', 1], ['G4', 1], ['B4', 1], ['D5', 2], ['G5', 2], ['B5', 2],
      ['A5', 2], ['G5', 2], ['E5', 2], ['C5', 2], ['A4', 6], ['R', 2],
    ],
    bass: [
      ['A2', 1], ['E3', 1], ['A2', 1], ['E3', 1], ['D2', 1], ['A2', 1], ['D2', 1], ['A2', 1],
      ['G2', 1], ['D3', 1], ['G2', 1], ['D3', 1], ['C2', 1], ['G2', 1], ['E2', 1], ['B2', 1],
      ['F2', 1], ['C3', 1], ['F2', 1], ['C3', 1], ['G2', 1], ['D3', 1], ['G2', 1], ['D3', 1],
      ['A2', 1], ['E3', 1], ['A2', 1], ['C3', 1], ['A2', 2], ['E2', 2],
    ],
  },
];

const MusicEngine = {
  ctx: null,
  masterGain: null,
  noiseBuffer: null,
  isPlaying: false,
  wasPlayingBeforeHide: false,
  stepTimer: null,
  currentTrackIndex: 0,
  stepCount: 0,
  leadNoteIdx: 0,
  leadTicksLeft: 0,
  bassNoteIdx: 0,
  bassTicksLeft: 0,

  getCurrentTrack() {
    return MIDI_TRACKS[this.currentTrackIndex] || MIDI_TRACKS[0];
  },

  ensureContext() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!this.ctx) {
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Generate reusable white-noise buffer for crisp synth hi-hats & snares
      const bufSize = this.ctx.sampleRate * 0.15;
      this.noiseBuffer = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
      const data = this.noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufSize; i += 1) {
        data[i] = Math.random() * 2 - 1;
      }
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  },

  triggerKick() {
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(135, now);
    osc.frequency.exponentialRampToValueAtTime(38, now + 0.11);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.14);
  },

  triggerHat(isAccent = false) {
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain || !this.noiseBuffer) return;
    const now = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = isAccent ? 'bandpass' : 'highpass';
    filter.frequency.setValueAtTime(isAccent ? 2400 : 6800, now);

    const gain = ctx.createGain();
    const dur = isAccent ? 0.085 : 0.038;
    gain.gain.setValueAtTime(isAccent ? 0.055 : 0.028, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    src.start(now);
    src.stop(now + dur + 0.01);
  },

  triggerVoice(freq, durationSec, waveType, filterHz, peakGain) {
    if (!freq || freq <= 0) return;
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc.type = waveType || 'sawtooth';
    osc.frequency.setValueAtTime(freq, now);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(filterHz || 1750, now);
    filter.frequency.exponentialRampToValueAtTime(Math.max(280, (filterHz || 1750) * 0.38), now + durationSec);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(peakGain, now + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.001, now + durationSec * 0.92);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + durationSec);
  },

  scheduleTick() {
    if (!this.isPlaying || document.hidden) return;
    const track = this.getCurrentTrack();
    const stepSec = (track.stepMs || 120) / 1000;
    const step16 = this.stepCount % 16;

    // 1. Procedural Synth Percussion (Kick on 0, 4, 8, 12; Snare/Clap on 4, 12; Off-beat Hi-Hat on 2, 6, 10, 14)
    if (step16 % 4 === 0) {
      this.triggerKick();
    }
    if (step16 === 4 || step16 === 12) {
      this.triggerHat(true);
    } else if (step16 % 2 === 1 || step16 % 4 === 2) {
      this.triggerHat(false);
    }

    // 2. Lead Synth Voice Sequencer
    if (this.leadTicksLeft <= 0) {
      const [noteName, ticks] = track.lead[this.leadNoteIdx % track.lead.length];
      const freq = NOTE_FREQ[noteName] || 0;
      this.triggerVoice(freq, ticks * stepSec, track.wave, track.filterHz, 0.082);
      this.leadTicksLeft = ticks;
      this.leadNoteIdx = (this.leadNoteIdx + 1) % track.lead.length;
    }
    this.leadTicksLeft -= 1;

    // 3. Driving Bassline Sequencer
    if (this.bassTicksLeft <= 0) {
      const [bNote, bTicks] = track.bass[this.bassNoteIdx % track.bass.length];
      const bFreq = NOTE_FREQ[bNote] || 0;
      this.triggerVoice(bFreq, bTicks * stepSec, 'sawtooth', 680, 0.105);
      this.bassTicksLeft = bTicks;
      this.bassNoteIdx = (this.bassNoteIdx + 1) % track.bass.length;
    }
    this.bassTicksLeft -= 1;

    this.stepCount = (this.stepCount + 1) % 64;
  },

  resetCounters() {
    this.stepCount = 0;
    this.leadNoteIdx = 0;
    this.leadTicksLeft = 0;
    this.bassNoteIdx = 0;
    this.bassTicksLeft = 0;
  },

  start() {
    const ctx = this.ensureContext();
    if (!ctx || !this.masterGain) return false;
    if (this.stepTimer) {
      clearInterval(this.stepTimer);
      this.stepTimer = null;
    }
    this.isPlaying = true;
    const track = this.getCurrentTrack();
    const now = ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.linearRampToValueAtTime(0.55, now + 0.35);

    this.scheduleTick();
    this.stepTimer = setInterval(() => this.scheduleTick(), track.stepMs || 130);
    return true;
  },

  stop() {
    if (!this.isPlaying && !this.stepTimer) return false;
    this.isPlaying = false;
    if (this.stepTimer) {
      clearInterval(this.stepTimer);
      this.stepTimer = null;
    }
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(Math.max(0.001, this.masterGain.gain.value), now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    }
    return false;
  },

  selectTrack(index, autoPlay = true) {
    const safeIdx = ((index % MIDI_TRACKS.length) + MIDI_TRACKS.length) % MIDI_TRACKS.length;
    this.currentTrackIndex = safeIdx;
    this.resetCounters();
    if (autoPlay) {
      this.start();
    } else if (this.isPlaying) {
      this.start();
    }
    return this.getCurrentTrack();
  },

  nextTrack() {
    return this.selectTrack(this.currentTrackIndex + 1, true);
  },

  prevTrack() {
    return this.selectTrack(this.currentTrackIndex - 1, true);
  },

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    }
    return this.start();
  },
};

/* ==========================================================================
   3d. Gamified Achievements / Secret Hunter Engine (6 Curated Secrets)
   ========================================================================== */
const ACHIEVEMENTS_CATALOG = [
  {
    id: 'card_shark',
    title: 'Card Shark',
    desc: 'Flipped a 3D interactive project card',
  },
  {
    id: 'chameleon',
    title: 'Chameleon',
    desc: 'Switched the live site-wide Accent Color palette',
  },
  {
    id: 'synthwave_dj',
    title: 'Synthwave DJ',
    desc: 'Played a procedural Synthwave / Chiptune Jukebox track',
  },
  {
    id: 'code_architect',
    title: 'Code Architect',
    desc: 'Activated CAD Blueprint / X-Ray Wireframe Mode',
  },
  {
    id: 'shell_explorer',
    title: 'Shell Explorer',
    desc: 'Opened the AjrassOS interactive mini-terminal (>_)',
  },
  {
    id: 'chosen_one',
    title: 'The Chosen One',
    desc: 'Triggered matrix, party, snake, or sudo hire ajrass',
  },
];

const AchievementEngine = {
  storageKey: 'portfolioAchievements',
  unlocked: [],
  toastTimer: null,
  onAllUnlockedCallback: null,

  init() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      const parsed = raw ? JSON.parse(raw) : [];
      this.unlocked = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      this.unlocked = [];
    }
  },

  isUnlocked(id) {
    return this.unlocked.includes(id);
  },

  unlock(id) {
    if (this.isUnlocked(id)) return false;
    const item = ACHIEVEMENTS_CATALOG.find((a) => a.id === id);
    if (!item) return false;

    this.unlocked.push(id);
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.unlocked));
    } catch (e) {
      // Ignore storage quota errors
    }

    SoundEngine.playChime();
    const total = ACHIEVEMENTS_CATALOG.length;
    const count = this.unlocked.length;

    if (count === total) {
      this.showBanner(
        `100% Explorer! • ${count}/${total} Secrets Found`,
        `🏆 All Secrets Unlocked (${item.title})`,
      );
      if (typeof this.onAllUnlockedCallback === 'function') {
        this.onAllUnlockedCallback();
      }
    } else {
      this.showBanner(
        `Achievement Unlocked • ${count}/${total} Secrets`,
        `${item.title} — ${item.desc}`,
      );
    }
    return true;
  },

  showBanner(eyebrowText, titleText) {
    const toast = document.getElementById('achievement-toast');
    const eyebrow = document.getElementById('achievement-toast-eyebrow');
    const title = document.getElementById('achievement-toast-title');
    if (!toast) return;
    if (eyebrow) eyebrow.textContent = eyebrowText;
    if (title) title.textContent = titleText;

    toast.classList.add('is-visible');
    toast.setAttribute('aria-hidden', 'false');
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
      toast.setAttribute('aria-hidden', 'true');
    }, 3400);
  },

  formatChecklist() {
    const count = this.unlocked.length;
    const total = ACHIEVEMENTS_CATALOG.length;
    const rows = ACHIEVEMENTS_CATALOG.map((a) => {
      const done = this.isUnlocked(a.id);
      return `  ${done ? '🏆 [UNLOCKED]' : '🔒 [LOCKED]  '} ${a.title.padEnd(16, ' ')} — ${a.desc}`;
    }).join('\n');
    return `Secret Hunter Trophy Progress (${count}/${total} Unlocked):\n${rows}`;
  },
};
AchievementEngine.init();

/* ==========================================================================
   4. Dark / Light Theme, Accent Palettes & Theme-Reactive SVG Favicon
   ========================================================================== */
const ACCENT_PALETTES = {
  orange: { hex: '#ff6b00', rgb: '255, 130, 40', dotDark: 'rgba(255, 152, 56, 0.68)', dotLight: 'rgba(230, 92, 0, 0.55)' },
  cyan: { hex: '#06b6d4', rgb: '6, 182, 212', dotDark: 'rgba(34, 211, 238, 0.68)', dotLight: 'rgba(8, 145, 178, 0.55)' },
  emerald: { hex: '#10b981', rgb: '16, 185, 129', dotDark: 'rgba(52, 211, 153, 0.68)', dotLight: 'rgba(5, 150, 105, 0.55)' },
  violet: { hex: '#8b5cf6', rgb: '139, 92, 246', dotDark: 'rgba(167, 139, 250, 0.68)', dotLight: 'rgba(124, 58, 237, 0.55)' },
};

function updateThemeFavicon(theme, accentKey) {
  const faviconEl = document.getElementById('dynamic-favicon');
  const metaThemeEl = document.getElementById('meta-theme-color');
  const activeTheme = theme || document.documentElement.getAttribute('data-theme') || 'light';
  const activeAccent = accentKey || document.documentElement.getAttribute('data-accent') || 'orange';
  const palette = ACCENT_PALETTES[activeAccent] || ACCENT_PALETTES.orange;
  if (metaThemeEl) {
    metaThemeEl.setAttribute('content', activeTheme === 'dark' ? '#121110' : palette.hex);
  }
  if (!faviconEl) return;
  const encodedHex = palette.hex.replace('#', '%23');
  const bg = activeTheme === 'dark' ? '%23161514' : encodedHex;
  const stroke = activeTheme === 'dark' ? encodedHex : '%23ffffff';
  const textFill = activeTheme === 'dark' ? encodedHex : '%23ffffff';
  const svgUri = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='${bg}' stroke='${stroke}' stroke-width='3'/%3E%3Ctext x='32' y='44' font-family='sans-serif' font-size='36' font-weight='800' fill='${textFill}' text-anchor='middle'%3EA%3C/text%3E%3C/svg%3E`;
  faviconEl.setAttribute('href', svgUri);
}

function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  const mobileThemeBtn = document.getElementById('mobile-theme-toggle');
  const mobileThemeText = document.getElementById('mobile-theme-text');
  const rootEl = document.documentElement;
  const savedTheme = localStorage.getItem('portfolioTheme');

  const updateThemeUI = (theme) => {
    rootEl.setAttribute('data-theme', theme);
    if (mobileThemeText) {
      mobileThemeText.textContent = theme === 'dark' ? 'Dark' : 'Light';
    }
    updateThemeFavicon(theme);
  };

  if (savedTheme === 'dark' || savedTheme === 'light') {
    updateThemeUI(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    updateThemeUI('dark');
  } else {
    updateThemeUI(rootEl.getAttribute('data-theme') || 'light');
  }

  const toggleTheme = () => {
    const current = rootEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    SoundEngine.playClick();
    updateThemeUI(next);
    localStorage.setItem('portfolioTheme', next);
    return next;
  };

  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);
}

/* ==========================================================================
   5. Scroll-Spy Active Navigation, Exact Anchor Scroll & Ambient Spotlight
   ========================================================================== */
function initScrollEffects() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-drawer-link');
  const headerEl = document.querySelector('.site-header');

  // Exact subpixel anchor scroll alignment so previous sections never peek under sticky header
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();
      const headerOffset = headerEl ? headerEl.getBoundingClientRect().height : 72;
      const targetTop = Math.round(
        targetEl.getBoundingClientRect().top + window.scrollY - headerOffset,
      );

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth',
      });

      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', targetId);
      }
    });
  });

  // Top reading progress bar, Back-to-Top SVG Ring & Kinetic Hero Scroll Parallax (60fps rAF)
  const progressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');
  const backToTopProgress = document.getElementById('back-to-top-progress');
  const ringCircumference = 119.38;
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    });
  }

  let scrollTicking = false;
  const updateScrollFrame = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;

    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress.toFixed(4)})`;
    }

    if (backToTopBtn) {
      backToTopBtn.classList.toggle('is-visible', scrollTop > 350);
    }

    if (backToTopProgress) {
      const dashOffset = ringCircumference * (1 - progress);
      backToTopProgress.style.strokeDashoffset = dashOffset.toFixed(2);
    }

    if (!prefersReducedMotion && scrollTop <= window.innerHeight * 1.2) {
      const textOffset = (scrollTop * 0.14).toFixed(1);
      const artOffset = (scrollTop * -0.18).toFixed(1);
      document.documentElement.style.setProperty('--parallax-text', `${textOffset}px`);
      document.documentElement.style.setProperty('--parallax-art', `${artOffset}px`);
    }

    scrollTicking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!scrollTicking) {
        scrollTicking = true;
        window.requestAnimationFrame(updateScrollFrame);
      }
    },
    { passive: true },
  );
  updateScrollFrame();

  // Tactile Click Ripples on All Primary/Secondary Buttons
  if (!prefersReducedMotion) {
    document.querySelectorAll('.btn, .btn-primary, .btn-secondary, .action-button').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement('span');
        ripple.className = 'btn-ripple';
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 580);
      });
    });
  }

  // Developer Text Scramble / Decode Effect
  const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>[]{}#*+';
  const triggerScramble = (el, durationMs = 340) => {
    if (!el || prefersReducedMotion || el.dataset.isScrambling === 'true') return;
    const originalText = el.dataset.originalText || el.textContent.trim();
    el.dataset.originalText = originalText;
    el.dataset.isScrambling = 'true';

    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const revealCount = Math.floor(progress * originalText.length);

      let output = '';
      for (let i = 0; i < originalText.length; i += 1) {
        const ch = originalText[i];
        if (ch === ' ') {
          output += ' ';
        } else if (i < revealCount) {
          output += ch;
        } else {
          output += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
      }
      el.textContent = output;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = originalText;
        el.dataset.isScrambling = 'false';
      }
    };

    window.requestAnimationFrame(step);
  };

  if (!prefersReducedMotion) {
    document.querySelectorAll('[data-scramble]').forEach((el) => {
      el.dataset.originalText = el.textContent.trim();
      el.addEventListener('mouseenter', () => triggerScramble(el, 320));
    });

    const roleSubtitle = document.getElementById('hero-role-text');
    if (roleSubtitle) {
      setTimeout(() => triggerScramble(roleSubtitle, 580), 420);
    }
  }

  // Desktop cursor-reactive ambient spotlight, custom cursor ring, 3D card tilt & magnetic hover
  if (!prefersReducedMotion && hasFinePointer) {
    const cursorRing = document.getElementById('cursor-ring');
    let rafPending = false;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let cursorLoopActive = false;

    const animateCursorRing = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;
      if (cursorRing) {
        cursorRing.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0)`;
      }
      if (Math.abs(mouseX - ringX) > 0.15 || Math.abs(mouseY - ringY) > 0.15) {
        window.requestAnimationFrame(animateCursorRing);
      } else {
        cursorLoopActive = false;
      }
    };

    window.addEventListener(
      'mousemove',
      (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        if (cursorRing && !cursorRing.classList.contains('is-active')) {
          cursorRing.classList.add('is-active');
        }

        if (!cursorLoopActive && cursorRing) {
          cursorLoopActive = true;
          window.requestAnimationFrame(animateCursorRing);
        }

        if (!rafPending) {
          rafPending = true;
          window.requestAnimationFrame(() => {
            document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);
            rafPending = false;
          });
        }
      },
      { passive: true },
    );

    if (cursorRing) {
      window.addEventListener('mousedown', () => cursorRing.classList.add('is-pressed'));
      window.addEventListener('mouseup', () => cursorRing.classList.remove('is-pressed'));

      document.querySelectorAll('a, button, input, textarea').forEach((interactiveEl) => {
        interactiveEl.addEventListener('mouseenter', () => {
          cursorRing.classList.add('is-hover-interactive');
        });
        interactiveEl.addEventListener('mouseleave', () => {
          cursorRing.classList.remove('is-hover-interactive');
        });
      });

      document.querySelectorAll('.main-card, .card').forEach((cardEl) => {
        cardEl.addEventListener('mouseenter', () => {
          cursorRing.classList.add('is-hover-card');
        });
        cardEl.addEventListener('mouseleave', () => {
          cursorRing.classList.remove('is-hover-card');
        });
      });
    }

    // 3D Perspective Tilt + Interactive Card Sheen on .main-card and .skill-card (excluding 3D flip .card)
    document.querySelectorAll('.main-card, .skill-card').forEach((cardEl) => {
      const maxTiltDeg = cardEl.classList.contains('main-card') ? 3.5 : 6;

      cardEl.addEventListener(
        'mousemove',
        (event) => {
          const rect = cardEl.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const normX = x / rect.width - 0.5;
          const normY = y / rect.height - 0.5;
          const rotateX = (normY * -maxTiltDeg * 2).toFixed(2);
          const rotateY = (normX * maxTiltDeg * 2).toFixed(2);

          cardEl.classList.add('is-tilting');
          cardEl.style.setProperty('--card-x', `${x}px`);
          cardEl.style.setProperty('--card-y', `${y}px`);
          cardEl.style.transform = `perspective(1000px) translateY(-6px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        },
        { passive: true },
      );

      cardEl.addEventListener('mouseleave', () => {
        cardEl.classList.remove('is-tilting');
        cardEl.style.transform = '';
      });
    });

    // Subtle Damped Magnetic Hover on CTAs & Floating Social Icons
    document.querySelectorAll('.magnetic, .floating-social .link').forEach((el) => {
      el.addEventListener(
        'mousemove',
        (event) => {
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = ((event.clientX - centerX) / (rect.width / 2)) * 5;
          const deltaY = ((event.clientY - centerY) / (rect.height / 2)) * 5;
          el.style.transform = `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0)`;
        },
        { passive: true },
      );

      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = `#${entry.target.id}`;
            navLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === activeId);
            });
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    const footerEl = document.querySelector('.site-footer');
    const floatingSocial = document.getElementById('floating-social');
    if (footerEl && floatingSocial) {
      const footerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            floatingSocial.classList.toggle('is-hidden', entry.isIntersecting);
          });
        },
        { threshold: 0.1 },
      );
      footerObserver.observe(footerEl);
    }
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }
}

/* ==========================================================================
   6. Contact Form Validation, In-Page AJAX Submission & LocalStorage Drafts
   ========================================================================== */
let globalToastTimer = null;
function showPortfolioToast(msg, durationMs = 2800) {
  const toastEl = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  if (!toastEl) return;
  if (toastMsg) toastMsg.textContent = msg;
  toastEl.classList.add('is-visible');
  toastEl.setAttribute('aria-hidden', 'false');
  if (globalToastTimer) clearTimeout(globalToastTimer);
  globalToastTimer = setTimeout(() => {
    toastEl.classList.remove('is-visible');
    toastEl.setAttribute('aria-hidden', 'true');
  }, durationMs);
}

function initContactForm() {
  const form = document.getElementById('form');
  const fullNameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('form-submit-btn') || (form ? form.querySelector('button[type="submit"]') : null);
  const errorMsg = form ? form.querySelector('.errText') : null;
  const successBanner = document.getElementById('form-success-banner');

  if (!form || !fullNameInput || !emailInput || !messageInput || !errorMsg) return;

  const getActiveDict = () => {
    const lang = document.documentElement.getAttribute('lang') === 'fr' ? 'fr' : 'en';
    return TRANSLATIONS[lang] || TRANSLATIONS.en;
  };

  const saveFormData = () => {
    const formData = {
      name: fullNameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  const restoreFormData = () => {
    const savedData = localStorage.getItem('formData');
    if (!savedData) return;
    try {
      const formData = JSON.parse(savedData);
      fullNameInput.value = formData.name || '';
      emailInput.value = formData.email || '';
      messageInput.value = formData.message || '';
    } catch (e) {
      localStorage.removeItem('formData');
    }
  };

  const hideFeedbackBanners = () => {
    if (errorMsg.classList.contains('visible')) {
      errorMsg.classList.remove('visible');
      errorMsg.textContent = '';
    }
    if (successBanner && successBanner.classList.contains('visible')) {
      successBanner.classList.remove('visible');
      successBanner.setAttribute('aria-hidden', 'true');
      successBanner.textContent = '';
    }
  };

  [fullNameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener('input', () => {
      hideFeedbackBanners();
      saveFormData();
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const dict = getActiveDict();
    const emailVal = emailInput.value.trim();

    hideFeedbackBanners();

    if (!fullNameInput.value.trim() || !emailVal || !messageInput.value.trim()) {
      errorMsg.textContent = dict.form_error_required;
      errorMsg.classList.add('visible');
      return;
    }

    if (emailVal !== emailVal.toLowerCase()) {
      errorMsg.textContent = dict.form_error_lowercase;
      errorMsg.classList.add('visible');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('is-loading');
      submitBtn.textContent = dict.form_sending_btn;
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        SoundEngine.playChime();
        showPortfolioToast(dict.form_success_toast, 3800);
        if (successBanner) {
          successBanner.textContent = dict.form_success_toast;
          successBanner.classList.add('visible');
          successBanner.setAttribute('aria-hidden', 'false');
        }
        form.reset();
        localStorage.removeItem('formData');
      } else {
        let serverErr = dict.form_error_network;
        try {
          const errJson = await response.json();
          if (errJson && Array.isArray(errJson.errors) && errJson.errors.length > 0) {
            serverErr = errJson.errors.map((item) => item.message).join(', ');
          }
        } catch (parseErr) {
          // Keep default friendly network error message
        }
        errorMsg.textContent = serverErr;
        errorMsg.classList.add('visible');
        showPortfolioToast(dict.form_error_network, 3400);
      }
    } catch (networkErr) {
      errorMsg.textContent = dict.form_error_network;
      errorMsg.classList.add('visible');
      showPortfolioToast(dict.form_error_network, 3400);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('is-loading');
        submitBtn.textContent = getActiveDict().form_submit_btn;
      }
    }
  });

  restoreFormData();
}

/* ==========================================================================
   7. Hero Micro-Particle Canvas, Border-Beam, Copy-Email, Filters & Live Clock
   ========================================================================== */
function initVisualBrilliance() {
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 0a. Interactive Project Category Filter Pills + Mobile Horizontal Auto-Carousel
  const filterBtns = document.querySelectorAll('.filter-pill');
  const cardsGrid = document.getElementById('cards-grid');
  const projectCards = document.querySelectorAll('#cards-grid .card');
  const carouselDotsContainer = document.getElementById('carousel-dots');
  const projectsSection = document.getElementById('projects-section');

  let activeSlideIndex = 0;
  let isProjectsInView = true;
  let userPauseUntil = 0;

  const getVisibleCards = () =>
    Array.from(projectCards).filter((c) => !c.classList.contains('is-filtered-out'));

  const scrollToSlide = (targetIdx, smooth = true) => {
    if (!cardsGrid || window.innerWidth >= 768) return;
    const visibleCards = getVisibleCards();
    if (visibleCards.length === 0) return;

    const safeIdx = ((targetIdx % visibleCards.length) + visibleCards.length) % visibleCards.length;
    activeSlideIndex = safeIdx;
    const targetCard = visibleCards[safeIdx];
    const targetLeft =
      targetCard.offsetLeft - (cardsGrid.clientWidth - targetCard.clientWidth) / 2;

    cardsGrid.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: smooth && !prefersReducedMotion ? 'smooth' : 'auto',
    });

    if (carouselDotsContainer) {
      carouselDotsContainer.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
        const isCurrent = idx === safeIdx;
        dot.classList.toggle('is-active', isCurrent);
        dot.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
      });
    }
  };

  const renderCarouselDots = () => {
    if (!carouselDotsContainer) return;
    const visibleCards = getVisibleCards();
    activeSlideIndex = 0;
    carouselDotsContainer.innerHTML = visibleCards
      .map(
        (_, idx) => `
        <button
          class="carousel-dot ${idx === 0 ? 'is-active' : ''}"
          type="button"
          role="tab"
          aria-selected="${idx === 0 ? 'true' : 'false'}"
          aria-label="Go to project slide ${idx + 1}"
          data-slide-idx="${idx}"
        ></button>
      `,
      )
      .join('');

    carouselDotsContainer.querySelectorAll('.carousel-dot').forEach((dot) => {
      dot.addEventListener('click', () => {
        userPauseUntil = Date.now() + 8000;
        const idx = Number(dot.dataset.slideIdx || 0);
        scrollToSlide(idx, true);
      });
    });
  };

  renderCarouselDots();

  if (cardsGrid) {
    let scrollSyncTick = false;
    cardsGrid.addEventListener(
      'scroll',
      () => {
        if (scrollSyncTick || window.innerWidth >= 768) return;
        scrollSyncTick = true;
        window.requestAnimationFrame(() => {
          const visibleCards = getVisibleCards();
          if (visibleCards.length > 0 && carouselDotsContainer) {
            const gridCenter = cardsGrid.scrollLeft + cardsGrid.clientWidth / 2;
            let closestIdx = 0;
            let minDiff = Infinity;
            visibleCards.forEach((card, idx) => {
              const cardCenter = card.offsetLeft + card.clientWidth / 2;
              const diff = Math.abs(gridCenter - cardCenter);
              if (diff < minDiff) {
                minDiff = diff;
                closestIdx = idx;
              }
            });
            activeSlideIndex = closestIdx;
            carouselDotsContainer.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
              const isCurrent = idx === closestIdx;
              dot.classList.toggle('is-active', isCurrent);
              dot.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
            });
          }
          scrollSyncTick = false;
        });
      },
      { passive: true },
    );

    ['touchstart', 'touchmove', 'pointerdown', 'wheel'].forEach((evtName) => {
      cardsGrid.addEventListener(
        evtName,
        () => {
          userPauseUntil = Date.now() + 9000;
        },
        { passive: true },
      );
    });
  }

  if ('IntersectionObserver' in window && projectsSection) {
    const projObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isProjectsInView = entry.isIntersecting;
        });
      },
      { threshold: 0.15 },
    );
    projObserver.observe(projectsSection);
  }

  if (!prefersReducedMotion) {
    setInterval(() => {
      if (window.innerWidth >= 768) return;
      if (document.hidden || !isProjectsInView) return;
      if (Date.now() < userPauseUntil) return;
      const visibleCards = getVisibleCards();
      if (visibleCards.length <= 1) return;
      const anyFlipped = visibleCards.some((c) => c.classList.contains('is-flipped'));
      if (anyFlipped) return;

      scrollToSlide(activeSlideIndex + 1, true);
    }, 4500);
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundEngine.playClick();
      const selectedFilter = btn.dataset.filter || 'all';

      filterBtns.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle('is-active', isCurrent);
        b.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
      });

      projectCards.forEach((cardEl) => {
        // Unflip any currently flipped card when switching filters
        cardEl.classList.remove('is-flipped');
        cardEl.setAttribute('aria-pressed', 'false');

        const categories = (cardEl.dataset.categories || '').split(' ');
        const isMatch = selectedFilter === 'all' || categories.includes(selectedFilter);

        if (isMatch) {
          cardEl.classList.remove('is-filtered-out');
          if (!prefersReducedMotion) {
            cardEl.classList.remove('is-filtering-in');
            // Trigger reflow for crisp scale + fade entrance
            void cardEl.offsetWidth;
            cardEl.classList.add('is-filtering-in');
          }
        } else {
          cardEl.classList.remove('is-filtering-in');
          cardEl.classList.add('is-filtered-out');
        }
      });

      renderCarouselDots();
      scrollToSlide(0, true);
    });
  });

  // 0b. Live Local Time Clock (Morocco • Africa/Casablanca)
  const clockEl = document.getElementById('local-time-clock');
  if (clockEl) {
    const updateMoroccoClock = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Casablanca',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        const formatted = formatter.format(now);
        clockEl.textContent = `${formatted} GMT+1`;
        clockEl.setAttribute('datetime', now.toISOString());
      } catch (e) {
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        clockEl.textContent = `${hrs}:${mins}`;
      }
    };
    updateMoroccoClock();
    setInterval(updateMoroccoClock, 30000);
  }

  // 1. One-Click Copy Email + Glassmorphic Toast Notification
  const copyBtn = document.getElementById('copy-email-btn');
  const copyBadge = document.getElementById('copy-email-badge');
  const toastEl = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  let toastTimeout = null;

  const showToast = (message) => {
    if (!toastEl) return;
    if (toastMsg) toastMsg.textContent = message;
    toastEl.classList.add('is-visible');
    toastEl.setAttribute('aria-hidden', 'false');
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('is-visible');
      toastEl.setAttribute('aria-hidden', 'true');
    }, 2500);
  };

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = copyBtn.dataset.email || 'tajemouti@gmail.com';
      const onCopied = () => {
        SoundEngine.playChime();
        copyBtn.classList.add('is-copied');
        if (copyBadge) copyBadge.textContent = 'Copied ✓';
        showToast('Email copied to clipboard ✓');
        setTimeout(() => {
          copyBtn.classList.remove('is-copied');
          if (copyBadge) copyBadge.textContent = 'Copy Email ⧉';
        }, 2500);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(onCopied).catch(onCopied);
      } else {
        onCopied();
      }
    });
  }

  if (prefersReducedMotion) return;

  // 2. Smooth 60fps Rotating Border-Beam Angle (--beam-angle) with Background Tab Battery Guard
  let beamAngle = 0;
  let beamRafId = null;
  const beamTargets = document.querySelectorAll('.main-card, .contact-container');
  const animateBorderBeam = () => {
    if (document.hidden) {
      beamRafId = null;
      return;
    }
    beamAngle = (beamAngle + 0.55) % 360;
    const angleStr = `${beamAngle.toFixed(1)}deg`;
    beamTargets.forEach((el) => el.style.setProperty('--beam-angle', angleStr));
    beamRafId = window.requestAnimationFrame(animateBorderBeam);
  };
  if (beamTargets.length > 0 && !document.hidden) {
    beamRafId = window.requestAnimationFrame(animateBorderBeam);
  }

  // 3. Interactive Micro-Particle / Starfield Canvas in Hero Section (with Background Tab Battery Guard)
  const canvas = document.getElementById('hero-particles');
  const heroSection = document.getElementById('hero-section');
  if (!canvas || !heroSection) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let isHeroVisible = true;
  let particlesRafId = null;
  let pointerX = -1000;
  let pointerY = -1000;

  const resizeCanvas = () => {
    const rect = heroSection.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = width;
    canvas.height = height;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas, { passive: true });

  const particleCount = window.innerWidth < 768 ? 18 : 38;
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.42,
    vy: (Math.random() - 0.5) * 0.42,
    radius: Math.random() * 1.6 + 1.1,
    isAccent: Math.random() > 0.45,
  }));

  heroSection.addEventListener(
    'mousemove',
    (event) => {
      const rect = heroSection.getBoundingClientRect();
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
    },
    { passive: true },
  );

  heroSection.addEventListener('mouseleave', () => {
    pointerX = -1000;
    pointerY = -1000;
  });

  const renderParticles = () => {
    if (document.hidden || !isHeroVisible) {
      particlesRafId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const currentAccent = document.documentElement.getAttribute('data-accent') || 'orange';
    const accentPalette = ACCENT_PALETTES[currentAccent] || ACCENT_PALETTES.orange;
    const primaryDot = isDark ? accentPalette.dotDark : accentPalette.dotLight;
    const secondaryDot = isDark ? 'rgba(248, 250, 252, 0.45)' : 'rgba(51, 65, 85, 0.35)';
    const lineBase = accentPalette.rgb;

    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.isAccent ? primaryDot : secondaryDot;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j += 1) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 115) {
          const alpha = (1 - dist / 115) * (isDark ? 0.18 : 0.14);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(${lineBase}, ${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }

      // Connect to desktop cursor when close
      const cdx = p.x - pointerX;
      const cdy = p.y - pointerY;
      const cdist = Math.hypot(cdx, cdy);
      if (cdist < 145) {
        const alpha = (1 - cdist / 145) * (isDark ? 0.34 : 0.26);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(pointerX, pointerY);
        ctx.strokeStyle = `rgba(${lineBase}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    particlesRafId = window.requestAnimationFrame(renderParticles);
  };

  if ('IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isHeroVisible = entry.isIntersecting;
          if (isHeroVisible && !document.hidden && !particlesRafId) {
            particlesRafId = window.requestAnimationFrame(renderParticles);
          }
        });
      },
      { threshold: 0.05 },
    );
    heroObserver.observe(heroSection);
  }

  if (!document.hidden) {
    particlesRafId = window.requestAnimationFrame(renderParticles);
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      if (beamTargets.length > 0 && !beamRafId) {
        beamRafId = window.requestAnimationFrame(animateBorderBeam);
      }
      if (isHeroVisible && !particlesRafId) {
        particlesRafId = window.requestAnimationFrame(renderParticles);
      }
    }
  });
}

/* ==========================================================================
   8. Bilingual i18n (EN/FR), Accent Switcher, X-Ray, Sound, GitHub & Terminal
   ========================================================================== */
const TRANSLATIONS = {
  en: {
    skip_link: 'Skip to main content',
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_contact: 'Contact',
    drawer_nav_eyebrow: 'Navigation',
    drawer_appearance: 'Appearance',
    drawer_accent: 'Accent',
    drawer_preferences: 'Audio & Lang',
    drawer_cta: "Let's Talk",
    hero_badge: 'Available for new opportunities',
    hero_greeting: 'Hey There.',
    hero_im: "I'm",
    hero_role: "I'm a Software Developer",
    hero_description:
      'I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.',
    hero_cta_projects: 'View Projects',
    hero_cta_contact: 'Get in Touch',
    scroll_label: 'Scroll',
    projects_heading: 'Featured Projects',
    filter_all: 'All',
    filter_fullstack: 'Full-Stack',
    filter_saas: 'SaaS & Cloud',
    filter_realtime: 'Real-Time',
    card_flip_front: 'Click to flip ↻',
    card_flip_back: 'Click to flip ↺',
    btn_view_case_study: 'View Case Study',
    proj_modal0_desc:
      'A high-throughput multi-vendor e-commerce platform and merchant intelligence suite with real-time inventory synchronization, Stripe Split-Pay checkout, and sub-50ms search indexing.',
    proj_modal1_desc:
      'High-frequency infrastructure observability dashboard ingesting 40K+ events/sec with live P99 latency gauges and automated anomaly alerts.',
    proj_modal2_desc:
      'Collaborative agile workspace with LLM-assisted ticket triage, automated sprint velocity forecasting, and offline-first local state sync.',
    proj_modal3_desc:
      'Unified developer portal and edge API gateway featuring distributed token-bucket rate limiting, HMAC webhook signing, and a live REST playground.',
    proj_modal4_desc:
      'Immutable double-entry accounting engine and corporate expense platform with automated FX hedging, virtual cards, and real-time runway forecasting.',
    proj_modal5_desc:
      'Browser-based multiplayer code editor with conflict-free Yjs CRDT synchronization, live peer cursors, and isolated container code execution.',
    proj_modal6_desc:
      'Visual Kubernetes topology control plane automating progressive canary rollouts, Prometheus SLO gates, and instant one-click rollback recovery.',
    about_heading: 'About me',
    about_description:
      "Hello I'm a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.",
    about_print_cv: 'Save as CV / PDF',
    gh_pulse_title: 'Live GitHub Pulse',
    gh_pulse_synced: 'Synced with GitHub API',
    gh_repos_label: 'Public Repos',
    gh_followers_label: 'Community & Stars',
    gh_latest_label: 'Latest Active Repository',
    gh_langs_label: 'Top Detected Stack',
    skill_cat_lang: 'Language',
    skill_cat_fw: 'Frameworks',
    skill_cat_skills: 'Skills',
    contact_eyebrow: "Let's Connect",
    contact_heading:
      "I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.",
    copy_email_badge: 'Copy Email ⧉',
    form_name_label: 'Full name',
    form_name_placeholder: 'Full name',
    form_email_label: 'Email address',
    form_email_placeholder: 'Email address',
    form_message_label: 'Your message',
    form_message_placeholder: 'Write me something...',
    form_submit_btn: 'Get in touch',
    form_sending_btn: 'Sending...',
    form_success_toast: "Message sent successfully! I'll get back to you soon ✓",
    form_error_required: 'Please complete all required fields before sending.',
    form_error_lowercase: 'This message has not been sent! The e-mail must be in lower case letters.',
    form_error_network: 'Could not send message right now. Please try again or copy my email above.',
    footer_status: 'Available for Remote Work',
    footer_location: 'Morocco',
    footer_palette_label: 'Accent',
    xray_btn_label: 'Blueprint',
    pwa_install_btn: 'Install App',
  },
  fr: {
    skip_link: 'Aller au contenu principal',
    nav_projects: 'Projets',
    nav_about: 'À propos',
    nav_contact: 'Contact',
    drawer_nav_eyebrow: 'Navigation',
    drawer_appearance: 'Apparence',
    drawer_accent: 'Couleur',
    drawer_preferences: 'Audio & Langue',
    drawer_cta: 'Discutons',
    hero_badge: 'Disponible pour de nouvelles opportunités',
    hero_greeting: 'Bonjour.',
    hero_im: 'Je suis',
    hero_role: 'Développeur Logiciel Full-Stack',
    hero_description:
      'Je vous accompagne dans la conception de vos produits, fonctionnalités ou applications web. Découvrez mes projets et mon parcours, et contactez-moi pour concrétiser vos idées !',
    hero_cta_projects: 'Voir mes projets',
    hero_cta_contact: 'Me contacter',
    scroll_label: 'Défiler',
    projects_heading: 'Projets Phares',
    filter_all: 'Tous',
    filter_fullstack: 'Full-Stack',
    filter_saas: 'SaaS & Cloud',
    filter_realtime: 'Temps Réel',
    card_flip_front: 'Cliquer pour retourner ↻',
    card_flip_back: 'Cliquer pour retourner ↺',
    btn_view_case_study: "Voir l'étude de cas",
    proj_modal0_desc:
      'Plateforme e-commerce multi-vendeurs haute performance avec synchronisation des stocks en temps réel, paiement Stripe Connect et recherche indexée <50ms.',
    proj_modal1_desc:
      "Tableau de bord d'observabilité cloud ingérant plus de 40K événements/sec avec jauges de latence P99 en direct et alertes d'anomalies automatisées.",
    proj_modal2_desc:
      'Espace agile collaboratif avec triage de tickets assisté par IA, prévision de vélocité de sprint et synchronisation locale hors-ligne.',
    proj_modal3_desc:
      'Portail développeur unifié et passerelle API Edge avec limitation de débit distribuée Redis, signature HMAC et console REST interactive.',
    proj_modal4_desc:
      'Moteur comptable immuable en partie double et gestion de trésorerie multi-devises avec cartes virtuelles et prévision de flux financiers.',
    proj_modal5_desc:
      'Éditeur de code multijoueur dans le navigateur avec synchronisation CRDT Yjs sans conflit, curseurs en direct et exécution isolée Docker.',
    proj_modal6_desc:
      'Plan de contrôle visuel Kubernetes automatisant les déploiements canaris progressifs, les critères SLO Prometheus et la restauration instantanée.',
    about_heading: 'À propos',
    about_description:
      'Développeur logiciel passionné par les architectures distribuées et les interfaces modernes ! Parcourez mes réalisations et contactez-moi si vous avez un projet ambitieux à développer.',
    about_print_cv: 'Exporter CV / PDF',
    gh_pulse_title: 'Activité GitHub en Direct',
    gh_pulse_synced: 'Synchronisé via GitHub API',
    gh_repos_label: 'Dépôts Publics',
    gh_followers_label: 'Communauté & Stars',
    gh_latest_label: 'Dernier Dépôt Actif',
    gh_langs_label: 'Stack Détectée',
    skill_cat_lang: 'Langages',
    skill_cat_fw: 'Frameworks',
    skill_cat_skills: 'Compétences',
    contact_eyebrow: 'Restons en Contact',
    contact_heading:
      'Toujours enthousiaste à l’idée de découvrir de nouveaux projets — écrivez-moi pour en discuter.',
    copy_email_badge: 'Copier Email ⧉',
    form_name_label: 'Nom complet',
    form_name_placeholder: 'Nom complet',
    form_email_label: 'Adresse e-mail',
    form_email_placeholder: 'Adresse e-mail',
    form_message_label: 'Votre message',
    form_message_placeholder: 'Écrivez-moi votre message...',
    form_submit_btn: 'Envoyer le message',
    form_sending_btn: 'Envoi en cours...',
    form_success_toast: 'Message envoyé avec succès ! Je vous répondrai très vite ✓',
    form_error_required: 'Veuillez remplir tous les champs obligatoires avant d’envoyer.',
    form_error_lowercase: 'Message non envoyé ! L’adresse e-mail doit être entièrement en minuscules.',
    form_error_network: 'Impossible d’envoyer le message pour le moment. Réessayez ou copiez mon e-mail ci-dessus.',
    footer_status: 'Disponible en Remote',
    footer_location: 'Maroc',
    footer_palette_label: 'Couleur',
    xray_btn_label: 'Blueprint',
    pwa_install_btn: 'Installer l’App',
  },
};

function initSignatureExtras() {
  const rootEl = document.documentElement;
  const notifyToast = (msg) => showPortfolioToast(msg, 2400);

  // 0. PWA One-Click "Install App" Prompt Handler (Footer & Mobile Drawer)
  const pwaInstallBtn = document.getElementById('pwa-install-btn');
  const mobilePwaInstallBtn = document.getElementById('mobile-pwa-install-btn');
  let deferredInstallPrompt = null;

  const setInstallButtonsVisible = (isVisible) => {
    [pwaInstallBtn, mobilePwaInstallBtn].forEach((btn) => {
      if (!btn) return;
      if (isVisible) {
        btn.removeAttribute('hidden');
      } else {
        btn.setAttribute('hidden', '');
      }
    });
  };

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    setInstallButtonsVisible(true);
  });

  const triggerPwaInstall = async () => {
    if (!deferredInstallPrompt) return;
    SoundEngine.playClick();
    deferredInstallPrompt.prompt();
    try {
      await deferredInstallPrompt.userChoice;
    } catch (err) {
      // User dismissed or browser blocked prompt
    }
    deferredInstallPrompt = null;
    setInstallButtonsVisible(false);
  };

  if (pwaInstallBtn) pwaInstallBtn.addEventListener('click', triggerPwaInstall);
  if (mobilePwaInstallBtn) mobilePwaInstallBtn.addEventListener('click', triggerPwaInstall);

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    setInstallButtonsVisible(false);
    SoundEngine.playChime();
    const isFr = rootEl.getAttribute('lang') === 'fr';
    notifyToast(isFr ? 'Application Ajrass installée ✓' : 'Ajrass Portfolio App installed ✓');
  });

  // 1. Dynamic Tab Title, 10-Track MIDI Jukebox Popover & Floating Bottom-Left Dock
  const originalTitle = document.title;
  const musicWrapper = document.getElementById('music-jukebox-wrapper');
  const musicToggleBtn = document.getElementById('music-toggle');
  const jukeboxPopover = document.getElementById('music-jukebox-popover');
  const jukeboxNowPlaying = document.getElementById('jukebox-now-playing');
  const jukeboxPlayBtn = document.getElementById('jukebox-play');
  const jukeboxPrevBtn = document.getElementById('jukebox-prev');
  const jukeboxNextBtn = document.getElementById('jukebox-next');
  const jukeboxTrackList = document.getElementById('jukebox-track-list');
  const mobileMusicBtn = document.getElementById('mobile-music-toggle');
  const mobileMusicText = document.getElementById('mobile-music-text');

  // Floating Bottom-Left Controls Dock
  const floatingDock = document.getElementById('floating-controls-dock');
  const floatingDockTrigger = document.getElementById('floating-dock-trigger');
  const floatingDockPanel = document.getElementById('floating-dock-panel');

  if (floatingDock && floatingDockTrigger && floatingDockPanel) {
    floatingDockTrigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const expanded = floatingDock.classList.toggle('is-expanded');
      floatingDockTrigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      floatingDockPanel.setAttribute('aria-hidden', expanded ? 'false' : 'true');
      SoundEngine.playClick();
    });

    document.addEventListener('click', (event) => {
      if (!floatingDock.contains(event.target) && floatingDock.classList.contains('is-expanded')) {
        floatingDock.classList.remove('is-expanded');
        floatingDockTrigger.setAttribute('aria-expanded', 'false');
        floatingDockPanel.setAttribute('aria-hidden', 'true');
      }
    });
  }

  const syncMusicUI = () => {
    const playing = MusicEngine.isPlaying;
    const track = MusicEngine.getCurrentTrack();
    if (musicToggleBtn) {
      musicToggleBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
    }
    if (jukeboxPlayBtn) {
      jukeboxPlayBtn.textContent = playing ? '⏸' : '▶';
      jukeboxPlayBtn.classList.toggle('is-playing', playing);
    }
    if (jukeboxNowPlaying && track) {
      jukeboxNowPlaying.textContent = `${playing ? '♪ ' : 'Paused: '}0${track.id <= 9 ? track.id : ''}${track.id > 9 ? track.id : ''}. ${track.title}`;
    }
    if (mobileMusicText) {
      mobileMusicText.textContent = playing ? '♪ BGM On' : '♪ BGM';
    }
    if (jukeboxTrackList) {
      jukeboxTrackList.querySelectorAll('.jukebox-track-btn').forEach((btn, idx) => {
        const isCurrent = idx === MusicEngine.currentTrackIndex;
        btn.classList.toggle('is-active', isCurrent);
        btn.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
      });
    }
  };

  if (jukeboxTrackList) {
    jukeboxTrackList.innerHTML = MIDI_TRACKS.map(
      (t, idx) => `
      <li role="option" aria-selected="${idx === 0 ? 'true' : 'false'}">
        <button class="jukebox-track-btn ${idx === 0 ? 'is-active' : ''}" type="button" data-track-index="${idx}">
          <span><span class="jukebox-track-num">${String(t.id).padStart(2, '0')}</span>${t.title}</span>
          <span class="jukebox-track-bpm">${t.bpm} BPM</span>
        </button>
      </li>
    `,
    ).join('');

    jukeboxTrackList.querySelectorAll('.jukebox-track-btn').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.stopPropagation();
        const idx = Number(btn.dataset.trackIndex || 0);
        const track = MusicEngine.selectTrack(idx, true);
        syncMusicUI();
        AchievementEngine.unlock('synthwave_dj');
        notifyToast(`Playing #${track.id}: ${track.title} ♪`);
      });
    });
  }

  const toggleMusic = () => {
    const playing = MusicEngine.toggle();
    const track = MusicEngine.getCurrentTrack();
    syncMusicUI();
    if (playing) {
      AchievementEngine.unlock('synthwave_dj');
    }
    notifyToast(playing ? `Playing: ${track.title} ♪` : 'MIDI Synth Jukebox: PAUSED');
    return playing;
  };

  if (musicToggleBtn && jukeboxPopover) {
    musicToggleBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = jukeboxPopover.classList.toggle('is-open');
      musicToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      jukeboxPopover.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      if (isOpen && !MusicEngine.isPlaying) {
        toggleMusic();
      }
    });

    document.addEventListener('click', (event) => {
      if (musicWrapper && !musicWrapper.contains(event.target) && jukeboxPopover.classList.contains('is-open')) {
        jukeboxPopover.classList.remove('is-open');
        musicToggleBtn.setAttribute('aria-expanded', 'false');
        jukeboxPopover.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (jukeboxPlayBtn) {
    jukeboxPlayBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleMusic();
    });
  }

  if (jukeboxPrevBtn) {
    jukeboxPrevBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const track = MusicEngine.prevTrack();
      syncMusicUI();
      notifyToast(`Playing #${track.id}: ${track.title} ♪`);
    });
  }

  if (jukeboxNextBtn) {
    jukeboxNextBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const track = MusicEngine.nextTrack();
      syncMusicUI();
      notifyToast(`Playing #${track.id}: ${track.title} ♪`);
    });
  }

  if (mobileMusicBtn) mobileMusicBtn.addEventListener('click', toggleMusic);
  syncMusicUI();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.title = '👋 Come back! — Ajrass';
      if (MusicEngine.isPlaying) {
        MusicEngine.wasPlayingBeforeHide = true;
        MusicEngine.stop();
        syncMusicUI();
      }
    } else {
      document.title = originalTitle;
      if (MusicEngine.wasPlayingBeforeHide) {
        MusicEngine.wasPlayingBeforeHide = false;
        MusicEngine.start();
        syncMusicUI();
      }
    }
  });

  // 2. Micro-Sound Toggle (Navbar & Mobile Drawer)
  const soundToggleBtn = document.getElementById('sound-toggle');
  const mobileSoundBtn = document.getElementById('mobile-sound-toggle');
  const mobileSoundText = document.getElementById('mobile-sound-text');

  const syncSoundUI = (isEnabled) => {
    SoundEngine.enabled = isEnabled;
    localStorage.setItem('portfolioSound', isEnabled ? 'true' : 'false');
    if (soundToggleBtn) {
      soundToggleBtn.setAttribute('aria-pressed', isEnabled ? 'true' : 'false');
    }
    if (mobileSoundText) {
      mobileSoundText.textContent = isEnabled ? '🔊 On' : '🔇 Off';
    }
  };
  syncSoundUI(SoundEngine.enabled);

  const toggleSound = () => {
    const next = !SoundEngine.enabled;
    syncSoundUI(next);
    if (next) SoundEngine.playChime();
    notifyToast(next ? 'UI Micro-Sounds: ON 🔊' : 'UI Micro-Sounds: OFF 🔇');
    return next;
  };

  if (soundToggleBtn) soundToggleBtn.addEventListener('click', toggleSound);
  if (mobileSoundBtn) mobileSoundBtn.addEventListener('click', toggleSound);

  // 3. Live Accent Palette Switcher (orange, cyan, emerald, violet)
  const accentDots = document.querySelectorAll('[data-accent-choice]');
  const savedAccent = localStorage.getItem('portfolioAccent') || 'orange';

  const applyAccentPalette = (accentKey, silent = false) => {
    const validKey = ACCENT_PALETTES[accentKey] ? accentKey : 'orange';
    rootEl.setAttribute('data-accent', validKey);
    localStorage.setItem('portfolioAccent', validKey);
    accentDots.forEach((dot) => {
      dot.classList.toggle('is-active', dot.dataset.accentChoice === validKey);
    });
    updateThemeFavicon(rootEl.getAttribute('data-theme'), validKey);
    if (!silent) {
      SoundEngine.playClick();
      AchievementEngine.unlock('chameleon');
      notifyToast(`Accent Palette: ${validKey.toUpperCase()} ✦`);
    }
    return validKey;
  };
  applyAccentPalette(savedAccent, true);

  accentDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      applyAccentPalette(dot.dataset.accentChoice);
    });
  });

  // 4. Blueprint / X-Ray CAD Wireframe Mode (Button, Shift+X & Terminal)
  const xrayBtn = document.getElementById('xray-toggle');
  const toggleXrayMode = (forceState) => {
    const current = rootEl.getAttribute('data-xray') === 'true';
    const next = typeof forceState === 'boolean' ? forceState : !current;
    if (next) {
      rootEl.setAttribute('data-xray', 'true');
      AchievementEngine.unlock('code_architect');
    } else {
      rootEl.removeAttribute('data-xray');
    }
    if (xrayBtn) {
      xrayBtn.setAttribute('aria-pressed', next ? 'true' : 'false');
    }
    SoundEngine.playClick();
    notifyToast(next ? 'Blueprint X-Ray Mode: ON ⌗' : 'Blueprint X-Ray Mode: OFF');
    return next;
  };

  if (xrayBtn) {
    xrayBtn.addEventListener('click', () => toggleXrayMode());
  }

  document.addEventListener('keydown', (event) => {
    const activeTag = document.activeElement ? document.activeElement.tagName : '';
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;
    if (event.shiftKey && (event.key === 'X' || event.key === 'x')) {
      event.preventDefault();
      toggleXrayMode();
    }
  });

  // 5. Smart Print / Save as CV Button
  const printCvBtn = document.getElementById('print-cv-btn');
  if (printCvBtn) {
    printCvBtn.addEventListener('click', () => {
      SoundEngine.playClick();
      window.print();
    });
  }

  // 6. Seamless Bilingual Switcher (EN / FR)
  const langToggleBtn = document.getElementById('lang-toggle');
  const langToggleText = document.getElementById('lang-toggle-text');
  const mobileLangBtn = document.getElementById('mobile-lang-toggle');
  const mobileLangText = document.getElementById('mobile-lang-text');
  const savedLang = localStorage.getItem('portfolioLang') || 'en';

  const applyLanguage = (langCode, silent = false) => {
    const validLang = TRANSLATIONS[langCode] ? langCode : 'en';
    const dict = TRANSLATIONS[validLang];
    rootEl.setAttribute('lang', validLang);
    localStorage.setItem('portfolioLang', validLang);

    if (langToggleText) langToggleText.textContent = validLang.toUpperCase();
    if (mobileLangText) mobileLangText.textContent = validLang === 'fr' ? 'FR / EN' : 'EN / FR';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
        if (el.hasAttribute('data-scramble')) {
          el.dataset.originalText = dict[key];
        }
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    if (!silent) {
      SoundEngine.playClick();
      notifyToast(validLang === 'fr' ? 'Langue : Français 🇫🇷' : 'Language: English 🇬🇧');
    }
    return validLang;
  };
  applyLanguage(savedLang, true);

  const toggleLanguage = () => {
    const current = rootEl.getAttribute('lang') === 'fr' ? 'fr' : 'en';
    return applyLanguage(current === 'fr' ? 'en' : 'fr');
  };

  if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
  if (mobileLangBtn) mobileLangBtn.addEventListener('click', toggleLanguage);

  // 7. Live GitHub Pulse (@tajemouti) with 15-Minute sessionStorage Cache & Graceful Fallback
  const fetchGitHubPulse = async () => {
    const reposEl = document.getElementById('gh-stat-repos');
    const followersEl = document.getElementById('gh-stat-followers');
    const latestRepoEl = document.getElementById('gh-latest-repo');
    const langPillsEl = document.getElementById('gh-lang-pills');
    const statusEl = document.getElementById('gh-pulse-updated');
    if (!reposEl || !followersEl || !latestRepoEl || !langPillsEl) return;

    const cacheKey = 'tajemouti_gh_pulse_v1';
    const cachedRaw = sessionStorage.getItem(cacheKey);

    const renderGitHubData = (data) => {
      if (data.publicRepos) reposEl.textContent = `${data.publicRepos}`;
      if (data.followersText) followersEl.textContent = data.followersText;
      if (data.latestName && data.latestUrl) {
        latestRepoEl.textContent = `${data.latestName} • ${data.latestTime || 'Active'}`;
        latestRepoEl.setAttribute('href', data.latestUrl);
      }
      if (Array.isArray(data.languages) && data.languages.length > 0) {
        langPillsEl.innerHTML = data.languages
          .map((lang) => `<span class="github-lang-pill">${lang}</span>`)
          .join('');
      }
      if (statusEl) statusEl.textContent = 'Live • GitHub REST API v3';
    };

    if (cachedRaw) {
      try {
        const parsed = JSON.parse(cachedRaw);
        if (Date.now() - parsed.timestamp < 15 * 60 * 1000) {
          renderGitHubData(parsed.payload);
          return;
        }
      } catch (e) {
        sessionStorage.removeItem(cacheKey);
      }
    }

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch('https://api.github.com/users/tajemouti'),
        fetch('https://api.github.com/users/tajemouti/repos?sort=updated&per_page=8'),
      ]);
      if (!userRes.ok || !reposRes.ok) return;

      const user = await userRes.json();
      const repos = await reposRes.json();
      if (!Array.isArray(repos)) return;

      const totalStars = repos.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
      const langSet = [];
      repos.forEach((r) => {
        if (r.language && !langSet.includes(r.language) && langSet.length < 4) {
          langSet.push(r.language);
        }
      });

      const latest = repos[0];
      let relTime = 'Recently';
      if (latest && latest.updated_at) {
        const diffDays = Math.max(
          0,
          Math.floor((Date.now() - new Date(latest.updated_at).getTime()) / (1000 * 60 * 60 * 24)),
        );
        relTime = diffDays === 0 ? 'Today' : `${diffDays}d ago`;
      }

      const payload = {
        publicRepos: user.public_repos || 38,
        followersText: `${user.followers || 60} Followers • ★ ${totalStars}`,
        latestName: latest ? latest.name : 'tajemouti.github.io',
        latestUrl: latest ? latest.html_url : 'https://github.com/tajemouti',
        latestTime: relTime,
        languages: langSet.length > 0 ? langSet : ['JavaScript', 'TypeScript', 'Ruby', 'CSS'],
      };

      sessionStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), payload }));
      renderGitHubData(payload);
    } catch (err) {
      // Graceful fallback already rendered in HTML
    }
  };
  fetchGitHubPulse();

  // 8. Interactive Mini-Terminal Modal (>_) — AjrassOS v2.5
  const triggerBtn = document.getElementById('terminal-trigger');
  const terminalModal = document.getElementById('terminal-modal');
  const closeBtn = document.getElementById('terminal-close');
  const terminalBody = document.getElementById('terminal-body');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const matrixCanvas = document.getElementById('terminal-matrix-canvas');
  const confettiCanvas = document.getElementById('confetti-canvas');
  const overlay = document.getElementById('overlay');

  if (!triggerBtn || !terminalModal || !terminalOutput || !terminalForm || !terminalInput) return;

  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const commandHistory = [];
  let historyIndex = -1;
  let initialized = false;

  // Virtual File System for `ls` and `cat <filename>`
  const VIRTUAL_FILES = {
    'about.md': [
      '# Ajrass Tajemouti — Full-Stack Software Developer',
      'Location: Morocco (GMT+1) • Status: Available for Remote Work',
      'Bio: Passionate about high-throughput web apps, distributed systems,',
      'and crafting tactile, 60fps user interfaces with zero bloat.',
    ].join('\n'),
    'skills.json': JSON.stringify(
      {
        languages: ['JavaScript (ES6+)', 'TypeScript', 'Ruby', 'SQL', 'HTML5', 'CSS3'],
        frameworks: ['React.js', 'Ruby on Rails', 'Node.js', 'RSpec', 'Capybara', 'Tailwind'],
        infrastructure: ['PostgreSQL', 'Redis', 'Docker', 'GraphQL', 'REST APIs', 'Git'],
      },
      null,
      2,
    ),
    'projects/': [
      'drwxr-xr-x  01  nexcart-commerce/      (Full-Stack Commerce)',
      'drwxr-xr-x  02  pulsemetrics-apm/      (SaaS Observability)',
      'drwxr-xr-x  03  taskforge-ai/          (AI Productivity)',
      'drwxr-xr-x  04  devgate-api-hub/       (Developer Tools)',
      'drwxr-xr-x  05  finflow-treasury/      (FinTech Platform)',
      'drwxr-xr-x  06  codesync-live/         (Real-Time Collab)',
      'drwxr-xr-x  07  cloudops-mesh/         (Cloud & DevOps)',
    ].join('\n'),
    'resume.pdf': 'Binary PDF stream — Tip: Run "cv" or "resume" to open the print-ready ATS CV!',
    'secret.txt': [
      '🔐 TOP SECRET DEVELOPER LOG:',
      '  "Zero frameworks were harmed in the making of this portfolio."',
      '  Easter Egg Unlocked! Try running: sudo hire ajrass',
    ].join('\n'),
  };

  const DEV_QUOTES = [
    '"First, solve the problem. Then, write the code." — John Johnson',
    '"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra',
    '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler',
    '"There are only two hard things in Computer Science: cache invalidation and naming things." — Phil Karlton',
    '"Talk is cheap. Show me the code." — Linus Torvalds',
    '"It works on my machine! Then we will ship your machine." — DevOps Proverb',
  ];

  const ALL_COMMANDS = [
    'help',
    'neofetch',
    'ls',
    'cat',
    'whoami',
    'date',
    'goto',
    'about',
    'skills',
    'projects',
    'contact',
    'theme',
    'color',
    'lang',
    'sound',
    'music',
    'bgm',
    'xray',
    'blueprint',
    'cv',
    'resume',
    'achievements',
    'trophies',
    'snake',
    'type',
    'matrix',
    'party',
    'confetti',
    'coffee',
    'quote',
    'sudo',
    'clear',
    'exit',
  ];

  // Matrix Digital Rain Engine (0% CPU when off or closed)
  let matrixRafId = null;
  let matrixActive = false;
  let matrixDrops = [];

  const stopMatrixRain = () => {
    matrixActive = false;
    terminalModal.classList.remove('is-matrix-active');
    if (matrixRafId) {
      window.cancelAnimationFrame(matrixRafId);
      matrixRafId = null;
    }
    if (matrixCanvas) {
      const mCtx = matrixCanvas.getContext('2d');
      if (mCtx) mCtx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    }
  };

  const toggleMatrixRain = () => {
    if (prefersReducedMotion) {
      return 'Matrix digital rain is disabled while prefers-reduced-motion is enabled.';
    }
    if (matrixActive || !matrixCanvas) {
      stopMatrixRain();
      return 'Matrix digital rain: [STOPPED]';
    }

    matrixActive = true;
    terminalModal.classList.add('is-matrix-active');
    const rect = terminalModal.getBoundingClientRect();
    matrixCanvas.width = Math.max(300, Math.floor(rect.width));
    matrixCanvas.height = Math.max(240, Math.floor(rect.height));
    const mCtx = matrixCanvas.getContext('2d');
    const fontSize = 14;
    const columns = Math.floor(matrixCanvas.width / fontSize);
    matrixDrops = Array.from({ length: columns }, () => Math.random() * -20);
    const glyphs = '01AJRASSDEV<>/{}[]#*+λΩπΣ';
    let lastStep = 0;

    const drawMatrix = (now) => {
      if (!matrixActive || document.hidden || !terminalModal.classList.contains('active')) {
        matrixRafId = null;
        return;
      }
      if (now - lastStep > 45) {
        lastStep = now;
        mCtx.fillStyle = 'rgba(13, 17, 23, 0.14)';
        mCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        const accentKey = rootEl.getAttribute('data-accent') || 'orange';
        const palette = ACCENT_PALETTES[accentKey] || ACCENT_PALETTES.orange;
        mCtx.fillStyle = palette.hex;
        mCtx.font = `700 ${fontSize}px monospace`;

        for (let i = 0; i < matrixDrops.length; i += 1) {
          const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
          mCtx.fillText(ch, i * fontSize, matrixDrops[i] * fontSize);
          if (matrixDrops[i] * fontSize > matrixCanvas.height && Math.random() > 0.96) {
            matrixDrops[i] = 0;
          }
          matrixDrops[i] += 1;
        }
      }
      matrixRafId = window.requestAnimationFrame(drawMatrix);
    };

    matrixRafId = window.requestAnimationFrame(drawMatrix);
    return 'Matrix digital rain: [ACTIVE 🟢] (Run "matrix" again or press Esc to stop)';
  };

  // Celebratory Confetti Burst Engine (60fps, self-terminating)
  let confettiRafId = null;
  const triggerConfettiBurst = () => {
    SoundEngine.playChime();
    if (prefersReducedMotion || !confettiCanvas) return;
    if (confettiRafId) window.cancelAnimationFrame(confettiRafId);

    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    const cCtx = confettiCanvas.getContext('2d');
    if (!cCtx) return;

    const accentKey = rootEl.getAttribute('data-accent') || 'orange';
    const activeHex = (ACCENT_PALETTES[accentKey] || ACCENT_PALETTES.orange).hex;
    const colors = [activeHex, '#38bdf8', '#10b981', '#f59e0b', '#a855f7', '#ffffff'];

    const pieces = Array.from({ length: 75 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 4;
      return {
        x: confettiCanvas.width / 2,
        y: confettiCanvas.height * 0.42,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 5,
        w: Math.random() * 8 + 5,
        h: Math.random() * 5 + 4,
        rot: Math.random() * Math.PI,
        vRot: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
      };
    });

    const animateConfetti = () => {
      cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      let alive = 0;

      for (let i = 0; i < pieces.length; i += 1) {
        const p = pieces[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.24;
        p.vx *= 0.985;
        p.rot += p.vRot;
        p.alpha -= 0.011;

        if (p.alpha > 0 && p.y < confettiCanvas.height + 20) {
          alive += 1;
          cCtx.save();
          cCtx.globalAlpha = Math.max(0, p.alpha);
          cCtx.translate(p.x, p.y);
          cCtx.rotate(p.rot);
          cCtx.fillStyle = p.color;
          cCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          cCtx.restore();
        }
      }

      if (alive > 0 && !document.hidden) {
        confettiRafId = window.requestAnimationFrame(animateConfetti);
      } else {
        cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiRafId = null;
      }
    };

    confettiRafId = window.requestAnimationFrame(animateConfetti);
  };

  AchievementEngine.onAllUnlockedCallback = () => triggerConfettiBurst();

  const appendLine = (text, className = '') => {
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`.trim();
    line.textContent = text;
    terminalOutput.appendChild(line);
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  };

  // Terminal Mini-Games Cleanup & Engines (Snake + WPM Code Typing Test — 0% CPU when closed)
  let snakeIntervalId = null;
  let snakeKeyHandler = null;
  let typingInputHandler = null;

  const stopActiveTerminalGames = () => {
    if (snakeIntervalId) {
      clearInterval(snakeIntervalId);
      snakeIntervalId = null;
    }
    if (snakeKeyHandler) {
      window.removeEventListener('keydown', snakeKeyHandler, true);
      snakeKeyHandler = null;
    }
    if (typingInputHandler) {
      terminalInput.removeEventListener('input', typingInputHandler);
      typingInputHandler = null;
      terminalInput.placeholder = "Type 'help', 'neofetch', 'snake', 'type', or press Tab...";
    }
  };

  const startSnakeGame = () => {
    stopActiveTerminalGames();
    AchievementEngine.unlock('chosen_one');

    const widget = document.createElement('div');
    widget.className = 'terminal-game-widget';

    let highScore = parseInt(localStorage.getItem('ajrassSnakeHigh') || '0', 10);
    if (Number.isNaN(highScore)) highScore = 0;

    widget.innerHTML = `
      <div class="terminal-game-header">
        <span>🐍 <strong>SNAKE v1.0</strong> — Score: <strong data-snake-score>0</strong></span>
        <span>High Score: <strong data-snake-high>${highScore}</strong></span>
      </div>
      <canvas class="terminal-snake-canvas" width="260" height="180"></canvas>
      <div class="terminal-dpad" aria-label="Snake Touch Controls">
        <button type="button" class="terminal-dpad-btn" data-dpad="UP" aria-label="Up">▲</button>
        <button type="button" class="terminal-dpad-btn" data-dpad="LEFT" aria-label="Left">◄</button>
        <button type="button" class="terminal-dpad-btn" data-dpad="DOWN" aria-label="Down">▼</button>
        <button type="button" class="terminal-dpad-btn" data-dpad="RIGHT" aria-label="Right">►</button>
        <button type="button" class="terminal-dpad-btn" data-dpad="EXIT" aria-label="Quit Snake">Quit ✕</button>
      </div>
      <div class="terminal-line terminal-line-muted" style="font-size:0.74rem;text-align:center;">
        Use Arrow Keys / WASD or Touch D-Pad • Press Esc or Q to exit
      </div>
    `;
    terminalOutput.appendChild(widget);
    if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight;

    const canvas = widget.querySelector('.terminal-snake-canvas');
    const scoreEl = widget.querySelector('[data-snake-score]');
    const highEl = widget.querySelector('[data-snake-high]');
    const ctx = canvas.getContext('2d');
    const cell = 10;
    const cols = canvas.width / cell;
    const rows = canvas.height / cell;

    let snake = [
      { x: 6, y: 9 },
      { x: 5, y: 9 },
      { x: 4, y: 9 },
    ];
    let dir = { x: 1, y: 0 };
    let nextDir = { x: 1, y: 0 };
    let score = 0;
    let gameOver = false;

    const spawnFood = () => {
      let candidate;
      do {
        candidate = {
          x: Math.floor(Math.random() * cols),
          y: Math.floor(Math.random() * rows),
        };
      } while (snake.some((s) => s.x === candidate.x && s.y === candidate.y));
      return candidate;
    };

    let food = spawnFood();

    const endSnake = (reasonText) => {
      gameOver = true;
      stopActiveTerminalGames();
      SoundEngine.playChime();
      appendLine(reasonText, 'terminal-line-accent');
    };

    const setDirection = (nx, ny) => {
      if (nx === -dir.x && ny === -dir.y) return;
      nextDir = { x: nx, y: ny };
    };

    widget.querySelectorAll('[data-dpad]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = btn.getAttribute('data-dpad');
        if (action === 'UP') setDirection(0, -1);
        else if (action === 'DOWN') setDirection(0, 1);
        else if (action === 'LEFT') setDirection(-1, 0);
        else if (action === 'RIGHT') setDirection(1, 0);
        else if (action === 'EXIT') endSnake(`🐍 Snake exited. Final Score: ${score} (High Score: ${highScore})`);
      });
    });

    snakeKeyHandler = (e) => {
      if (!terminalModal.classList.contains('active') || gameOver) return;
      const k = e.key.toLowerCase();
      if (k === 'escape' || k === 'q') {
        e.preventDefault();
        endSnake(`🐍 Snake exited. Final Score: ${score} (High Score: ${highScore})`);
        return;
      }
      if (k === 'arrowup' || k === 'w') {
        e.preventDefault();
        setDirection(0, -1);
      } else if (k === 'arrowdown' || k === 's') {
        e.preventDefault();
        setDirection(0, 1);
      } else if (k === 'arrowleft' || k === 'a') {
        e.preventDefault();
        setDirection(-1, 0);
      } else if (k === 'arrowright' || k === 'd') {
        e.preventDefault();
        setDirection(1, 0);
      }
    };
    window.addEventListener('keydown', snakeKeyHandler, true);

    const drawSnakeFrame = () => {
      if (document.hidden || !terminalModal.classList.contains('active') || gameOver) return;

      dir = nextDir;
      const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

      if (
        head.x < 0 ||
        head.x >= cols ||
        head.y < 0 ||
        head.y >= rows ||
        snake.some((seg) => seg.x === head.x && seg.y === head.y)
      ) {
        ctx.fillStyle = 'rgba(239, 68, 68, 0.28)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        endSnake(`💥 Game Over! Score: ${score} • High Score: ${highScore} (Run "snake" to play again)`);
        return;
      }

      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        score += 10;
        SoundEngine.playClick();
        if (scoreEl) scoreEl.textContent = String(score);
        if (score > highScore) {
          highScore = score;
          localStorage.setItem('ajrassSnakeHigh', String(highScore));
          if (highEl) highEl.textContent = String(highScore);
        }
        food = spawnFood();
      } else {
        snake.pop();
      }

      const accentKey = rootEl.getAttribute('data-accent') || 'orange';
      const accentHex = (ACCENT_PALETTES[accentKey] || ACCENT_PALETTES.orange).hex;

      ctx.fillStyle = '#070b12';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#10b981';
      ctx.fillRect(food.x * cell + 1, food.y * cell + 1, cell - 2, cell - 2);

      snake.forEach((seg, idx) => {
        ctx.fillStyle = idx === 0 ? accentHex : '#38bdf8';
        ctx.fillRect(seg.x * cell + 1, seg.y * cell + 1, cell - 2, cell - 2);
      });
    };

    drawSnakeFrame();
    snakeIntervalId = setInterval(drawSnakeFrame, 115);
  };

  const CODE_TYPING_SNIPPETS = [
    "const data = await fetch('/api/v2/metrics').then(r => r.json());",
    'export const useDebounce = (fn, ms = 250) => useCallback(fn, [ms]);',
    'SELECT id, email FROM users WHERE active = true ORDER BY created_at;',
    'const memo = new Map(); export const cache = (k, v) => memo.set(k, v);',
  ];

  const startTypingTest = () => {
    stopActiveTerminalGames();
    const snippet = CODE_TYPING_SNIPPETS[Math.floor(Math.random() * CODE_TYPING_SNIPPETS.length)];

    const widget = document.createElement('div');
    widget.className = 'terminal-game-widget';
    widget.innerHTML = `
      <div class="terminal-game-header">
        <span>⌨️ <strong>DEV CODE-TYPING SPEED TEST</strong></span>
        <span data-type-status>Type in the prompt below (Esc to cancel)</span>
      </div>
      <div class="terminal-type-target" data-type-target></div>
    `;
    const targetBox = widget.querySelector('[data-type-target]');
    const statusEl = widget.querySelector('[data-type-status]');

    const charSpans = snippet.split('').map((ch, idx) => {
      const sp = document.createElement('span');
      sp.textContent = ch;
      if (idx === 0) sp.className = 'type-char-current';
      targetBox.appendChild(sp);
      return sp;
    });

    terminalOutput.appendChild(widget);
    if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight;

    terminalInput.value = '';
    terminalInput.placeholder = 'Start typing the code snippet above...';
    terminalInput.focus();

    let startTime = null;
    let totalKeystrokes = 0;
    let correctKeystrokes = 0;

    typingInputHandler = () => {
      const typed = terminalInput.value;
      if (!startTime && typed.length > 0) {
        startTime = performance.now();
      }
      totalKeystrokes += 1;
      const lastIdx = typed.length - 1;
      if (lastIdx >= 0 && typed[lastIdx] === snippet[lastIdx]) {
        correctKeystrokes += 1;
      }

      let allMatch = typed.length === snippet.length;
      charSpans.forEach((sp, idx) => {
        sp.className = '';
        if (idx < typed.length) {
          if (typed[idx] === snippet[idx]) {
            sp.className = 'type-char-ok';
          } else {
            sp.className = 'type-char-err';
            allMatch = false;
          }
        } else if (idx === typed.length) {
          sp.className = 'type-char-current';
        }
      });

      const elapsedMin = startTime ? Math.max(0.02, (performance.now() - startTime) / 60000) : 0.02;
      const liveWpm = Math.round(typed.length / 5 / elapsedMin);
      if (statusEl && startTime) {
        statusEl.textContent = `${liveWpm} WPM • ${Math.min(100, Math.round((typed.length / snippet.length) * 100))}%`;
      }

      if (allMatch) {
        const finalElapsedSec = Math.max(1, (performance.now() - startTime) / 1000);
        const wpm = Math.round(snippet.length / 5 / (finalElapsedSec / 60));
        const acc = Math.min(100, Math.max(70, Math.round((correctKeystrokes / Math.max(1, totalKeystrokes)) * 100)));
        let rank = 'Clean Code Craftsman 🛠️';
        if (wpm >= 85) rank = 'Senior Vim Wizard ⚡';
        else if (wpm >= 60) rank = '10x Full-Stack Ninja 🚀';

        stopActiveTerminalGames();
        terminalInput.value = '';
        SoundEngine.playChime();
        appendLine(
          `🏆 Typing Test Complete! Speed: ${wpm} WPM • Accuracy: ${acc}% • Rank: [${rank}]`,
          'terminal-line-success',
        );
      }
    };

    terminalInput.addEventListener('input', typingInputHandler);
  };

  const printBanner = () => {
    terminalOutput.innerHTML = '';
    appendLine('Welcome to AjrassOS v2.5 — Interactive Developer Shell', 'terminal-line-accent');
    appendLine(
      'Type "help" for commands, press Tab to autocomplete, or tap a Quick-Run chip below.',
      'terminal-line-muted',
    );
  };

  const openTerminal = () => {
    SoundEngine.playChime();
    if (!initialized) {
      printBanner();
      initialized = true;
    }
    terminalModal.classList.add('active');
    terminalModal.setAttribute('aria-hidden', 'false');
    if (overlay) overlay.classList.add('active');
    document.body.classList.add('no-scroll');
    AchievementEngine.unlock('shell_explorer');
    setTimeout(() => terminalInput.focus(), 60);
  };

  const closeTerminal = () => {
    stopMatrixRain();
    stopActiveTerminalGames();
    terminalModal.classList.remove('active');
    terminalModal.setAttribute('aria-hidden', 'true');
    if (overlay) overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
    triggerBtn.focus();
  };

  triggerBtn.addEventListener('click', openTerminal);
  if (closeBtn) closeBtn.addEventListener('click', closeTerminal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (matrixActive) stopMatrixRain();
      if (typingInputHandler) {
        stopActiveTerminalGames();
        terminalInput.value = '';
        appendLine('⌨️ Code-typing test cancelled.', 'terminal-line-muted');
      }
    }
  });

  terminalBody.addEventListener('click', () => {
    terminalInput.focus();
  });

  const scrollToSection = (sectionId) => {
    const targetEl = document.getElementById(sectionId);
    if (!targetEl) return;
    closeTerminal();
    const headerEl = document.querySelector('.site-header');
    const headerOffset = headerEl ? headerEl.getBoundingClientRect().height : 72;
    const targetTop = Math.round(targetEl.getBoundingClientRect().top + window.scrollY - headerOffset);
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const executeCommand = (rawInput) => {
    const cleaned = rawInput.trim().toLowerCase();
    const parts = cleaned.split(/\s+/);
    const cmd = parts[0] || '';
    const arg = parts[1] || '';

    SoundEngine.playKeyTick();
    appendLine(`ajrass@dev:~$ ${rawInput}`, 'terminal-line-cmd');

    if (!cmd) return;
    commandHistory.push(rawInput);
    historyIndex = commandHistory.length;

    if (cleaned === 'sudo hire ajrass') {
      AchievementEngine.unlock('chosen_one');
      triggerConfettiBurst();
      appendLine(
        '✅ Root access granted! Launching celebration & jumping to Contact...',
        'terminal-line-success',
      );
      setTimeout(() => scrollToSection('form-section'), 1100);
      return;
    }

    if (cmd === 'sudo') {
      appendLine(
        'Nice try! 😉 Root privileges require "sudo hire ajrass". This incident will be reported 😄',
        'terminal-line-warn',
      );
      return;
    }

    switch (cmd) {
      case 'help':
        appendLine(
          [
            '┌── PORTFOLIO & NAVIGATION ──────────────────────────────────────┐',
            '  about                    — Developer bio & location (Morocco)',
            '  skills                   — Categorized technical stack',
            '  projects                 — List all 7 engineering projects',
            '  contact                  — Email & social links (auto-copies email)',
            '  goto <hero|projects|about|contact> — Jump directly to a section',
            '  cv / resume              — Open print-friendly ATS Resume / PDF',
            '',
            '┌── UNIX & SYSTEM CONTROLS ──────────────────────────────────────┐',
            '  neofetch                 — System info + ASCII AjrassOS emblem',
            '  ls                       — List virtual portfolio files',
            '  cat <file>               — Read file (about.md, skills.json, secret.txt)',
            '  whoami / date            — Visitor identity & live Morocco clock',
            '  theme                    — Toggle Light / Dark mode',
            '  color <orange|cyan|emerald|violet> — Switch live accent palette',
            '  lang <en|fr>             — Switch UI language (English / Français)',
            '  sound                    — Toggle Web Audio micro-sounds',
            '  music [list|1-8|next|off] — 8-Track Synthwave / Cyberpunk Jukebox ♪',
            '  xray / blueprint         — Toggle CAD Blueprint wireframe (Shift+X)',
            '',
            '┌── MINI-GAMES, ACHIEVEMENTS & EASTER EGGS ─────────────────────┐',
            '  achievements / trophies  — View Secret Hunter progress (X/6 🏆)',
            '  snake                    — Play retro Terminal Snake game 🐍',
            '  type                     — Developer Code-Typing Speed Test (WPM) ⌨️',
            '  matrix                   — Toggle Matrix digital rain canvas',
            '  party / confetti         — Launch celebratory 60fps confetti burst',
            '  sudo hire ajrass         — Grant root access & hire Ajrass 🚀',
            '  coffee / quote           — Developer fuel & random engineering wisdom',
            '  clear / exit             — Clear screen or close terminal',
          ].join('\n'),
        );
        break;

      case 'neofetch': {
        const activeTheme = (rootEl.getAttribute('data-theme') || 'light').toUpperCase();
        const activeAccent = (rootEl.getAttribute('data-accent') || 'orange').toUpperCase();
        const activeLang = (rootEl.getAttribute('lang') || 'en').toUpperCase();
        const res = `${window.innerWidth}x${window.innerHeight}`;
        appendLine(
          [
            '      /\\         ajrass@portfolio',
            '     /  \\        ----------------',
            '    / /\\ \\       OS:       AjrassOS v2.5 (Vanilla ES6+)',
            '   / ____ \\      Host:     tajemouti.github.io',
            '  /_/    \\_\\     Location: Morocco (Africa/Casablanca)',
            `                 Theme:    ${activeTheme} • Accent: ${activeAccent}`,
            `                 Locale:   ${activeLang} • Viewport: ${res}`,
            '                 Stack:    React, TypeScript, Rails, Node, Postgres',
            '                 Status:   ● Available for Remote Opportunities',
          ].join('\n'),
          'terminal-line-accent',
        );
        break;
      }

      case 'ls':
        appendLine(
          'about.md    skills.json    projects/    resume.pdf    secret.txt',
          'terminal-line-success',
        );
        appendLine('Tip: Use "cat <filename>" (e.g., "cat secret.txt" or "cat skills.json")', 'terminal-line-muted');
        break;

      case 'cat': {
        if (!arg) {
          appendLine('Usage: cat <about.md|skills.json|projects/|resume.pdf|secret.txt>', 'terminal-line-warn');
          break;
        }
        const matchedFile = Object.keys(VIRTUAL_FILES).find(
          (k) => k === arg || k.replace('/', '') === arg,
        );
        if (matchedFile) {
          appendLine(
            VIRTUAL_FILES[matchedFile],
            matchedFile === 'secret.txt' ? 'terminal-line-accent' : '',
          );
        } else {
          appendLine(`cat: ${arg}: No such file or directory. Run "ls" to see files.`, 'terminal-line-warn');
        }
        break;
      }

      case 'whoami':
        appendLine(
          'visitor@ajrass.dev — A discerning engineer, recruiter, or tech enthusiast exploring Ajrass Tajemouti’s portfolio!',
          'terminal-line-success',
        );
        break;

      case 'date': {
        const nowStr = new Date().toLocaleString('en-GB', {
          timeZone: 'Africa/Casablanca',
          dateStyle: 'full',
          timeStyle: 'long',
        });
        appendLine(`Morocco Local Time: ${nowStr}`, 'terminal-line-accent');
        break;
      }

      case 'goto': {
        const sectionMap = {
          hero: 'hero-section',
          top: 'hero-section',
          projects: 'projects-section',
          work: 'projects-section',
          about: 'about-me-section',
          skills: 'about-me-section',
          contact: 'form-section',
        };
        const targetId = sectionMap[arg];
        if (!targetId) {
          appendLine('Usage: goto <hero|projects|about|contact>', 'terminal-line-warn');
        } else {
          appendLine(`Navigating to #${targetId}...`, 'terminal-line-success');
          setTimeout(() => scrollToSection(targetId), 250);
        }
        break;
      }

      case 'about':
        appendLine(VIRTUAL_FILES['about.md']);
        break;

      case 'skills':
        appendLine(
          [
            '• Languages:   JavaScript (ES6+), TypeScript, Ruby, HTML5, CSS3, SQL',
            '• Frameworks:  React.js, Ruby on Rails, Node.js, RSpec, Capybara, Tailwind',
            '• Systems:     PostgreSQL, Redis, Docker, GraphQL, REST APIs, Git & CLI',
          ].join('\n'),
        );
        break;

      case 'projects': {
        const allProjs = [cardInfos.featured, ...cardInfos.projects];
        const listStr = allProjs
          .map((p, idx) => `  0${idx + 1}. ${p.title} [${p.category}]`)
          .join('\n');
        appendLine(`Featured Engineering Showcase (7 Projects):\n${listStr}`);
        break;
      }

      case 'contact': {
        const email = 'tajemouti@gmail.com';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).catch(() => {});
        }
        appendLine(
          [
            `Email:     ${email} (Copied to clipboard ✓)`,
            'GitHub:    https://github.com/tajemouti',
            'LinkedIn:  https://www.linkedin.com/in/ajrass',
            'Wellfound: https://wellfound.com/u/ajrass-tajemouti',
          ].join('\n'),
          'terminal-line-success',
        );
        break;
      }

      case 'theme': {
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) themeBtn.click();
        const activeTheme = rootEl.getAttribute('data-theme') || 'light';
        appendLine(`Theme switched to [${activeTheme.toUpperCase()}] mode ✓`, 'terminal-line-success');
        break;
      }

      case 'color': {
        const targetColor = ACCENT_PALETTES[arg] ? arg : 'orange';
        applyAccentPalette(targetColor);
        appendLine(`Accent palette switched to [${targetColor.toUpperCase()}] ✓`, 'terminal-line-success');
        break;
      }

      case 'lang': {
        const targetLang = arg === 'fr' || arg === 'en' ? arg : (rootEl.getAttribute('lang') === 'fr' ? 'en' : 'fr');
        applyLanguage(targetLang);
        appendLine(`Language switched to [${targetLang.toUpperCase()}] ✓`, 'terminal-line-success');
        break;
      }

      case 'sound': {
        const state = toggleSound();
        appendLine(`UI Micro-Sound Engine: [${state ? 'ON 🔊' : 'OFF 🔇'}]`, 'terminal-line-success');
        break;
      }

      case 'music':
      case 'bgm': {
        if (arg === 'list') {
          const trackLines = MIDI_TRACKS.map(
            (t, idx) =>
              `  ${String(t.id).padStart(2, '0')}. ${t.title} (${t.bpm} BPM)${idx === MusicEngine.currentTrackIndex ? '  [ACTIVE]' : ''}`,
          ).join('\n');
          appendLine(`Synthwave / Cyberpunk / Chiptune Jukebox (8 Tracks):\n${trackLines}\nUsage: music <1-8> | music next | music prev | music off`, 'terminal-line-accent');
          break;
        }
        if (arg === 'off' || arg === 'stop' || arg === 'pause') {
          MusicEngine.stop();
          syncMusicUI();
          appendLine('Synthwave Jukebox: [PAUSED]', 'terminal-line-muted');
          break;
        }
        if (arg === 'next') {
          const t = MusicEngine.nextTrack();
          syncMusicUI();
          appendLine(`Now Playing #${t.id}: ${t.title} (${t.bpm} BPM) ♪`, 'terminal-line-success');
          break;
        }
        if (arg === 'prev') {
          const t = MusicEngine.prevTrack();
          syncMusicUI();
          appendLine(`Now Playing #${t.id}: ${t.title} (${t.bpm} BPM) ♪`, 'terminal-line-success');
          break;
        }
        const numArg = parseInt(arg, 10);
        if (!Number.isNaN(numArg) && numArg >= 1 && numArg <= MIDI_TRACKS.length) {
          const t = MusicEngine.selectTrack(numArg - 1, true);
          syncMusicUI();
          appendLine(`Now Playing #${t.id}: ${t.title} (${t.bpm} BPM) ♪`, 'terminal-line-success');
          break;
        }
        const playing = toggleMusic();
        const cur = MusicEngine.getCurrentTrack();
        appendLine(
          `Synthwave Jukebox: [${playing ? `PLAYING #${cur.id} ${cur.title} ♪` : 'PAUSED'}] (Tip: type "music list" or "music 1-8")`,
          'terminal-line-success',
        );
        break;
      }

      case 'xray':
      case 'blueprint': {
        const state = toggleXrayMode();
        appendLine(`Blueprint CAD X-Ray Mode: [${state ? 'ENABLED ⌗' : 'DISABLED'}]`, 'terminal-line-accent');
        break;
      }

      case 'cv':
      case 'resume':
        appendLine('Launching ATS-friendly Resume / PDF print dialog...', 'terminal-line-success');
        setTimeout(() => window.print(), 300);
        break;

      case 'achievements':
      case 'trophies':
        appendLine(AchievementEngine.formatChecklist(), 'terminal-line-accent');
        break;

      case 'snake':
        startSnakeGame();
        break;

      case 'type':
        startTypingTest();
        break;

      case 'matrix': {
        AchievementEngine.unlock('chosen_one');
        const msg = toggleMatrixRain();
        appendLine(msg, 'terminal-line-success');
        break;
      }

      case 'party':
      case 'confetti':
        AchievementEngine.unlock('chosen_one');
        triggerConfettiBurst();
        appendLine('🎉 Confetti burst deployed! Celebrating clean vanilla code.', 'terminal-line-success');
        break;

      case 'coffee':
        appendLine(
          [
            '    ( (',
            '     ) )',
            '  ........',
            '  |      |]   ☕ Moroccan Mint Tea & Espresso loaded!',
            '  \\      /    Compiling caffeine into clean TypeScript & Ruby...',
            "   `----'",
          ].join('\n'),
          'terminal-line-warn',
        );
        break;

      case 'quote': {
        const randomQuote = DEV_QUOTES[Math.floor(Math.random() * DEV_QUOTES.length)];
        appendLine(randomQuote, 'terminal-line-accent');
        break;
      }

      case 'clear':
        stopActiveTerminalGames();
        terminalOutput.innerHTML = '';
        break;

      case 'exit':
        closeTerminal();
        break;

      default:
        appendLine(
          `Command not found: "${rawInput}". Type "help" or press Tab to autocomplete.`,
          'terminal-line-muted',
        );
        break;
    }
  };

  // Quick-Run Suggestion Chips
  document.querySelectorAll('[data-terminal-cmd]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const cmdToRun = chip.getAttribute('data-terminal-cmd');
      if (cmdToRun) {
        executeCommand(cmdToRun);
        terminalInput.focus();
      }
    });
  });

  terminalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (typingInputHandler) return;
    const val = terminalInput.value;
    terminalInput.value = '';
    executeCommand(val);
  });

  terminalInput.addEventListener('keydown', (event) => {
    if (event.key.length === 1) {
      SoundEngine.playKeyTick();
    }

    // Tab Autocomplete for commands and `cat <filename>` / `goto <section>` / `color <palette>`
    if (event.key === 'Tab') {
      event.preventDefault();
      const currentVal = terminalInput.value.trimStart();
      const lowerVal = currentVal.toLowerCase();

      if (lowerVal.startsWith('cat ')) {
        const partialFile = lowerVal.slice(4).trim();
        const fileMatch = Object.keys(VIRTUAL_FILES).find((f) => f.startsWith(partialFile));
        if (fileMatch) {
          terminalInput.value = `cat ${fileMatch}`;
        }
        return;
      }

      if (lowerVal.startsWith('color ')) {
        const partialColor = lowerVal.slice(6).trim();
        const colorMatch = Object.keys(ACCENT_PALETTES).find((c) => c.startsWith(partialColor));
        if (colorMatch) {
          terminalInput.value = `color ${colorMatch}`;
        }
        return;
      }

      if (lowerVal.startsWith('goto ')) {
        const partialSec = lowerVal.slice(5).trim();
        const secMatch = ['hero', 'projects', 'about', 'contact'].find((s) => s.startsWith(partialSec));
        if (secMatch) {
          terminalInput.value = `goto ${secMatch}`;
        }
        return;
      }

      if (lowerVal.startsWith('sudo ')) {
        terminalInput.value = 'sudo hire ajrass';
        return;
      }

      const matches = ALL_COMMANDS.filter((c) => c.startsWith(lowerVal));
      if (matches.length === 1) {
        terminalInput.value = matches[0];
      } else if (matches.length > 1 && lowerVal.length > 0) {
        appendLine(`Autocomplete matches: ${matches.join('  ')}`, 'terminal-line-muted');
      }
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (commandHistory.length > 0 && historyIndex > 0) {
        historyIndex -= 1;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex += 1;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    }
  });
}

/* ==========================================================================
   Initialize Application
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  AchievementEngine.init();
  renderPortfolio();
  initMobileMenu();
  initModals();
  initThemeToggle();
  initScrollEffects();
  initContactForm();
  initVisualBrilliance();
  initSignatureExtras();

  // Register Progressive Web App (PWA) Service Worker for Offline Support
  if (
    'serviceWorker' in navigator &&
    (window.location.protocol === 'https:' ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1')
  ) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {
        // Silent graceful fallback if registration is blocked in private/file browsing
      });
    });
  }
});
