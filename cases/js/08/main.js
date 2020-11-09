const text = document.querySelector('.text');
const degree = document.querySelector('.degree');
const out = document.querySelector('.out');
const val1 = document.querySelector('.val1');
const val2 = document.querySelector('.val2');
const box = document.querySelector('.box');
const btnCopy = document.querySelector('.copy');
const buttonRandom = document.querySelector('.button-random');
let color1;
let color2;
let degrees;
let linearGradient;

function changeBackgroundColor () {
    val1.value = color1;
    val2.value = color2;
    out.textContent = degrees;
    degree.value = degrees;
    degrees = out.textContent = degree.value;

    linearGradient = 'linear-gradient(' + degrees + 'deg, ' + val1.value + ', ' + val2.value + ')';

    box.style.background = linearGradient;

    randomColor();
    randomDegrees();
}

document.querySelector('.container').addEventListener('input', () => {
    linearGradient = 'linear-gradient(' + degrees + 'deg, ' + val1.value + ', ' + val2.value + ')';
    box.style.backgroundImage = linearGradient;
    degrees = out.textContent = degree.value;
});

out.onclick = () => {
    degree.classList.toggle('degree_active');

    box.onclick = () => {
        degree.classList.remove('degree_active');
    };
};

buttonRandom.onclick = () => {
    changeBackgroundColor();
};

function randomColor () {
    color1 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
    color2 = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
};

function randomDegrees () {
    degrees = Math.floor(Math.random() * 361);
};

btnCopy.onclick = () => {
    text.textContent = 'copied';
    const area = document.createElement('textarea');

    area.value = 'background-color: ' + val1.value + ';' + '\n' + 'background-image: ' + linearGradient + ';';
    btnCopy.appendChild(area);
    area.select();
    document.execCommand('copy');
    btnCopy.removeChild(area);

    setTimeout(() => {
        text.textContent = 'copy';
    },1000);
};

randomColor();
randomDegrees();
window.onload = changeBackgroundColor();