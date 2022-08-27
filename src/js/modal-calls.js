const modalMenuCall = document.querySelector('.modal-extra-call');
const openMenuCall = document.querySelectorAll('.modal-call');
const closeMenuCall = document.querySelector('.modal__button.modal__button-call');
const bodyModal = document.body

openMenuCall.forEach((item) => {
    item.addEventListener('click', () => {
        modalMenuCall.classList.add('modal__open')
    })
})
closeMenuCall.addEventListener('click', () => {
    modalMenuCall.classList.remove('modal__open')
})

bodyModal.addEventListener('click', ({ target }) => {
    if (
        !target.closest(".modal") &&
        modalMenuCall.classList.contains("modal__open") &&
        !target.closest(".modal-call")
    ) {
        modalMenuCall.classList.remove("modal__open");
    }
})