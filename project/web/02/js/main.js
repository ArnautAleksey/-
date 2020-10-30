const header = document.querySelector('.header');
const menu = document.querySelector('.menu')

window.onscroll = () => {
    if(window.pageYOffset > 150) {
        header.classList.add('header_active')
    } else {
        header.classList.remove('header_active')
    }
};

menu.onclick = () => {
    menu.classList.toggle('menu_open');
    header.classList.toggle('header_open');
}