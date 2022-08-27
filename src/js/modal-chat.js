const modalMenu = document.querySelector('.modal-extra');
const openMenu = document.querySelectorAll('.modal-chat');
const closeMenu = document.querySelector('.modal__button');
const bodyModal = document.body
const preventButton = document.querySelectorAll('.prevent-btn')

preventButton.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
    })
})

openMenu.forEach((item) => {
    item.addEventListener('click', () => {
        modalMenu.classList.add('modal__open')
    })
})
closeMenu.addEventListener('click', () => {
    modalMenu.classList.remove('modal__open')
})


bodyModal.addEventListener('click', ({ target }) => {
    if (
        !target.closest(".modal") &&
        modalMenu.classList.contains("modal__open") &&
        !target.closest(".modal-chat")
    ) {
        modalMenu.classList.remove("modal__open");
    }
})




