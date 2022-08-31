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

document.addEventListener('DOMContentLoaded',
  () => {
    onloadScreen();
    window.onscroll = btnToggle;
    btn.onclick = scrollToTop;
    hamburger.onclick = mobileMenu;
  }
);