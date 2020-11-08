const menu = document.querySelector('.menu');
const button = document.querySelector('.button');
const links = document.querySelectorAll('.link');

button.onclick = () => {
    menu.classList.toggle('menu_active');
};

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });
});