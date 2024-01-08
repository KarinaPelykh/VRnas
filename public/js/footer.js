const list = document.querySelector(".list-first");
const lisSecond = document.querySelector(".list-second");

// list-first

const firstList = [
  { page: "Home", route: "./index.html" },
  { page: "Pricing Plan", route: "./pricing_plan.html" },
  { page: "Service", route: "./service.html" },
  { page: "Blog", route: "./blog.html" },
  { page: "Our Team ", route: "./our_team.html" },
];

const pageQuicklink = firstList
  .map((item) => {
    return `<li class="iten-footer"><a href="${item.route}">${item.page}</a></li>`;
  })
  .join("");

list.innerHTML = pageQuicklink;

// list-second

const pagesInformation = [
  { page: "About us ", route: "./about_us.html" },
  { page: "Contact us", route: "./contact_us.html" },
  { page: "FAQ", route: "./faq.html" },

  { page: "Tems & Conditions", route: "./tems_conditions.html" },
  { page: "Privacy Policy", route: "./privacy_policy.html" },
];
const pageInformation = pagesInformation
  .map((item) => {
    return `<li class="iten-footer"><a href="${item.route}">${item.page}</a></li>`;
  })
  .join("");

lisSecond.innerHTML = pageInformation;
