const btnMenu = document.getElementById("btn-menu");

function toggleMenu() {
  const nav = document.getElementById("menu");
  nav.classList.toggle("active");
}

btnMenu.addEventListener("click", toggleMenu);
