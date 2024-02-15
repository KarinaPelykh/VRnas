const links = document.querySelectorAll(".js-active-link");
const currentLocation = window.location.href;
links.forEach((link) => {
  const linkURL = link.href;

  if (currentLocation === linkURL) {
    link.classList.add("active-link");
  }
  if (currentLocation.includes("contact_us.html")) {
    link.classList.remove("border-gradient");
  }
});
