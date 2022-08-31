// <!-- <footer class="footer"> -->
//     <!--   <div class="footer-left"> -->
//     <!--     <p>Created By SPECIAL TEAM MEMBER ❤</p> -->
//     <!--   </div> -->
//     <!--   <div class="footer-right"> -->
//     <!--     <ul> -->
//     <!--       <li> -->
//     <!--         <a -->
//     <!--           class="card-deskripsi" -->
//     <!--           target="_blank" -->
//     <!--           href="https://github.com/arif-budianto/special-team" -->
//     <!--           alt="Github" -->
//     <!--           >Github</a -->
//     <!--         > -->
//     <!--       </li> -->
//     <!--       <li> -->
//     <!--         <a target="_blank" alt="Discord">Discord</a> -->
//     <!--       </li> -->
//     <!--     </ul> -->
//     <!--   </div> -->
//     <!-- </footer> -->
//

const linkMenu = [
  {
    name: 'Discord',
    href: '',
    logo: ['fa-brands', 'fa-discord'],
  },
  {
    name: 'Github',
    href: '',
    logo: ['fa-brands', 'fa-github'],
  },
];

const footerContainer = document.getElementById('footer');
const divEl = document.createElement('div');
const leftBrandEl = document.createElement('h2');
const ulEl = document.createElement('ul');
const logo = document.createElement('i');

// Khusus styling
footerContainer.style.backgroundColor = 'red';
footerContainer.style.padding = '25px';
footerContainer.style.color = 'white';
ulEl.style.display = 'flex';
ulEl.style.flexDirection = 'row';
ulEl.style.alignItems = 'center';
divEl.style.display = 'flex';
divEl.style.flexDirection = 'row';
divEl.style.justifyContent = 'space-between';

leftBrandEl.innerText = 'Created by Special Team Member :logo-lope-lope:';

// Buat komponen list menu
linkMenu.forEach((menu) => {
  const liEl = document.createElement('li');
  const link = document.createElement('a');
  link.target = '_blank';
  link.href = menu.href;
  link.innerText = menu.name;
  const logoEl = document.createElement('i');
  logoEl.classList.add(...menu.logo);
  link.append(logoEl);
  liEl.append(link);
  ulEl.append(liEl);
});

// Render semua
divEl.append(...[leftBrandEl, ulEl]);
footerContainer.append(divEl);
