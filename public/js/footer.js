const list = document.querySelector(".list-first");
const lisSecond = document.querySelector(".list-second");

// list-first

const pages = ["Home", "Pricing Plan", "Service", "Blog", " Our Team"];
const page = pages
  .map((item) => {
    return `<li class="iten-footer"><a target="_blank" href="">${item}</a></li>`;
  })
  .join("");
list.innerHTML = page;

// list-second

const pagesInformation = [
  "About us",
  "Contact us",
  "FAQ",
  "Tems & Conditions",
  "Privacy Policy",
];
const pageInformation = pagesInformation
  .map((item) => {
    return `<li class="iten-footer"><a target="_blank" href="">${item}</a></li>`;
  })
  .join("");

lisSecond.innerHTML = pageInformation;
