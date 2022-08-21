const modalMenuCall = document.querySelector('.modal-extra-call');
const openMenuCall = document.querySelectorAll('.modal-call');
const closeMenuCall = document.querySelector('.modal__button.modal__button-call');

openMenuCall.forEach((item) => {
    item.addEventListener('click', () => {
        modalMenuCall.classList.add('modal__open')
    })
})
closeMenuCall.addEventListener('click', () => {
    modalMenuCall.classList.remove('modal__open')
})
console.log(modalMenuCall)