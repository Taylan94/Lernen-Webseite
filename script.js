const btn = document.getElementById('toggle-dark');

function setTheme(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.theme = isDark ? 'dark' : 'light';
  btn.textContent = isDark ? '☀️' : '🌙';
}

// Beim Buttonklick Darkmode wechseln
btn?.addEventListener('click', () => {
  const isDark = !document.documentElement.classList.contains('dark');
  setTheme(isDark);
});

// Initiales Symbol setzen beim Laden
if (btn) {
  const currentDark = document.documentElement.classList.contains('dark');
  setTheme(currentDark);
}

