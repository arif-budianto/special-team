const navbarContainer = document.getElementById('navbar');
const headerEl = document.createElement('header');
const navigationEl = document.createElement('nav');
const ulRootEl = document.createElement('ul');

// Khusus styling outer component
navbarContainer.style.backgroundColor = 'red';
navbarContainer.style.display = 'flex';
navbarContainer.style.flexDirection = 'row';
navbarContainer.style.justifyContent = 'space-between';
navbarContainer.style.alignItems = 'center';
ulRootEl.style.display = 'flex';
ulRootEl.style.flexDirection = 'row';
ulRootEl.style.justifyContent = 'flex-end';

// Buat component navigasi
const linkMenu = [
  {
    href: 'index.html',
    icon: ['fa-solid', 'fa-house'],
    alt: 'Home',
  },
  {
    href: 'about.html',
    icon: ['fa-solid', 'fa-message'],
    alt: 'About',
  },
  {
    href: 'contact.html',
    icon: ['fa-solid', 'fa-address-card'],
    alt: 'Contact',
  },
  {
    href: 'member.html',
    icon: ['fa-solid', 'fa-users'],
    alt: 'Member',
  },
];

// Render menu navigasi
linkMenu.forEach((menu) => {
  const liEl = document.createElement('li');
  const linkEl = document.createElement('a');
  const iconEl = document.createElement('i');

  linkEl.style.paddingInline = '5px';
  linkEl.href = menu.href.includes('index')
    ? '../../' + menu.href
    : '../pages/' + menu.href;
  iconEl.style.paddingInline = '10px';
  iconEl.classList.add(...menu.icon);
  // iconEl.style.width = '20px';

  const text = document.createTextNode(menu.alt);
  linkEl.prepend(text);
  linkEl.prepend(iconEl);
  liEl.appendChild(linkEl);
  ulRootEl.appendChild(liEl);
});
navigationEl.appendChild(ulRootEl);

// Buat komponen logo
const logoEl = document.createElement('div');
logoEl.classList.add('logo');
const article = document.createElement('article');
const logoTitle = document.createElement('h1');
logoTitle.hidden = true;
logoTitle.innerHTML = 'Special Team';
const logoImage = document.createElement('img');
logoImage.src = '../assets/image/special-team.png';

// Render komponen logo
article.append(...[logoTitle, logoImage]);
logoEl.append(article);

// Render komponen "join us"
const linkJoinUs = document.createElement('a');
linkJoinUs.href = '';
linkJoinUs.target = '_blank';
linkJoinUs.classList.add('tombol-btn');
linkJoinUs.innerText = 'Join Us!';
const joinUsLogo = document.createElement('img');
joinUsLogo.style.marginRight = '10px';
joinUsLogo.src = '../assets/icon/icon-follow.png';
joinUsLogo.style.width = '2rem';
joinUsLogo.style.height = '2rem';
linkJoinUs.prepend(joinUsLogo);

// Render semua
navbarContainer.append(...[logoEl, navigationEl, linkJoinUs]);
