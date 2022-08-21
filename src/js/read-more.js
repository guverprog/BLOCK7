const readMore = document.querySelector('.intro__more')
readMore.addEventListener('click', () => {
    moreTextHandler()
})
const moreTextHandler = () => {
    const moreText = document.querySelector('.more-text')
    readMore.classList.toggle('button-clicked')
    if (moreText.textContent.length < 1) {
        moreText.textContent = `Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna
          aliqua. Est sit amet facilisis magna etiam
          tempor orci eu lobortis. Vitae sapien
          pellentesque habitant morbi tristique
          senectus et netus. Dignissim diam quis enim lobortis scelerisque fermentum dui.
          Feugiat sed lectus vestibulum mattis. Hac habitasse
          platea dictumst quisque sagittis purus. Eget lorem dolor sed`;
        readMore.textContent = 'Скрыть'
    }
    else {
        moreText.textContent = ''
        readMore.textContent = 'Читать далее'
    }
}