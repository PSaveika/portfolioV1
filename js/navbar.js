const app = (() => {
    let body;
    let menu;
    let menuItems;

    const init = () => {
        body = document.querySelector('body');
        menu = document.querySelector('.navbar-icon');
        menuItems = document.querySelectorAll('.navbar-list-item');
        applyListeners();
    };

    const applyListeners = () => {
        menu.addEventListener('click', () => toggleClass(body, 'navbar-active'));
    };

    const toggleClass = (element, stringClass) => {
        if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
    };

    init();
})();