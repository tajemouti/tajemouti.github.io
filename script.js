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
    { id: 'all', label: 'All', count: projects.length },
    {
      id: 'full-stack',
      label: 'Full-Stack',
      count: projects.filter((p) => p.filterTags.includes('full-stack')).length,
    },
    {
      id: 'saas-cloud',
      label: 'SaaS & Cloud',
      count: projects.filter((p) => p.filterTags.includes('saas-cloud')).length,
    },
    {
      id: 'real-time',
      label: 'Real-Time',
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
          <span class="filter-pill-label">${cat.label}</span>
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
                <span class="card-flip-hint" aria-hidden="true">Click to flip ↻</span>
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
                <span class="card-flip-hint" aria-hidden="true">Click to flip ↺</span>
              </div>
              <h3 class="card-back-heading">${project.title}</h3>
              <p class="card-back-description">${project.description}</p>
              <ul class="lang1" aria-label="Technologies used">
                ${project.technologies.map((tech) => `<li class="lang-list1">${tech}</li>`).join('')}
              </ul>
            </div>
            <button data-modal-target="#${project.id}" class="btn-primary card-back-btn" type="button">
              <span>View Case Study</span>
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
        <span class="heading-reveal-text">${sectionTitle}</span>
      </h2>
    </div>
    <article class="main-card reveal">
      <div class="main-card-media">
        <img class="img-placeholder" src="${featured.image}" alt="${featured.title} featured screenshot">
      </div>
      <div class="right-block1">
        <span class="featured-badge" data-scramble>${featured.category} • Featured</span>
        <h3 class="right-block1-heading" data-scramble>${featured.title}</h3>
        <p class="right-block1-description">${featured.description}</p>
        <ul class="lang1" aria-label="Technologies used">
          ${featuredTechList}
        </ul>
        <button class="btn-primary magnetic" data-modal-target="#${featured.id}" type="button">
          <span>View Case Study</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
    ${filterBarHtml}
    <div id="cards-grid">
      ${cardsHtml}
    </div>
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

  // Persistent Click-Only Toggle for 3D Flip Project Cards (No Hover Flip, No Outside Auto-Unflip)
  const flipCards = document.querySelectorAll('.card');
  const toggleCardFlip = (cardEl) => {
    const isNowFlipped = cardEl.classList.toggle('is-flipped');
    cardEl.setAttribute('aria-pressed', isNowFlipped ? 'true' : 'false');
  };

  flipCards.forEach((cardEl) => {
    cardEl.addEventListener('click', (event) => {
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
   4. Dark / Light Theme Persistence & Theme-Reactive SVG Favicon
   ========================================================================== */
function updateThemeFavicon(theme) {
  const faviconEl = document.getElementById('dynamic-favicon');
  if (!faviconEl) return;
  const bg = theme === 'dark' ? '%23161514' : '%23ff6b00';
  const stroke = theme === 'dark' ? '%23ff6b00' : '%23ffffff';
  const textFill = theme === 'dark' ? '%23ff6b00' : '%23ffffff';
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
   6. Contact Form Validation & LocalStorage Persistence
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('form');
  const fullNameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const errorMsg = form ? form.querySelector('.errText') : null;

  if (!form || !fullNameInput || !emailInput || !messageInput || !errorMsg) return;

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

  [fullNameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener('input', () => {
      if (errorMsg.classList.contains('visible')) {
        errorMsg.classList.remove('visible');
        errorMsg.textContent = '';
      }
      saveFormData();
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailVal = emailInput.value.trim();

    if (!fullNameInput.value.trim() || !emailVal || !messageInput.value.trim()) {
      errorMsg.textContent = 'Please complete all required fields before sending.';
      errorMsg.classList.add('visible');
      return;
    }

    if (emailVal !== emailVal.toLowerCase()) {
      errorMsg.textContent = 'This message has not been sent! The e-mail must be in lower case letters.';
      errorMsg.classList.add('visible');
      return;
    }

    errorMsg.classList.remove('visible');
    errorMsg.textContent = '';
    form.submit();
  });

  restoreFormData();
}

/* ==========================================================================
   7. Hero Micro-Particle Canvas, Border-Beam, Copy-Email, Filters & Live Clock
   ========================================================================== */
function initVisualBrilliance() {
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 0a. Interactive Project Category Filter Pills
  const filterBtns = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('#cards-grid .card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
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
    const primaryDot = isDark ? 'rgba(255, 152, 56, 0.68)' : 'rgba(230, 92, 0, 0.55)';
    const secondaryDot = isDark ? 'rgba(248, 250, 252, 0.45)' : 'rgba(51, 65, 85, 0.35)';
    const lineBase = isDark ? '255, 130, 40' : '230, 92, 0';

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
   8. Dynamic Tab Title & Interactive Mini-Terminal Easter Egg (AjrassOS)
   ========================================================================== */
function initSignatureExtras() {
  // 1. Dynamic Tab Title on visibilitychange
  const originalTitle = document.title;
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.title = '👋 Come back! — Ajrass';
    } else {
      document.title = originalTitle;
    }
  });

  // 2. Interactive Mini-Terminal Modal (>_)
  const triggerBtn = document.getElementById('terminal-trigger');
  const terminalModal = document.getElementById('terminal-modal');
  const closeBtn = document.getElementById('terminal-close');
  const terminalBody = document.getElementById('terminal-body');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const overlay = document.getElementById('overlay');

  if (!triggerBtn || !terminalModal || !terminalOutput || !terminalForm || !terminalInput) return;

  const commandHistory = [];
  let historyIndex = -1;
  let initialized = false;

  const appendLine = (text, className = '') => {
    const line = document.createElement('div');
    line.className = `terminal-line ${className}`.trim();
    line.textContent = text;
    terminalOutput.appendChild(line);
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  };

  const printBanner = () => {
    terminalOutput.innerHTML = '';
    appendLine('Welcome to AjrassOS v1.0 — Interactive Developer Shell', 'terminal-line-accent');
    appendLine('Type "help" and press Enter to see available commands.', 'terminal-line-muted');
  };

  const openTerminal = () => {
    if (!initialized) {
      printBanner();
      initialized = true;
    }
    terminalModal.classList.add('active');
    terminalModal.setAttribute('aria-hidden', 'false');
    if (overlay) overlay.classList.add('active');
    document.body.classList.add('no-scroll');
    setTimeout(() => terminalInput.focus(), 60);
  };

  const closeTerminal = () => {
    terminalModal.classList.remove('active');
    terminalModal.setAttribute('aria-hidden', 'true');
    if (overlay) overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
    triggerBtn.focus();
  };

  triggerBtn.addEventListener('click', openTerminal);
  if (closeBtn) closeBtn.addEventListener('click', closeTerminal);

  terminalBody.addEventListener('click', () => {
    terminalInput.focus();
  });

  const executeCommand = (rawInput) => {
    const cmd = rawInput.trim().toLowerCase();
    appendLine(`ajrass@dev:~$ ${rawInput}`, 'terminal-line-cmd');

    if (!cmd) return;
    commandHistory.push(rawInput);
    historyIndex = commandHistory.length;

    switch (cmd) {
      case 'help':
        appendLine(
          [
            'Available commands:',
            '  about     — Developer bio & location (Morocco)',
            '  skills    — Categorized technical stack',
            '  projects  — List all 7 featured & grid engineering projects',
            '  contact   — Email address & social links (auto-copies email)',
            '  theme     — Toggle between Light and Dark mode',
            '  clear     — Clear terminal screen',
            '  exit      — Close terminal window',
          ].join('\n'),
        );
        break;

      case 'about':
        appendLine(
          'Ajrass Tajemouti — Full-Stack Software Developer based in Morocco (GMT+1).\nPassionate about building high-throughput web applications, scalable APIs, and expressive user interfaces.',
        );
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
        const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
        appendLine(`Theme switched to [${activeTheme.toUpperCase()}] mode ✓`, 'terminal-line-success');
        break;
      }

      case 'clear':
        terminalOutput.innerHTML = '';
        break;

      case 'exit':
        closeTerminal();
        break;

      default:
        appendLine(
          `Command not found: "${rawInput}". Type "help" for a list of available commands.`,
          'terminal-line-muted',
        );
        break;
    }
  };

  terminalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const val = terminalInput.value;
    terminalInput.value = '';
    executeCommand(val);
  });

  terminalInput.addEventListener('keydown', (event) => {
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
  renderPortfolio();
  initMobileMenu();
  initModals();
  initThemeToggle();
  initScrollEffects();
  initContactForm();
  initVisualBrilliance();
  initSignatureExtras();
});
