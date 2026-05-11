/* ══════════════════════════════════════════
   SunExpress Holidays — Animations Engine
   ══════════════════════════════════════════ */

/* ── PAGE TRANSITION OVERLAY ── */
function initPageTransitions() {
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.id = 'page-transition';
  overlay.innerHTML = `<div class="pt-logo">SunExpress <em>Holidays</em></div>`;
  document.body.appendChild(overlay);

  // Intercept internal links
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
    e.preventDefault();
    overlay.classList.add('leaving');
    setTimeout(() => { window.location.href = href; }, 420);
  });

  // Fade in on load
  overlay.classList.add('entering');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.remove('entering');
    });
  });
}

/* ── SCROLL-TRIGGERED REVEAL ── */
function initScrollReveal() {
  // Mark all reveal targets
  const targets = document.querySelectorAll(
    '.dest-card, .deal-card, .mini-card, .hotel-card, .perk-card, .highlight-card, ' +
    '.practical-card, .room-card, .review-card, .extra-item, .flight-option, ' +
    '.section-header, .promo-banner, .dest-cta, .booking-widget, .order-summary, ' +
    '.score-big, .amenity-grid, .review-bars, .filters, .sort-bar, .promo-strip, ' +
    '.intro-card, .weather-strip'
  );

  targets.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger siblings in the same parent grid/flex
    const siblings = [...el.parentNode.children].filter(c => c.classList.contains('reveal'));
    const idx = siblings.indexOf(el);
    el.style.setProperty('--reveal-delay', `${idx * 60}ms`);
  });

  // Hero content always animates in
  document.querySelectorAll('.hero-content, .dest-hero-content, .booking-hero-inner').forEach(el => {
    el.classList.add('hero-enter');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

/* ── COUNTER ANIMATION ── */
function initCounters() {
  const counters = document.querySelectorAll('.dest-stat-val, .score-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const text = el.textContent;
      const num = parseFloat(text.replace(/[^0-9.]/g, ''));
      if (isNaN(num) || num === 0) return;
      const prefix = text.match(/^[^0-9]*/)?.[0] || '';
      const suffix = text.match(/[^0-9.]+$/)?.[0] || '';
      const duration = 1200;
      const start = performance.now();
      const isDecimal = text.includes('.');

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = num * eased;
        el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ── PARALLAX HERO DECORATIONS ── */
function initParallax() {
  const hero = document.querySelector('.hero, .dest-hero');
  if (!hero) return;

  const circles = hero.querySelectorAll('.hero-sun, .hero-ring1, .hero-ring2, .dh-circle');

  document.addEventListener('mousemove', e => {
    const rect = hero.getBoundingClientRect();
    if (e.clientY > rect.bottom) return;
    const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
    const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;
    circles.forEach((c, i) => {
      const strength = (i + 1) * 6;
      c.style.transform = `translate(${xRatio * strength}px, ${yRatio * strength * 0.5}px)`;
    });
  });
}

/* ── FLOATING SEARCH BAR ── */
function initFloatingSearch() {
  const search = document.querySelector('.search-wrap, .dest-search');
  if (!search) return;

  const nav = document.querySelector('.sx-nav');
  const navH = nav ? nav.offsetHeight : 64;

  const compact = document.createElement('div');
  compact.className = 'compact-search-bar';
  compact.innerHTML = `
    <span class="csb-label" data-i18n="search.from">Nereden</span>
    <span class="csb-sep">→</span>
    <span class="csb-label">Antalya</span>
    <span class="csb-sep">·</span>
    <span class="csb-label">15–22 Tem</span>
    <span class="csb-sep">·</span>
    <span class="csb-label">2 Kişi</span>
    <button class="csb-btn" data-i18n="search.btn">Ara →</button>
  `;
  document.body.appendChild(compact);

  let lastY = 0;
  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    const searchBottom = search.getBoundingClientRect().bottom + sy;
    if (sy > searchBottom) {
      compact.classList.add('visible');
      compact.classList.toggle('hidden-up', sy < lastY - 5 ? false : sy > lastY + 5);
    } else {
      compact.classList.remove('visible');
    }
    lastY = sy;
  }, { passive: true });
}

/* ── IMAGE CARD TILT ── */
function initTilt() {
  document.querySelectorAll('.deal-card, .highlight-card, .dest-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── NAV SCROLL EFFECT ── */
function initNavScroll() {
  const nav = document.querySelector('.sx-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── MOBILE HAMBURGER ── */
function initMobileNav() {
  const nav = document.querySelector('.sx-nav');
  if (!nav) return;

  // Create hamburger button
  const burger = document.createElement('button');
  burger.className = 'nav-burger';
  burger.setAttribute('aria-label', 'Menu');
  burger.innerHTML = `<span></span><span></span><span></span>`;
  nav.appendChild(burger);

  // Create mobile drawer
  const drawer = document.createElement('div');
  drawer.className = 'mobile-drawer';

  const links = nav.querySelector('.nav-links');
  const actions = nav.querySelector('.nav-actions');

  drawer.innerHTML = `
    <div class="mobile-drawer-inner">
      ${links ? links.outerHTML : ''}
      <div class="mobile-drawer-actions">
        ${actions ? actions.innerHTML : ''}
      </div>
    </div>
  `;
  document.body.appendChild(drawer);

  let open = false;

  function toggleMenu() {
    open = !open;
    burger.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    document.body.classList.toggle('drawer-open', open);
  }

  burger.addEventListener('click', toggleMenu);

  // Close on link click
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu()));

  // Close on overlay click
  drawer.addEventListener('click', e => { if (e.target === drawer) toggleMenu(); });
}

/* ── INIT ALL ── */
document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initScrollReveal();
  initCounters();
  initParallax();
  initFloatingSearch();
  initNavScroll();
  initMobileNav();

  // Tilt only on non-touch
  if (window.matchMedia('(hover: hover)').matches) {
    initTilt();
  }
});
