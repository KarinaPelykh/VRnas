const list = document.querySelector(".list-question");

const addAnswer = (event) => {
  const isOpen = event.target.closest(".item-question");
  const answerContainer = isOpen.querySelector(".answer");
  const svg = isOpen.querySelector(".svg-question");
  if (!answerContainer) {
    const div = document.createElement("div");
    div.classList.add("answer");
    div.innerHTML = `<p>${isOpen.dataset.answer}</p>`;
    isOpen.append(div);
    svg.style.transform = "rotate(1deg)";
    isOpen.style.borderStyle = "solid";
    isOpen.style.borderWidth = "1px";
    isOpen.style.borderImage = "linear-gradient(to right, #0cbaf1, #e95ce9)";
    isOpen.style.borderImageSlice = "1";
  }
};
list.addEventListener("click", addAnswer);

fetch("../data/list-question.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const item = document.createElement("li");
      item.classList.add("item-question");
      item.dataset.answer = element.answer;
      item.innerHTML = `<div class="wrapper-question"><p>${element.question}</p>
      <svg class="svg-question"><use href="${element.svg}"></use></svg></div> `;
      list.append(item);
    });
  })
  .catch((error) => {
    console.log(error);
  });
