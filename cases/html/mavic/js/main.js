let position = 0;
const slider = document.querySelector('.slider');
const container = document.querySelector('.slider__container');
const track = document.querySelector('.slider__track');
const items = document.querySelectorAll('.slider__item');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const itemsCount = items.length;
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