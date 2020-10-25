const header = document.querySelector('.header');
const button = document.querySelector('.menu__button');
const menu = document.querySelector('.burger-menu');

window.onscroll = () => {
    if(window.pageYOffset > 100) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    };
};

button.onclick = () => {
    button.classList.toggle('menu__button_active')
    menu.classList.toggle('burger-menu_active')
}