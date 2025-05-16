// LAB 316.1.1
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
// const menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
// ];

// Part 1: Getting Started
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
const h1 = document.createElement("h1");
h1.textContent = "DOM Manipulation";
mainEl.appendChild(h1);
mainEl.classList.add("flex-ctr");

// Part 2: Creating a Menu Bar
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3: Adding Menu Buttons
menuLinks.forEach((link) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});

// Part 3 of Lab2: Creating the Submenu
let subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//Part4: Adding Menu Interaction
let topMenuLinks = topMenuEl.childNodes;
topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (!"a") {
    return;
  }
  console.log(event.target);
});

topMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
   topMenuLinks.forEach((z)=>{
    z.classList.remove('active');
   })
    link.classList.add("active");
    console.log(link)
  });

});
