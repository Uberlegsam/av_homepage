var swiper = new Swiper('.main__slider', {
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'fade',
    loop: true,
    slidesPerView: 1,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })