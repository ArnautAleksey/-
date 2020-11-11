const out = document.querySelector('.out');
const firstNumber = document.querySelector('.first-number');
const lastNumber = document.querySelector('.last-number');
const button = document.querySelector('.button');

button.addEventListener('click', () => {

    let min = 0;
    let max = 100;

    if(firstNumber.value != '') {min = parseInt(firstNumber.value)} else {firstNumber.value = '0'};
    if(lastNumber.value != '') {max = parseInt(lastNumber.value)} else {lastNumber.value = '100'};

    if(min === max) {
        max++;
    } else if (min >= max) {
        max = min + 1;
    };
    
    firstNumber.value = min;
    lastNumber.value = max;

    out.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
});