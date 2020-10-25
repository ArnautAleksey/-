let btns = document.querySelectorAll('.nav__btn');
let cards = document.querySelectorAll('.card');

function filter (category, items) {
    items.forEach(item => {
        let cardFilter = !item.classList.contains(category);
        let showAll = category === 'all';
        if (cardFilter && !showAll) {
            item.classList.add('hidden');
        } else {
            item.classList.remove('hidden');
        };
    });
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        filter(btn.dataset.filter, cards);
    });
});
