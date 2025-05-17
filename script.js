// Part One
// LAB 316.1.1
// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
const h1 = document.createElement('h1');
h1.textContent = 'DOM Manipulation';
mainEl.appendChild(h1);
mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

menuLinks.forEach(link => {
    const a = document.createElement('a');
    a.setAttribute('href', link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);
});

// Part Two
// LAB 316.3.1
// Part 3: Creating the Submenu
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = 0;

// Part 4: Adding Menu Interaction
const topMenuLinks = topMenuEl.childNodes;

topMenuEl.addEventListener('click', (event) => {
    event.preventDefault();
    let targetEl = event.target;
    if (targetEl.nodeName !== 'A') return;
    console.log(event.target);

    // remove the active class from each <a> element 
    topMenuLinks.forEach(e => {
        if (e !== targetEl) e.className = '';
    });
    // add the active class to the current <a> element
    const isActive = targetEl.classList.toggle('active');

    // Part 5: Adding Submenu Interaction
    if (targetEl.textContent !== 'about' && isActive) {
        subMenuEl.style.top = '100%';
    } else {
        subMenuEl.style.top = '0';
    }

    if (targetEl.textContent === 'about') {
        mainEl.textContent = targetEl.textContent.toUpperCase();
        return;
    }
    let subLinks = {};
    menuLinks.forEach(link => {
        if (link.text === targetEl.textContent) {
            subLinks = link.subLinks;
        }
    })
    buildSubMenu(subLinks);
});

function buildSubMenu(subLinks) {
    const fragment = document.createDocumentFragment();
    
    subLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        fragment.appendChild(a);
    });
    
    subMenuEl.innerHTML = '';
    subMenuEl.appendChild(fragment);
}

subMenuEl.addEventListener('click', (event) => {
    event.preventDefault();
    let targetEl = event.target;

    if (targetEl.nodeName !== 'A') return;
    
    subMenuEl.style.top = '0';
    topMenuLinks.forEach(e => e.classList.remove('active'));
    mainEl.textContent = targetEl.textContent.toUpperCase();
})
// LAB 316.1.1
// // Menu data structure
// var menuLinks = [
//   { text: "about", href: "/about" },
//   {
//     text: "catalog",
//     href: "#",
//     subLinks: [
//       { text: "all", href: "/catalog/all" },
//       { text: "top selling", href: "/catalog/top" },
//       { text: "search", href: "/catalog/search" },
//     ],
//   },
//   {
//     text: "orders",
//     href: "#",
//     subLinks: [
//       { text: "new", href: "/orders/new" },
//       { text: "pending", href: "/orders/pending" },
//       { text: "history", href: "/orders/history" },
//     ],
//   },
//   {
//     text: "account",
//     href: "#",
//     subLinks: [
//       { text: "profile", href: "/account/profile" },
//       { text: "sign out", href: "/account/signout" },
//     ],
//   },
// ];
// // const menuLinks = [
// //     { text: 'about', href: '/about' },
// //     { text: 'catalog', href: '/catalog' },
// //     { text: 'orders', href: '/orders' },
// //     { text: 'account', href: '/account' },
// // ];

// // Part 1: Getting Started
// const mainEl = document.querySelector("main");
// mainEl.style.backgroundColor = "var(--main-bg)";
// const h1 = document.createElement("h1");
// h1.textContent = "DOM Manipulation";
// mainEl.appendChild(h1);
// mainEl.classList.add("flex-ctr");

// // Part 2: Creating a Menu Bar
// const topMenuEl = document.getElementById("top-menu");
// topMenuEl.style.height = "100%";
// topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// topMenuEl.classList.add("flex-around");

// // Part 3: Adding Menu Buttons
// menuLinks.forEach((link) => {
//   const a = document.createElement("a");
//   a.setAttribute("href", link.href);
//   a.textContent = link.text;
//   topMenuEl.appendChild(a);
// });

// // Part 3 of Lab2: Creating the Submenu
// let subMenuEl = document.querySelector("#sub-menu");
// subMenuEl.style.height = "100%";
// subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// subMenuEl.classList.add("flex-around");
// subMenuEl.style.position = "absolute";
// subMenuEl.style.top = "0";

// //Part4: Adding Menu Interaction
// let topMenuLinks = topMenuEl.childNodes;
// topMenuEl.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (!"a") {
//     return;
//   }
//   console.log(event.target.textContent);
// });

// topMenuLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     link.classList.toggle("active");
   

//     topMenuLinks.forEach((z)=>{
//       // if proptery in z does not equal proptery of link, which means they are not the same the run 86
//     z.classList.remove('active');
//    })   
//    console.log(link)
   
//   });

// });
