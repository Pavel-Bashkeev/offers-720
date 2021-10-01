const btnItems = document.querySelectorAll('.hero-box__btn');
const productImgs = document.querySelectorAll('.hero-choose__product');


btnItems.forEach(item => {
  item.addEventListener('click', ()=>{
    for(let i = 0; i < btnItems.length; i++){
      btnItems[i].classList.remove('active');
      if(item.dataset.choice == btnItems[i].dataset.choice){
        btnItems[i].classList.add('active');
      }
      console.log(item.dataset.choice);
      console.log(btnItems[i].dataset.choice);
    }
    item.classList.add('active');
    for(let i = 0; i < productImgs.length; i++){
      productImgs[i].src = `./images/dest/products/${item.dataset.choice}.png`
    }
    
  })
})
