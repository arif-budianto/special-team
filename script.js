const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const btn = document.querySelector('.btn-gotop');
const tabbawah = document.querySelector('.tentang');
const container = document.querySelector('.root');
const layer = document.querySelector('.onload-screen');

// Pelatuk hamburger
function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// Manipulasi elemen ketika web baru termuat
function onloadScreen() {
  function toggleContainer() {
    const isHidden = !container.style.display;
    if (isHidden) {
      container.style.display = 'none';
      return;
    }
    container.style.display = null;
    layer.textContent = 'Semoga Anda Tetap Bahagia';
  }
  toggleContainer();
  setTimeout(toggleContainer, 2222);
  setTimeout(() => layer.remove(), 4800);
}

// Tombol scroll ke atas, menampilkan
function btnToggle() {
  const isScrolled = document.body.scroll > 20 || document.documentElement.scrollTop > 20;
  if (isScrolled) {
    btn.style.cssText = 'opacity: 1; visibility: visible;';
    return;
  }
  btn.style.cssText = 'opacity: 0; visibility: hidden;';
}

// Tombol scroll ke atas, aksi
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

// Aksi ketika DOM berhasil terload
document.addEventListener('DOMContentLoaded',
  function () {
    onloadScreen();
    window.onscroll = btnToggle;
    btn.onclick = scrollToTop;
    hamburger.onclick = mobileMenu;
  }
);

// Source code lama, Apriza Prasetio jadikan komentar dan ganti dengan source code di atas.

// function transitionLayer() {
//   const test = document.querySelector('.test')
//   const layer = document.querySelector('.layer');
//   container.style.display = 'none';
//   layer.style.display = 'block';
//   setTimeout(() => {
//     layer.style.display = 'none';
//     container.style.display = 'block';
//   }, 8000)
//   setTimeout(() => {
//     test.textContent = 'Semoga Anda Nyaman Disini'
//   }, 4000);
// }

// function scrollToTop() {
//   if (document.body.scroll > 20 || document.documentElement.scrollTop > 20) {
//     btn.style.display = 'block'
//   } else {
//     btn.style.display = 'none'
//   }
// }
// window.addEventListener('scroll', scrollToTop)
// btn.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'
//   });
// })
// window.addEventListener('DOMContentLoaded', transitionLayer)
// console.log('haloo')