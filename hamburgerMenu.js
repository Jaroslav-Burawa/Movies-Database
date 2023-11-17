// HAMBURGER MENU VARIABLES AND EVENT LISTENER
const hamburgerEl = document.getElementById("hamburger-element");
const hamburgerMenu = document.getElementById("main-nav-hamburger");
const hamburgerBars = document.querySelectorAll(".bar");

hamburgerEl.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("active");
    hamburgerBars.forEach(function (bar) {
        bar.classList.toggle("bar-active");
    });
})