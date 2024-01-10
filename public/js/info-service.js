fetch("../../data/info-service.json")
  .then((res) => res.json())
  .then((data) => {
    const block = document.querySelector(".info-list");
    block.style.display = "flex";
    data.forEach((data) => {
      const infoItem = document.createElement("li");
      infoItem.style.marginLeft = "50px";

      infoItem.innerHTML = `<img class="info-images"  src="${data.images}" alt="picture"/>
        <h2 class="info-title">${data.title}</h2>
        <p class="description">${data.description}</p>
      `;
      block.append(infoItem);
    });
  });
