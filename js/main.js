// ============================================
// NAVIGATION — injection partagée sur toutes les pages
// ============================================
function buildNav() {
  const path = window.location.pathname;
  const isIndex = path.endsWith('index.html') || path.endsWith('/') || path === '' || path.endsWith('/Claude/');

  const prefix = isIndex ? '' : '';

  const header = document.createElement('header');
  header.className = 'site-header';
  header.id = 'site-header';
  header.innerHTML = `
    <a class="logo" href="${isIndex ? '#hero' : 'index.html'}">
      <div class="logo-mark">TF</div>
      <span class="logo-name">Timothé Flipo</span>
    </a>
    <button class="burger-btn" id="burger" aria-label="Menu" aria-expanded="false">
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>
  `;

  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  overlay.id = 'nav-overlay';

  const panel = document.createElement('nav');
  panel.className = 'nav-panel';
  panel.id = 'nav-panel';
  panel.setAttribute('aria-label', 'Navigation principale');

  const links = [
    { label: 'Accueil', href: 'index.html', key: 'index' },
    { label: 'Parcours', href: 'parcours.html', key: 'parcours' },
    { label: 'Compétences', href: 'competences.html', key: 'competences' },
    { label: 'Contact', href: 'contact.html', key: 'contact' }
  ];

  const currentPage = path.split('/').pop() || 'index.html';

  panel.innerHTML = `
    <ul class="nav-links">
      ${links.map((l, i) => `
        <li>
          <a class="nav-link ${currentPage === l.href || (currentPage === '' && l.key === 'index') ? 'active' : ''}"
             href="${l.href}">
            <span class="nav-num">0${i + 1}</span>
            ${l.label}
          </a>
        </li>
      `).join('')}
    </ul>
    <div class="nav-bottom">
      <div>Timothé Flipo — Portfolio 2025–2026</div>
      <div style="margin-top:6px">BUT GEA · Parcours GEMA · Paris-Saclay</div>
    </div>
  `;

  document.body.prepend(panel);
  document.body.prepend(overlay);
  document.body.prepend(header);

  // Burger toggle
  const burger = document.getElementById('burger');
  const navPanel = document.getElementById('nav-panel');
  const navOverlay = document.getElementById('nav-overlay');

  function openNav() {
    burger.classList.add('open');
    navPanel.classList.add('open');
    navOverlay.classList.add('visible');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    burger.classList.remove('open');
    navPanel.classList.remove('open');
    navOverlay.classList.remove('visible');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    burger.classList.contains('open') ? closeNav() : openNav();
  });

  navOverlay.addEventListener('click', closeNav);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeNav();
  });

  // Scroll → header background
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    siteHeader.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ============================================
// FAQ ACCORDION
// ============================================
function buildFAQ(container) {
  if (!container || typeof faqItems === 'undefined') return;

  container.innerHTML = '';
  faqItems.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <button class="faq-btn" aria-expanded="false" aria-controls="faq-body-${i}">
        <span>${item.q}</span>
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-body" id="faq-body-${i}" role="region">
        <div class="faq-body-inner"><p>${item.a}</p></div>
      </div>
    `;

    const btn = el.querySelector('.faq-btn');
    btn.addEventListener('click', () => {
      const isOpen = el.classList.contains('open');
      // Fermer tous les autres
      container.querySelectorAll('.faq-item.open').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        el.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    container.appendChild(el);
  });
}

// ============================================
// SECTIONS THÉMATIQUES (index.html sections 3-5)
// ============================================
// Registre des projets (rempli au build) — indexé par data-reg sur les tags
const projectsRegistry = [];

function buildThematiques(container) {
  if (!container || typeof thematiquesData === 'undefined') return;
  projectsRegistry.length = 0;

  thematiquesData.forEach(theme => {
    const section = document.createElement('section');
    section.className = 'theme-section';
    section.id = theme.id;
    section.style.backgroundColor = theme.bg;

    const encartTextClass = theme.encartTextColor === 'white' ? 'color: white' : `color: ${theme.encartTextColor}`;
    const tagStyle = `background: ${theme.tagBg}; color: ${theme.encartTextColor}`;

    const cardsHTML = theme.cards.map(card => {
      // Enregistre le projet pour la pop-up
      const regIndex = projectsRegistry.length;
      projectsRegistry.push({
        name: card.popupName || card.title,
        accent: theme.encartColor,
        details: card.competencyDetails || []
      });

      const hasDetails = (card.competencyDetails || []).length > 0;
      const tagsHTML = card.tags.map(t =>
        hasDetails
          ? `<button type="button" class="proj-tag proj-tag-clickable" data-reg="${regIndex}">${t}</button>`
          : `<span class="proj-tag">${t}</span>`
      ).join('');

      return `
        <div class="proj-card-wrap">
          <a class="proj-card reveal" href="${card.link}" style="--accent-color: ${theme.encartColor}">
            <div class="proj-card-top">
              <h3>${card.title}</h3>
              <span class="proj-arrow">↗</span>
            </div>
            <p>${card.description}</p>
            <div class="proj-tags">${tagsHTML}</div>
          </a>
        </div>`;
    }).join('');

    // reversed : cartes à gauche, visuel à droite
    const rev = theme.reversed;

    section.innerHTML = `
      <div class="theme-inner${rev ? ' reversed' : ''}">
        <div class="theme-visual ${rev ? 'reveal-r' : 'reveal-l'}">
          <div class="theme-visual-bg" ${theme.image ? `style="background-image:url('${theme.image}'); background-position:${theme.bgPosition || 'center'};"` : ''}></div>
          ${theme.image ? '' : `<div class="theme-visual-placeholder">Image à ajouter</div>`}
          <div class="theme-overlay">
            <div class="theme-encart" style="background-color: ${theme.encartColor}">
              <h2 style="${encartTextClass}">${theme.title}</h2>
              <div class="tags-row">
                ${theme.tags.map(t => `<span class="tag" style="${tagStyle}">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
        <div class="theme-cards ${rev ? 'reveal-l' : 'reveal-r'}">
          <p class="theme-cards-title">Projets associés</p>
          ${cardsHTML}
        </div>
      </div>
    `;

    container.appendChild(section);
  });

  // Délégation : clic sur un tag de compétence → ouvre la pop-up du projet
  container.addEventListener('click', e => {
    const tag = e.target.closest('.proj-tag-clickable');
    if (!tag) return;
    e.preventDefault();
    e.stopPropagation();
    const project = projectsRegistry[+tag.dataset.reg];
    if (project) openCompetencyModal(project);
  });
}

