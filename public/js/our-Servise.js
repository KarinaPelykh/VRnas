fetch("../data/our-service.json")
  .then((data) => data.json())
  .then((data) => {
    const list = document.querySelector(".list-ourServise");
    data.forEach((data) => {
      const item = document.createElement("li");
      item.classList.add("item-ourService");

      item.innerHTML = ` 
      
      <img class="png-ourServise" src="${data.png}"/>
      <h4 class="subhead-ourServise">${data.title}</h4>
      <p clss="text-ourService">${data.description}</p>
     
      `;

      list.append(item);
    });
  });
console.log(5);
