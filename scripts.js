// JavaScript para el menú desplegable
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open"); // Agregar o quitar la clase "open" para mostrar/ocultar el menú
});
