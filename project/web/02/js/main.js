const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.header__nav-link');
const linkMine = document.querySelector('.header__logo-link');
const body = document.querySelector('body');
const accordeons = document.querySelectorAll('.wedo__accordion-item');
let position = 0;
const wedoContainer = document.querySelector('.wedo__slider-container');
const wedoTrack = document.querySelector('.wedo__slider-track');
const wedoItems = document.querySelectorAll('.wedo__slider-item');
const wedoBtnPrev = document.querySelector('.wedo__button-prev');
const wedoBtnNext = document.querySelector('.wedo__button-next');
const wedoItemsCount = wedoItems.length
const wedoItemWidth = wedoContainer.clientWidth / 1;
const wedoMovePosition = 1 * wedoItemWidth;
const workContainer = document.querySelector('.works__slider-container');
const workTrack = document.querySelector('.works__slider-track');
const workItems = document.querySelectorAll('.works__slider-item');
const workBtnPrev = document.querySelector('.works__button-prev');
const workBtnNext = document.querySelector('.works__button-next');
const workItemsCount = workItems.length
const workItemWidth = workContainer.clientWidth / 1;
const workMovePosition = 1 * workItemWidth;

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

// Webo slider
wedoItems.forEach(item => {
    item.style.minWidth = `${wedoItemWidth}px`;
});

wedoBtnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / wedoItemWidth;

    position += itemsLeft >= 1 ? wedoMovePosition : itemsLeft * wedoItemWidth;

    wedoSetPosition();
});

wedoBtnNext.addEventListener('click', () => {
    const itemsLeft = wedoItemsCount - (Math.abs(position) + 1 * wedoItemWidth) / wedoItemWidth;

    position -= itemsLeft >= 1 ? wedoMovePosition : itemsLeft * wedoItemWidth;

    wedoSetPosition();
});

function wedoSetPosition() {
    wedoTrack.style.transform = `translateX(${position}px)`;
};

// Work slider
workItems.forEach(item => {
    item.style.minWidth = `${workItemWidth}px`;
});

workBtnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / workItemWidth;

    position += itemsLeft >= 1 ? workMovePosition : itemsLeft * workItemWidth;

    workSetPosition();
});

workBtnNext.addEventListener('click', () => {
    const itemsLeft = workItemsCount - (Math.abs(position) + 1 * workItemWidth) / workItemWidth;

    position -= itemsLeft >= 1 ? workMovePosition : itemsLeft * workItemWidth;

    workSetPosition();
});

function workSetPosition() {
    workTrack.style.transform = `translateX(${position}px)`;
};