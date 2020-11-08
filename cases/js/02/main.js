const buttonOpen = document.querySelector('.button__open');
const buttonClose = document.querySelector('.button__close');
const modal = document.querySelector('.modal');

buttonOpen.onclick = () => {
    modal.classList.add('modal_active');
};

buttonClose.onclick = () => {
    modal.classList.remove('modal_active');
};