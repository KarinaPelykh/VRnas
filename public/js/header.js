const links = document.querySelectorAll(".js-active-link");
const currentLocation = window.location.href;
const homeLink = document.querySelector(".item > a");
homeLink.classList.add("active-link");

links.forEach((link) => {
  const linkURL = link.href;

  if (currentLocation === linkURL) {
    link.classList.add("active-link");
  }
  if (!currentLocation.includes("index.html")) {
    homeLink.classList.remove("active-link");
  }
  if (currentLocation.includes("contact_us.html")) {
    link.classList.remove("border-gradient");
  }
});
