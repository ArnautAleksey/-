const open = document.querySelector('.button');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

open.onclick = () => {
    modal.classList.add('modal_active');

    close.onclick = () => {
        modal.classList.remove('modal_active');
    }
    overlay.onclick = () => {
        modal.classList.remove('modal_active');
    }
}