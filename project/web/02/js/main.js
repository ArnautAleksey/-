const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.header__nav-link');
const linkMine = document.querySelector('.header__logo-link');
const body = document.querySelector('body');
const accordeons = document.querySelectorAll('.wedo__accordion-item');

stickyHeader();

// Fixed header 
function stickyHeader (){

    window.onscroll = () => {
        if(window.pageYOffset > 150) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        };
    };
};

// Toggle menus
menu.onclick = () => {
    menu.classList.toggle('menu_open');
    header.classList.toggle('header_open');
    
    if(menu.classList.contains('menu_open')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'visible';
    };
};


// Active links toggle & moving links & return to the main
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const href = link.getAttribute('href');
        
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        links.forEach(link => {
            link.classList.remove('header__nav-link_active');
        });

        link.classList.add('header__nav-link_active');

        menu.classList.remove('menu_open');
        header.classList.remove('header_open');
        body.style.overflow = 'visible';
    });

    linkMine.onclick = e => {
        e.preventDefault();
    
        const href = linkMine.getAttribute('href');
            
            document.querySelector(href).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });

        menu.classList.remove('menu_open');
        header.classList.remove('header_open');
        body.style.overflow = 'visible';
    };
});

// toggle accordeon active
accordeons.forEach(accordeon => {
    accordeon.addEventListener('click', () => {

        accordeons.forEach(accordeon => {
            accordeon.classList.remove('wedo__accordion-item_active');
        });

        accordeon.classList.add('wedo__accordion-item_active');
    });
});