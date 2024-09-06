const btnMenu = document.getElementById("btn-menu");

// Menu hamburguer
function toggleMenu(event) {
  const nav = document.getElementById("menu");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", toggleMenu);
// Fim menu hamburguer

// Itens aparecendo com o scroll
const elements = document.querySelectorAll(".hidden");
const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

elements.forEach((elements) => myObserver.observe(elements));
