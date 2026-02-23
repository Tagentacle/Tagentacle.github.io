// ===== Theme Toggle =====
(function () {
  const html = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored) {
    html.setAttribute('data-theme', stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
  }
  updateIcon();

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon();
  });

  function updateIcon() {
    toggle.textContent = html.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  }

  // ===== Mobile Menu =====
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    mobileBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileBtn.textContent = '☰';
    });
  });

  // ===== Code Tabs =====
  document.querySelectorAll('.code-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.parentElement;
      group.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const block = group.nextElementSibling;
      block.querySelectorAll('.code-panel').forEach(p => p.classList.remove('active'));
      const target = block.querySelector('#tab-' + tab.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // ===== Scroll Animations =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
})();
