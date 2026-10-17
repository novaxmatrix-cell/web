// Theme toggle, mobile menu, scroll reveal, language memory. The initial theme is set inline in <head> to avoid a flash.
(function () {
  'use strict';
  var root = document.documentElement;

  var btn = document.getElementById('theme-btn');
  function current() {
    return root.getAttribute('data-theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function label() { if (btn) btn.textContent = current() === 'dark' ? '☀' : '☾'; }
  if (btn) {
    label();
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      label();
    });
  }

  var menu = document.getElementById('menu-btn');
  var header = document.querySelector('header');
  function closeMenu() { header.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
  if (menu && header) {
    menu.addEventListener('click', function () {
      var open = header.classList.toggle('open');
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    Array.prototype.forEach.call(header.querySelectorAll('nav a'), function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('open')) { closeMenu(); menu.focus(); }
    });
  }

  // Scroll reveal (CSS only animates .rv when prefers-reduced-motion allows it).
  var rv = document.querySelectorAll('.rv');
  if (rv.length && 'IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(rv, function (el) { ro.observe(el); });
  } else {
    Array.prototype.forEach.call(rv, function (el) { el.classList.add('in'); });
  }

  // Language switch: remember the choice so the English page stops sending this visitor to Arabic (and vice versa).
  Array.prototype.forEach.call(document.querySelectorAll('a[data-lang]'), function (a) {
    a.addEventListener('click', function () { try { localStorage.setItem('lang', a.getAttribute('data-lang')); } catch (e) {} });
  });

  // Deter casual copying of the page text and images.
  ['contextmenu', 'copy', 'cut', 'dragstart'].forEach(function (ev) {
    document.addEventListener(ev, function (e) { e.preventDefault(); });
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('/sw.js').catch(function () {}); });
  }
})();