// ============================================
// POP-UP COMPÉTENCES
// ============================================
function getCompetencyModal() {
  let overlay = document.getElementById('comp-modal');
  if (overlay) return overlay;

  overlay = document.createElement('div');
  overlay.className = 'comp-modal-overlay';
  overlay.id = 'comp-modal';
  overlay.innerHTML = `
    <div class="comp-modal" role="dialog" aria-modal="true" aria-labelledby="comp-modal-eyebrow">
      <button class="comp-modal-close" aria-label="Fermer la fenêtre">&times;</button>
      <div class="comp-modal-header">
        <span class="comp-modal-eyebrow" id="comp-modal-eyebrow">Compétences mobilisées</span>
        <h3 class="comp-modal-project"></h3>
      </div>
      <div class="comp-modal-body"></div>
    </div>`;
  document.body.appendChild(overlay);

  const closeModal = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };
  overlay.querySelector('.comp-modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  return overlay;
}

function openCompetencyModal(project) {
  const overlay = getCompetencyModal();
  overlay.querySelector('.comp-modal-project').textContent = 'Projet · ' + project.name;

  overlay.querySelector('.comp-modal-body').innerHTML = project.details.map(d => `
    <div class="comp-detail">
      <div class="comp-detail-head">
        <span class="comp-detail-dot"></span>
        <h4>${d.name}</h4>
        <span class="comp-detail-level">${d.level}</span>
      </div>
      <p class="comp-detail-desc">${d.description}</p>
      <p class="comp-detail-example"><span class="comp-detail-ex-label">Exemple</span> ${d.example}</p>
    </div>
  `).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ============================================
// NOTION BLOCKS (index.html section 2)
// ============================================
function buildNotionBlocks(container) {
  if (!container || typeof notionBlocks === 'undefined') return;
  container.innerHTML = notionBlocks.map(b => `
    <div class="notion-block reveal reveal-delay-${b.number}">
      <div class="notion-num">${b.number}</div>
      <div class="notion-block-text">
        <h4>${b.title}</h4>
        <p>${b.text}</p>
      </div>
    </div>
  `).join('');
}

// ============================================
// TIMELINE (parcours.html)
// ============================================
function buildTimeline(container) {
  if (!container || typeof timelineItems === 'undefined') return;

  container.innerHTML = timelineItems.map(item => {
    const isScolaire = item.type === 'scolaire';
    const cardHTML = `
      <div class="tl-card">
        <span class="tl-tag ${item.tag}">${item.tag}</span>
        <h3>${item.title}</h3>
        <div class="tl-period">${item.period}</div>
        <div class="tl-org">${item.org}</div>
        <p class="tl-desc">${item.description}</p>
      </div>
    `;

    return `
      <div class="tl-item">
        <div class="tl-left">${isScolaire ? cardHTML : ''}</div>
        <div class="tl-dot-wrap">
          <div class="tl-dot ${item.type === 'scolaire' ? 'scolaire' : 'pro'}"></div>
        </div>
        <div class="tl-right">${!isScolaire ? cardHTML : ''}</div>
      </div>
    `;
  }).join('');

  // Ajouter les animations reveal sur chaque card
  container.querySelectorAll('.tl-card').forEach((card, i) => {
    card.classList.add('reveal');
    card.style.transitionDelay = `${i * 0.08}s`;
  });
}

// ============================================
// COMPÉTENCES (competences.html)
// ============================================
function buildCompetences(container) {
  if (!container || typeof competencesData === 'undefined') return;

  competencesData.forEach(comp => {
    const wrap = document.createElement('div');
    wrap.className = 'comp-card-wrap';
    wrap.dataset.id = comp.id;

    wrap.innerHTML = `
      <div class="comp-card reveal" data-id="${comp.id}">
        <div class="comp-card-bg"></div>
        <div class="comp-card-gradient" style="background: ${comp.gradient}"></div>
        <div class="comp-card-overlay"></div>
        <div class="comp-content">
          <div class="comp-num">Compétence ${comp.number}</div>
          <div class="comp-name">${comp.name}</div>
          <div class="comp-desc">${comp.description}</div>
          <div class="comp-cta">
            <span>Voir les projets</span>
            <span>→</span>
          </div>
        </div>
      </div>
      <div class="comp-projects" id="proj-${comp.id}">
        <div class="comp-projects-inner">
          <ul class="comp-proj-list">
            ${comp.projects.map(p => `
              <li>
                <a class="comp-proj-item" href="${p.link}">
                  <span>${p.title}</span>
                  <span style="color: var(--light-gray); font-size: 0.8rem;">→</span>
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;

    container.appendChild(wrap);

    wrap.querySelector('.comp-card').addEventListener('click', () => {
      const isExpanded = wrap.classList.contains('expanded');
      // Fermer tous
      document.querySelectorAll('.comp-card-wrap.expanded').forEach(w => w.classList.remove('expanded'));
      if (!isExpanded) wrap.classList.add('expanded');
    });
  });
}

// ============================================
// HERO PARALLAX — lignes du titre au scroll
// ============================================
function initHeroParallax() {
  // Respect de la préférence système "réduire les animations"
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const line1 = document.querySelector('.hero-line-1');
  const line2 = document.querySelector('.hero-line-2');
  const hero  = document.querySelector('.hero');
  if (!line1 || !line2 || !hero) return;

  let ticking = false;

  function update() {
    const scrollY   = window.scrollY;
    const heroH     = hero.offsetHeight;

    // progress : 0 en haut → 1 quand le scroll dépasse 60 % de la hauteur du hero
    const raw      = scrollY / (heroH * 1.0);
    const progress = Math.min(Math.max(raw, 0), 1);

    // Amplitude : 110 vw sur desktop garantit la sortie complète du cadre.
    // Sur mobile (< 600 px) on réduit à 55 vw pour garder une lecture propre.
    const isMobile = window.innerWidth < 600;
    const maxVw    = isMobile ? 55 : 110;

    const offset = progress * maxVw;

    line1.style.transform = `translateX(${offset}vw)`;
    line2.style.transform = `translateX(-${offset}vw)`;

    ticking = false;
  }

  // Scroll — passive pour ne pas bloquer le thread principal
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Recalcul si la fenêtre est redimensionnée
  window.addEventListener('resize', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  // Appel initial (au cas où la page est déjà scrollée au chargement)
  update();
}

// ============================================
// SCROLL REVEAL (Intersection Observer)
// ============================================
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-l, .reveal-r').forEach(el => observer.observe(el));
}

// ============================================
// PAGE TRANSITION (fade entrée)
// ============================================
function initPageTransition() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto')) {
      link.addEventListener('click', e => {
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(() => { window.location.href = href; }, 350);
      });
    }
  });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  initPageTransition();
  initHeroParallax();

  // Index
  const themeContainer = document.getElementById('themes-container');
  if (themeContainer) buildThematiques(themeContainer);

  const notionContainer = document.getElementById('notion-blocks');
  if (notionContainer) buildNotionBlocks(notionContainer);

  const faqContainer = document.getElementById('faq-list');
  if (faqContainer) buildFAQ(faqContainer);

  // Parcours
  const timelineContainer = document.getElementById('timeline-axis');
  if (timelineContainer) buildTimeline(timelineContainer);

  // Compétences
  const compContainer = document.getElementById('comp-grid');
  if (compContainer) buildCompetences(compContainer);

  // Reveal (après injection du contenu dynamique)
  setTimeout(initReveal, 50);
});
