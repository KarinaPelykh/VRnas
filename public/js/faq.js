const ref = {
  buttonAll: document.querySelector(".js-button-all"),
  buttonVR: document.querySelector(".js-button-vr"),
  buttonPricing: document.querySelector(".js-button-pricing"),
  item: document.querySelector(".item-question"),
  list: document.querySelector(".list-question"),
};

const functionAddAnswer = (event) => {
  const clickOnLi = event.target.closest(".item-question");
  clickOnLi.classList.add("anim-item");
  const divContainer = clickOnLi.querySelector(".answer");
  const svg = clickOnLi.querySelector(".svg-question");

  if (!divContainer) {
    const div = document.createElement("div");
    div.classList.add("answer");
    div.innerHTML = `<p>${clickOnLi.dataset.answer}</p>`;
    clickOnLi.append(div);
    svg.style.transform = "rotate(1deg)";
    clickOnLi.style.borderStyle = "solid";
    clickOnLi.style.borderWidth = "1px";
    clickOnLi.style.borderImage = "linear-gradient(to right, #0cbaf1, #e95ce9)";
    clickOnLi.style.borderImageSlice = "1";
  }
};
const markingPage = (element) => {
  const item = document.createElement("li");

  item.classList.add("item-question");

  item.dataset.answer = element.answer;
  item.innerHTML = `<div class="wrapper-question"><p>${element.question}</p>
  <svg class="svg-question"><use href="${element.svg}"></use></svg></div> `;
  ref.list.append(item);
};

const getDataVRService = () => {
  ref.list.innerHTML = "";
  fetch("../data/list-question.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        if (element.id > 0) {
          markingPage(element);
        }
      });
    });
};

const filterList = () => {
  fetch("../data/list-question.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        const item = document.createElement("li");
        item.classList.add("item-question");
        item.dataset.answer = element.answer;
        item.innerHTML = `<div class="wrapper-question"><p>${element.question}</p>
            <svg class="svg-question"><use href="${element.svg}"></use></svg></div> `;
        ref.list.append(item);
      });
    });
  ref.list.innerHTML = "";
};
filterList();

const getDataPrice = () => {
  ref.list.innerHTML = "";
  fetch("../data/list-question.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        if (element.price) {
          markingPage(element);
        }
      });
    });
};

ref.buttonAll.addEventListener("click", filterList);
ref.buttonVR.addEventListener("click", getDataVRService);
ref.buttonPricing.addEventListener("click", getDataPrice);
ref.list.addEventListener("click", functionAddAnswer);
