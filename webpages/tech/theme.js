document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  function updateIcon(theme) {
    const isDark = theme === 'dark';
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    if (sunIcon && moonIcon) {
      sunIcon.style.display = isDark ? 'block' : 'none';
      moonIcon.style.display = isDark ? 'none' : 'block';
    }
  }

  // Inicialización: usa el tema guardado, por defecto "dark"
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateIcon(savedTheme);

  // Función de cambio de tema
  function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
    // Efecto de clic
    themeToggle.classList.add('theme-toggle-clicked');
    setTimeout(() => themeToggle.classList.remove('theme-toggle-clicked'), 300);
  }

  themeToggle.addEventListener('click', toggleTheme);
});
