const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseleave', stopRotate);

    function startRotate (event) {
        const cardItem = card.querySelector('.item');
        const halfHeight = cardItem.offsetWidth / 2;

        cardItem.style.transform = 'rotateX('+ - (event.offsetY - halfHeight) / 10 +'deg) rotateY('+ (event.offsetX - halfHeight) / 10 +'deg)';
    };

    function stopRotate() {
        const cardItem = card.querySelector('.item');

        cardItem.style.transform = 'rotate(0)';
    };
});

