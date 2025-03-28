// Menu hamburguer
const btnMenu = document.getElementById("btn-menu");
function toggleMenu(event) {
  const nav = document.getElementById("menu");
  const active = nav.classList.contains("active");
  nav.classList.toggle("active");
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
// Fim Itens aparecendo com o scroll

// botão de scroll para o topo
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const topBtn = document.getElementById("back-to-top");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
