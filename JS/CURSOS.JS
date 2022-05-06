const menu = document.querySelector(".menu");
const btn = document.querySelector(".menu-btn");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});