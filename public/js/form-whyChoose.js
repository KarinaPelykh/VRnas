const labels = document.querySelectorAll(".active ");
const selects = document.querySelectorAll(".select-box");
const buttons = document.querySelectorAll(".button-select");

fetch("../data/forma.json")
  .then((res) => res.json())
  .then((data) => {
    labels.forEach((label, index) => {
      label.addEventListener("click", () => {
        // buttons.forEach((button) => {
        //   button.addEventListener("click", () => {
        //     button.style.transform = "rotate(0deg)";
        //   });
        // });
        selects[
          index
        ].innerHTML = `<p class="box-text">${data[index].description}</p>`;
      });
    });
  });
