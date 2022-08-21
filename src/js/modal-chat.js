const modalMenu = document.querySelector('.modal-extra');
const openMenu = document.querySelectorAll('.modal-chat');
const closeMenu = document.querySelector('.modal__button');

openMenu.forEach((item) => {
    item.addEventListener('click', () => {
        modalMenu.classList.add('modal__open')
    })
})
closeMenu.addEventListener('click', () => {
    modalMenu.classList.remove('modal__open')
})




