const accordions = document.querySelectorAll('.accordion');
const sliders = document.querySelectorAll('.slider');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const links = document.querySelectorAll('.link');

// Menu toggle 
menu.onclick = () => {
    menu.classList.toggle('menu_active');
    header.classList.toggle('header_active');

    if(header.classList.contains('header_Active')) {
        body.style.visibility = 'hidden';
    } else {
        body.style.visibility = 'visible';
    };
};

// Header sticky
window.onscroll = () => {
    if(window.pageYOffset > 200) {
        header.classList.add('header_sticky');
    } else {
        header.classList.remove('header_sticky');
    };
};

// Smooth scroll

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const target = link.getAttribute('href');

        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        menu.classList.remove('menu_active');
        header.classList.remove('header_active');
        body.style.visibility = 'visible';
    });
});

// Accordion
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {

        accordions.forEach(accordion => {
            accordion.classList.remove('accordion_active');
        });
        
        accordion.classList.add('accordion_active');
    });
});

// Slider
sliders.forEach(slider => {

    let position = 0;

    const container = document.querySelector('.slider__container');
    const track = slider.querySelector('.slider__track');
    const items = slider.querySelectorAll('.slider__item');
    const btnPrev = slider.querySelector('.button-prev');
    const btnNext = slider.querySelector('.button-next');
    const itemsCount = items.length
    const itemWidth = container.clientWidth / 1;
    const movePosition = 1 * itemWidth;


    items.forEach(item => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= 1 ? movePosition : itemsLeft * itemWidth;

        wedoSetPosition();
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + 1 * itemWidth) / itemWidth;

        position -= itemsLeft >= 1 ? movePosition : itemsLeft * itemWidth;

        wedoSetPosition();
    });

    function wedoSetPosition() {
        track.style.transform = `translateX(${position}px)`;
    };
});