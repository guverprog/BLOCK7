import Swiper, { Pagination } from 'swiper/swiper-bundle';
let catalogSlider = null;

const catalogSliderInit = () => {
    if (!catalogSlider) {
        catalogSlider = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            touchRatio: 1,
            grabCursor: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            mousewheel: {
                sensitivity: 1,
                eventsTarget: '.cards'
            },
            freeMode: true,
            speed: 500,
            breakpoints: {
                750: {
                    slidesPerView: 2.9,
                    spaceBetween: 40,
                },
                700: {
                    slidesPerView: 2.75,
                    spaceBetween: 40,
                },
                650: {
                    slidesPerView: 2.7,
                    spaceBetween: 40,
                },
                600: {
                    slidesPerView: 2.3,
                    spaceBetween: 40,
                },
                550: {
                    slidesPerView: 2.2,
                    spaceBetween: 40,
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                450: {
                    slidesPerView: 1.83,
                    spaceBetween: 40,
                },
                400: {
                    slidesPerView: 1.42,
                    spaceBetween: -20,
                },
                370: {
                    slidesPerView: 1.38,
                    spaceBetween: -5,
                },
                320: {
                    slidesPerView: 1.32,
                    spaceBetween: 30,
                }
            }

        });
    }
};

const renderSwiper = () => {
    let windowWidth = document.body.clientWidth;
    const mediaQuerySize = 767;

    if (windowWidth <= mediaQuerySize) {
        catalogSliderInit();
    } else {
        catalogSliderDestroy();
    }
};

const catalogSliderDestroy = () => {
    if (catalogSlider) {
        catalogSlider.forEach((e) => {
            e.destroy();
        });
        catalogSlider = null;
    }
};

window.addEventListener("resize", renderSwiper);

renderSwiper();