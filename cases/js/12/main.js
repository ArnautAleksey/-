const titleKey = document.querySelector('.title');
const nameKey = document.querySelector('.key');
const nameCode = document.querySelector('.code');
const nameWhich = document.querySelector('.which');

window.addEventListener('keydown', event => {
    event.preventDefault();

    titleKey.textContent = event.code;
    nameKey.textContent = event.key;
    nameCode.textContent = event.code;
    nameWhich.textContent = event.which;
    
    document.querySelector('.wrap').classList.add('wrap_active');
});