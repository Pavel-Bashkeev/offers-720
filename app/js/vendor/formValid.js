const phoneInput = document.querySelector('#phone');

phoneInput.addEventListener('input', function(){
  this.value = this.value.replace (/[^0-9+]/, '')
})