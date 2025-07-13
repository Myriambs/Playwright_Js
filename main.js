document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("modeToggle");
  const langToggle = document.getElementById("langToggle");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // 🌙 Dark Mode
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    modeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // ☰ Hamburger Menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // 🌐 Language Toggle
  let currentLang = "en";
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en";
    langToggle.textContent = currentLang === "en" ? "🇫🇷" : "🇬🇧";

    // 🔁 Replace text everywhere with data-*
    document.querySelectorAll("[data-en]").forEach((el) => {
      const newText = el.getAttribute(`data-${currentLang}`);
      if (newText) el.textContent = newText;
    });
  });
});
