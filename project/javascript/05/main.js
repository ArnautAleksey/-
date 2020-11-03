const box = document.querySelector('.box');
const btnGenerate = document.querySelector('.btn-generate');
const btnCopy = document.querySelector('.btn-copy');
const success = document.querySelector('.success');
let copyText = document.querySelector('.copy-text');

btnGenerate.addEventListener('click', () => {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    box.style.backgroundColor = color;
    copyText.value = color;
});

btnCopy.addEventListener('click', () => {
    copyText.select();
    document.execCommand("copy");

    success.classList.add('success_active');

    setTimeout(() => {
        success.classList.remove('success_active');
    }, 1000);
});