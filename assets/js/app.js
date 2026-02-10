
(function () {
  const key = 'omar-theme';
  const root = document.documentElement;
  const saved = localStorage.getItem(key);
  if (saved) root.setAttribute('data-theme', saved);
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const current = root.getAttribute('data-theme') || 'dark';
  btn.innerText = current === 'light' ? 'Dark' : 'Light';
  btn.addEventListener('click', () => {
    const next = (root.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem(key, next);
    btn.innerText = next === 'light' ? 'Dark' : 'Light';
  });
})();
