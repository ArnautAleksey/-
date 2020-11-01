const accordeons = document.querySelectorAll('.accordion');

accordeons.forEach(accordeon => {
    accordeon.addEventListener('click', () => {
        
        accordeons.forEach(accordeon => {
            accordeon.classList.remove('accordion_active');
        });
        accordeon.classList.add('accordion_active');
    });
});