const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const btn = document.querySelector('.btn-gotop')
const tabbawah = document.querySelector('.tentang')
const container = document.querySelector('.container-inti');
hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function transitionLayer(){
  const test = document.querySelector('.test')
  const layer = document.querySelector('.layer');
  container.style.display = 'none';
  layer.style.display = 'block';
   setTimeout(()=>{
     layer.style.display = 'none';
     container.style.display = 'block';
   },8000)
   setTimeout(() => {
     test.textContent= 'Semoga Anda Nyaman Disini'
   }, 4000);
  }
function scrollToTop(){
 if(document.body.scroll>20  ||  document.documentElement.scrollTop > 20){
  btn.style.display='block'
 }else{
  btn.style.display='none'
 }
}
window.addEventListener('scroll', scrollToTop)
btn.addEventListener('click',()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})
window.addEventListener('DOMContentLoaded',transitionLayer)
console.log('haloo')