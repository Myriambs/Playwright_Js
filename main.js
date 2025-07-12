// app.js
document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("modeToggle");

  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    modeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
});
