const btnItems = document.querySelectorAll('.hero-box__btn');
const productImg = document.querySelector('.hero-choose__product');


btnItems.forEach(item => {
  item.addEventListener('click', ()=>{
    for(let i = 0; i < btnItems.length; i++){
      btnItems[i].classList.remove('active');
    }
    item.classList.add('active');

    productImg.src = `./images/dest/products/${item.dataset.choice}.png`
  })
})
