var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  autoHeight: true,
  allowTouchMove: false,
  effect: 'fade',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})