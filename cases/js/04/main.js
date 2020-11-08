const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {

        accordions.forEach(accordion => {
            accordion.classList.remove('accordion_active');
        });
        
        accordion.classList.add('accordion_active');
    });
});