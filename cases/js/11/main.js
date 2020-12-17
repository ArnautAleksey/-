const colors = document.querySelectorAll('.color');
const refresh = document.querySelector('.refresh');
const copied = document.querySelector('.copied');

refresh.addEventListener('click', changeColor);

function changeColor() {
    colors.forEach(color => {
        const hex = color.querySelector('.hex');

        hex.innerHTML = randomColor();
        color.style.backgroundColor = hex.textContent

        color.addEventListener('click', () => {

            const input = document.createElement('input');
            color.appendChild(input);
            input.value = color.textContent;
            input.select();
            document.execCommand('copy');
            color.removeChild(input);

            if(color.timeout) {
                clearTimeout(color.timeout);
            };

            copied.classList.add('copied_active');

            color.timeout = setTimeout(() => {
                color.timeout = null;
                copied.classList.remove('copied_active');
            },1000);
        });
    });
};

function randomColor() {
    return '#' + Math.random().toString(16).substr(2,6);
};

window.onload = changeColor();
