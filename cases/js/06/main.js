const box = document.querySelector('.box');
const out = document.querySelectorAll('.out');
const btnRandom = document.querySelector('.random');
const btnCopy = document.querySelector('.copy');
const success = document.querySelector('.success');

btnRandom.onclick = () => {

    if(success.classList.contains('success_active')) {
        return
    } else {
        box.style.backgroundColor = color;
        out.forEach(item => {
            item.textContent = color;
        });

        getRandomColor();
    };
};

btnCopy.onclick = () => {

    const input = document.createElement('input');

    out.forEach(item => {
        item.appendChild(input);

        input.value = item.textContent;
        input.select();
        document.execCommand('copy');

        item.removeChild(input);
    });

    if(btnCopy.timeout) {
        clearTimeout(btnCopy.timeout);
    };

    success.classList.add('success_active');

    btnCopy.timeout = setTimeout(() => {
        btnCopy.timeout = null;
        success.classList.remove('success_active');
    }, 1000);
};


function getRandomColor () {
    color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
};

getRandomColor();


