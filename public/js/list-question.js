fetch("../data/list-question.json")
  .then((res) => res.json())

  .then((data) => {
    const list = document.querySelector(".list-question");
    data.forEach((element) => {
      const item = document.createElement("li");
      item.classList.add("item-question");
      item.innerHTML = `<p>${element.question}</p>
      <svg class="svg-question"><use href="${element.svg}"></use></svg>
        `;
      list.append(item);
    });
  })
  .catch((error) => {
    console.log(error);
  });
