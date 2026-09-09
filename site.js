/* No framework, external services, or build step required. */
(() => {
  'use strict';
  const script = document.currentScript;
  const root = new URL('./', script.src);
  const config = window.JASPER_CONFIG || {};
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#main-menu');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('is-open', open);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        menuButton.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        menuButton.focus();
      }
    });
  }
  document.querySelectorAll('[data-site-title]').forEach(node => {
    if (config.title) node.textContent = config.title;
  });
  document.querySelectorAll('[data-site-tagline]').forEach(node => {
    if (config.tagline) node.textContent = config.tagline;
  });
  if (typeof config.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.email)) {
    document.querySelectorAll('[data-contact]').forEach(node => {
      const a = document.createElement('a');
      a.href = 'mailto:' + config.email;
      a.textContent = config.email;
      node.replaceChildren(a);
    });
  }
  document.querySelectorAll('img[data-photo]').forEach(img => {
    const path = config.images && config.images[img.dataset.photo];
    if (!path) return;
    const fallback = img.src;
    img.addEventListener('error', () => { img.src = fallback; }, { once: true });
    img.src = new URL(path, root).href;
  });
  const searchInput = document.querySelector('#site-search');
  const results = document.querySelector('#search-results');
  const status = document.querySelector('#search-status');
  if (!searchInput || !results || !status) return;
  const form = searchInput.form;
  const records = window.JASPER_SEARCH_INDEX || [];
  function search(value) {
    const q = value.trim().slice(0, 200);
    results.replaceChildren();
    if (!q) {
      status.textContent = 'Enter a word or phrase to search Jasper’s pages and stories.';
      return;
    }
    const words = q.toLocaleLowerCase().split(/\s+/);
    const matches = records.filter(item => words.every(word =>
      (item.title + ' ' + item.text).toLocaleLowerCase().includes(word)));
    status.textContent = matches.length
      ? `${matches.length} result${matches.length === 1 ? '' : 's'} for “${q}”`
      : `No results for “${q}”. Try “walk”, “Jasper”, or “treats”.`;
    for (const item of matches) {
      const li = document.createElement('li');
      const h2 = document.createElement('h2');
      const a = document.createElement('a');
      a.href = new URL(item.path, root).href;
      a.textContent = item.title;
      h2.append(a);
      const p = document.createElement('p');
      p.textContent = item.text.slice(0, 220) + (item.text.length > 220 ? '…' : '');
      li.append(h2, p);
      results.append(li);
    }
  }
  searchInput.value = new URLSearchParams(window.location.search).get('q') || '';
  search(searchInput.value);
  form.addEventListener('submit', event => {
    event.preventDefault();
    search(searchInput.value);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('q', searchInput.value.trim());
      history.replaceState(null, '', url);
    } catch (_) { /* Local file previews may restrict history updates. */ }
  });
})();
