const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

//when each of the nav items are clicked, close the menu
navMenu.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
});