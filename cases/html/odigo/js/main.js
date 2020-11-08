const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const links = document.querySelectorAll('.links');

// Sticky header
window.onscroll = () => {
    if(pageYOffset > 200) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    };
};

// Menu toggle
menu.onclick = () => {
    menu.classList.toggle('menu_active');
    header.classList.toggle('header_active');

    if(menu.classList.contains('menu_active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'visible';
    };
};

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = link.getAttribute('href');
        
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        menu.classList.remove('menu_active');
        header.classList.remove('header_active');
        body.style.overflow = 'visible';
      });
});
