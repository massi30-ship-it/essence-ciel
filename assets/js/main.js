/* ================================================================
   ESSENCE-CIEL — main.js
   Nav toggle, scroll header, active link, gallery filter,
   contact form validation + success, current year.
   Vanilla ES6. No libraries. No scroll/cursor/counter animations.
   ================================================================ */
(function () {
  'use strict';

  /* current year */
  document.querySelectorAll('[data-year]').forEach(function (e) {
    e.textContent = new Date().getFullYear();
  });

  /* 1. mobile nav toggle */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    function closeNav() {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { closeNav(); toggle.focus(); }
    });
  }

  /* 2. header shadow on scroll */
  var header = document.getElementById('site-header');
  if (header) {
    function onScroll() { header.classList.toggle('scrolled', window.scrollY > 20); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* 3. active nav link by filename */
  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').toLowerCase();
    if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
  });

  /* 4. gallery filter (gallery page only) */
  var filters = document.querySelectorAll('.gallery-filter');
  var items = document.querySelectorAll('.gallery-item');
  if (filters.length && items.length) {
    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = this.dataset.filter;
        filters.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        this.classList.add('active'); this.setAttribute('aria-selected', 'true');
        items.forEach(function (it) {
          if (f === 'all' || it.dataset.category === f) { it.classList.remove('hidden'); }
          else { it.classList.add('hidden'); }
        });
      });
    });
  }

  /* 5. contact form -> success message (static demo; wire to Formspree/Netlify to go live) */
  var form = document.getElementById('inquiryForm');
  var ok = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      form.style.display = 'none';
      if (ok) { ok.classList.add('on'); ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    });
  }
})();
