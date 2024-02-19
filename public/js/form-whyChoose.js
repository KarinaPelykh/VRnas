const labels = document.querySelectorAll(".active ");
const selects = document.querySelectorAll(".select-box");
const buttons = document.querySelectorAll(".button-select");

fetch("../data/forma.json")
  .then((res) => res.json())
  .then((data) => {
    labels.forEach((label, index) => {
      label.addEventListener("click", () => {
        selects[
          index
        ].innerHTML = `<p class="box-text">${data[index].description}</p>`;
        selects[index].classList.add("box-open");
      });
    });
  });
