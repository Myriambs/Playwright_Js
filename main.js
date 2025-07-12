// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const modeToggle = document.getElementById('modeToggle');
  const langToggle = document.getElementById('langToggle');

  // Dark/Light Mode Toggle
  modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Change icon on button
    if (body.classList.contains('dark-mode')) {
      modeToggle.textContent = '☀️'; // sun icon
    } else {
      modeToggle.textContent = '🌙'; // moon icon
    }
  });

  // Language Toggle (EN/FR)
  langToggle.addEventListener('click', () => {
    const isEnglish = langToggle.textContent === 'EN/FR'; // default EN shown first
    const elementsToTranslate = document.querySelectorAll('[data-en][data-fr]');

    elementsToTranslate.forEach(el => {
      el.textContent = isEnglish ? el.getAttribute('data-fr') : el.getAttribute('data-en');
    });

    // Update button label or keep it static
    // Here we toggle the button text to show current language for clarity
    langToggle.textContent = isEnglish ? 'FR/EN' : 'EN/FR';
  });
});
