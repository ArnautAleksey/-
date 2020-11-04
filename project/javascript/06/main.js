const tabBtnItems = document.querySelectorAll('.tab__nav-btn');
const tabContentItems = document.querySelectorAll('.tab__content');

tabBtnItems.forEach(e => {
    e.addEventListener('click', activeTab);
});

function activeTab() {
    tabBtnItems.forEach(e => {
        e.classList.remove('tab__nav-btn_active');
    });
    this.classList.add('tab__nav-btn_active');
    
    const tabName = this.getAttribute('data-tab');

    activeTabContent(tabName);
};

function activeTabContent(tabName) {
    tabContentItems.forEach(item => {
        if(item.classList.contains(tabName)) {
            item.classList.add('tab__content_active');
        } else {
            item.classList.remove('tab__content_active');
        };
    });
};
