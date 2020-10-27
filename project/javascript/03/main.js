const out = document.querySelector('.out');
const buttons = document.querySelectorAll('.btn');
let count = 0;

buttons.forEach(button => {
    button.addEventListener('click', event => {
        let target = event.currentTarget.classList;

        if(target.contains('button-minus')) {
            --count;
        } else if(target.contains('button-reset')) {
            count = 0;
        } else if(target.contains('button-plus')) {
            ++count;
        };

        if(count == 0) {
            out.style.color = 'black';
        } else if(count > 0) {
            out.style.color = 'green';
        } else if(count< 0) {
            out.style.color = 'red';
        };

        out.textContent = count;
    });
});