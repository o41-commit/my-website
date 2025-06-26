const mobileBtn = document.querySelector('.mobile-exit');
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

mobileMenu.addEventListener('click', () => {
    nav.classList.add('menu-btn')
});

mobileBtn.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
});