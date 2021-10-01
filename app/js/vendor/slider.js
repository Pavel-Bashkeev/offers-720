const slider = document.querySelector('.slider .swiper-container');

const sliderProduct = new Swiper(slider, {
  spaceBetween: 10,
  pagination: {
    el: '.slide-pagination',
    clickable:true,
  },
})