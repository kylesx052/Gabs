document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// ScrollReveal para os cartões
ScrollReveal().reveal('.card', {
  delay: 100,
  duration: 1000,
  distance: '50px',
  origin: 'bottom',
  easing: 'ease-in-out',
  reset: false
});