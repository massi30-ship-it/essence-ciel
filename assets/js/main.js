/* Essence-Ciel — shared interactions: sticky nav, mobile menu, scroll reveal,
   active link, contact form success, and the live-chat widget. */
(function () {
  'use strict';

  /* current year */
  document.querySelectorAll('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });

  /* sticky nav background on scroll */
  var nav = document.querySelector('.nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* active nav link by filename */
  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a, .mmenu a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').toLowerCase();
    if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
  });

  /* mobile menu */
  var burger = document.querySelector('.burger');
  var mmenu = document.querySelector('.mmenu');
  if (burger && mmenu) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('on');
      mmenu.classList.toggle('on');
      document.body.style.overflow = mmenu.classList.contains('on') ? 'hidden' : '';
    });
    mmenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.classList.remove('on'); mmenu.classList.remove('on'); document.body.style.overflow = '';
      });
    });
  }

  /* scroll reveal */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  /* contact form -> success message */
  var form = document.getElementById('inquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var ok = document.getElementById('formSuccess');
      form.style.display = 'none';
      if (ok) { ok.classList.add('on'); ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    });
  }

  /* live chat widget (self-contained; swap in Tawk.to/Tidio below) */
  var chatBtn = document.getElementById('chatBtn');
  var chatPanel = document.getElementById('chatPanel');
  if (chatBtn && chatPanel) {
    chatBtn.addEventListener('click', function () { chatPanel.classList.toggle('on'); });
  }
})();

/* ===========================================================================
   LIVE CHAT — Tawk.to placeholder.
   To go live: create a free property at https://tawk.to, then uncomment and
   replace PROPERTY_ID / WIDGET_ID below (and you may remove the widget markup
   in the pages). Tidio works the same way with its own snippet.
   ---------------------------------------------------------------------------
   var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
   (function () {
     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
     s1.async = true;
     s1.src = 'https://embed.tawk.to/PROPERTY_ID/WIDGET_ID';
     s1.charset = 'UTF-8'; s1.setAttribute('crossorigin', '*');
     s0.parentNode.insertBefore(s1, s0);
   })();
   =========================================================================== */
