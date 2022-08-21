const body = document.body

const burgerMenu = document.querySelector('.extra');


const openMenu = document.querySelector('.menu__icons-burger');

const closeMenu = document.querySelector('.header__icons-close');
openMenu.addEventListener('click', () => {
    burgerMenu.classList.add('mobile-menu__open')
})
closeMenu.addEventListener('click', () => {
    burgerMenu.classList.remove('mobile-menu__open')
})

body.addEventListener('click', ({ target }) => {
    if (
        !target.closest(".widget") &&
        burgerMenu.classList.contains("mobile-menu__open") &&
        !target.closest(".menu__icons-burger")
    ) {
        burgerMenu.classList.remove("mobile-menu__open");
    }

})


