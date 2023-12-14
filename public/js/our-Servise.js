fetch("../data/our-service.json")
  .then((data) => data.json())
  .then((data) => {
    const list = document.querySelector(".list-ourServise");
    data.forEach((data) => {
      const item = document.createElement("li");
      item.classList.add("item-ourService");
      // item.classList.add("box");
      item.innerHTML = ` 
 
     
      
      <img class="png-ourServise" src="${data.png}"/>
       <div class="box"><h4 class="subhead-ourServise">${data.title}</h4>
      <p class="text-ourService">${data.description}</p>
      <div class="overlay">  <button class="button-overlay">LEARN MORE</button> </div>
    
    
      </div>
     
      `;

      list.append(item);
    });
  });
console.log(5);
