const menu = document.querySelector('.menu');
const button = document.querySelector('.button');
const links = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');


button.onclick = () => {
    menu.classList.toggle('menu_active');

    if(menu.classList.contains('menu_active')) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'visible'
    }
};

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
       
        const href = link.getAttribute('href');
        
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        if(link.classList.contains('link')) {
            menu.classList.remove('menu_active');
            body.style.overflow = 'visible'
        };
    });
});
