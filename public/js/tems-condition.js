const list = document.querySelector(".condition-list");

fetch("../data/tems-condition.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const {
        title,
        description,
        itemFourth,
        itemThird,
        itemSecond,
        itemFirst,
      } = element;

      const innerListItems = [itemFirst, itemSecond, itemThird, itemFourth]
        .filter((item) => item !== undefined && item !== null)
        .map((item) => `<li><p  class="description-condition">${item}</p></li>`)
        .join("");

      const innerList = innerListItems
        ? `<ul class="list-condition ">${innerListItems}</ul>`
        : "";

      const info = `
    
      <li class="item-condition-list">
      <h4 class="title-condition">${title}</h4>
      <p class="description-condition"> ${description}</p>
   
    ${innerList}
      </li>
    
      `;
      list.insertAdjacentHTML("beforeend", info);
    });
  });
