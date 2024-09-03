const btnMenu = document.getElementById("btn-menu");

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
