let button = document.querySelector('.button');
let burgerMenu = document.querySelector('.burger-menu');
let overlay = document.querySelector('.burger-menu__overlay');
let menuLinks = document.querySelectorAll('.navigation__link')

button.addEventListener('click', () => {
    button.classList.toggle('button_active');
    burgerMenu.classList.toggle('burger-menu_active');
    overlay.classList.toggle('burger-menu__overlay_active');

    overlay.onclick = () => {
        button.classList.remove('button_active');
        burgerMenu.classList.remove('burger-menu_active');
        overlay.classList.remove('burger-menu__overlay_active');
    }
    menuLinks.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            button.classList.remove('button_active');
            burgerMenu.classList.remove('burger-menu_active');
            overlay.classList.remove('burger-menu__overlay_active');
        })
    })
})

