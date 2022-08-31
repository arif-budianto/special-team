// <header>
//       <div class="logo">
//         <article>
//           <h1 hidden>Special Team</h1>
//           <img src="../assets//image/special-team.png" alt="S.T" />
//         </article>
//       </div>
//       <nav>
//         <ul>
//           <li>
//             <a href="../../index.html"
//               ><img
//                 src="../assets/icon/icon-home.png"
//                 alt="home"
//                 width="20px"
//               />Home</a
//             >
//           </li>
//           <li>
//             <a href="../pages/about.html"
//               ><img
//                 src="../assets/icon/icon-about.png"
//                 alt="home"
//                 width="20px"
//               />About</a
//             >
//           </li>
//           <li>
//             <a href="../pages/contact.html"
//               ><img
//                 src="../assets/icon/icon-contact.png"
//                 alt="home"
//                 width="20px"
//               />Contact</a
//             >
//           </li>
//           <li>
//             <a href="../pages/member.html"
//               ><img
//                 src="../assets/icon/icon-member.png"
//                 alt="home"
//                 width="20px"
//               />Member</a
//             >
//           </li>
//         </ul>
//       </nav>
//       <a
//         class="tombol-btn"
//         target="_blank"
//         href="https://discord.com/invite/cuyuniverse"
//       >
//         <div>
//           <img
//             src="../icon/icon-follow.png"
//             alt="Follow us icon"
//             width="15"
//             style="margin-left: 5px"
//           />
//           Join us
//         </div>
//       </a>
//     </header>
//

const navbarContainer = document.querySelector('#navbar');
const headerEl = document.createElement('header');
const logoEl = document.createElement('div');
const navigationEl = document.createElement('nav');

// Khusus styling
navigationEl.style.backgroundColor = 'red';

// Buat component navigasi
const ulRootEl = document.createElement('ul');
const linkMenu = [
  {
    href: 'index.html',
    icon: 'icon-home.png',
    alt: 'Home',
  },
  {
    href: 'about.html',
    icon: 'icon-about.png',
    alt: 'About',
  },
  { href: 'contact.html', icon: 'icon-contact.png', alt: 'Contact' },
  {
    href: 'member.html',
    icon: 'icon-member.png',
    alt: 'Member',
  },
];

// Proses rendering
linkMenu.forEach((menu) => {
  const liEl = document.createElement('li');
  const linkEl = document.createElement('a');
  const iconEl = document.createElement('img');

  linkEl.href = menu.href.includes('index')
    ? '../../' + menu.href
    : '../pages/' + menu.href;
  iconEl.src = '../assets/icon/' + menu.icon;
  iconEl.alt = menu.alt;

  linkEl.appendChild(iconEl);
  liEl.appendChild(linkEl);
  ulRootEl.appendChild(liEl);
  navigationEl.appendChild(ulRootEl);
});

// Testing
navbarContainer.appendChild(navigationEl);
