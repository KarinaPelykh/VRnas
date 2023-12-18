fetch("../data/list-svg.json")
  .then((res) => res.json())
  .then((data) => {
    const list = document.querySelector(".list-partner");
    console.log(list);
    data.forEach((data) => {
      const item = document.createElement("li");
      item.classList.add("item-partner-svg");
      item.innerHTML = `<svg class="svg-partner"><use href="${data.svg}"></use></svg>`;
      list.append(item);
    });
  });
