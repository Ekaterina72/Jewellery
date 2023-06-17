import Swiper from '../../vendor/swiper';

const initSwiper = () => {
  if (document.querySelector('.swiper')) {

    const swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        renderBullet: (index, className) => {
          return `<span class= ${className} > ${(index + 1)} </span>`;
        },
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          pagination: {
            clickable: false,
            type: 'fraction',
          },
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          pagination: {
            clickable: true,
            type: 'bullets',
          },
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          pagination: {
            clickable: true,
            type: 'bullets',
          },
        },
      },
    });

    swiper.init();
  }
};

export {initSwiper};
