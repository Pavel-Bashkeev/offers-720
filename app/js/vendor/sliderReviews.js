const sliderSecond = document.querySelector('.slider-reviews .swiper-container');

const sliderReviews = new Swiper(sliderSecond,{
  spaceBetween: 10,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
})