const button = document.querySelector('.theme-toggle');
const media = window.matchMedia('(prefers-color-scheme: dark)');
function currentTheme() { return document.documentElement.dataset.theme || (media.matches ? 'dark' : 'light'); }
function updateLabel() { const next = currentTheme() === 'dark' ? 'light' : 'dark'; button.setAttribute('aria-label', `Switch to ${next} mode`); button.querySelector('.theme-label').textContent = next === 'light' ? 'Light mode' : 'Dark mode'; }
button.addEventListener('click', () => { const theme = currentTheme() === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = theme; try { localStorage.setItem('theme', theme); } catch (_) {} updateLabel(); });
media.addEventListener?.('change', updateLabel);
updateLabel();

// The supplied portrait is optional; the initials remain visible until it exists.
const portraitFrame = document.querySelector('.portrait-frame');
if (portraitFrame) {
  const portrait = new Image();
  portrait.alt = 'Ícaro Augusto Maccari Zelioli';
  portrait.onload = () => portraitFrame.querySelector('.portrait-placeholder').replaceWith(portrait);
  portrait.src = 'assets/portrait.png';
}
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (reducedMotion.matches) document.querySelectorAll('animateMotion').forEach(animation => animation.remove());
