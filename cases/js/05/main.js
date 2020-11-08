const buttons = document.querySelectorAll('.button');
const contents = document.querySelectorAll('.content');

buttons.forEach(button => {
    button.addEventListener('click', activeTab);
});

function activeTab() {

    buttons.forEach(button => {
        button.classList.remove('button_active');
    });
    this.classList.add('button_active');

    const tabName = this.getAttribute('data-tab');

    activeTabContent(tabName);
};

function activeTabContent(tabName) {
    contents.forEach(content => {
        if(content.classList.contains(tabName)) {
            content.classList.add('content_active')   ;
        } else {
            content.classList.remove('content_active')  ;
        };
    });
};