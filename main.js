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

  // ☰ Hamburger Menu - Changed "open" to "show" to match CSS
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    // Update ARIA attributes for accessibility
    const isExpanded = navLinks.classList.contains("show");
    menuToggle.setAttribute("aria-expanded", isExpanded);
    menuToggle.setAttribute("aria-label", isExpanded ? "Close Menu" : "Open Menu");
  });

  // Close menu when clicking on nav links (for single-page navigation)
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) { // Only for mobile
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open Menu");
      }
    });
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