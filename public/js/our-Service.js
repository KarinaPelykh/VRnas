fetch("../data/our-service.json")
  .then((data) => data.json())
  .then((data) => {
    const list = document.querySelector(".list-ourService");
    data.forEach((data) => {
      const item = document.createElement("li");
      item.classList.add("item-ourService");
      item.innerHTML = ` 
 
     
      
      <img class="png-ourService" src="${data.png}" alt="photo png"/>
       <div class="box"><h4 class="subhead-ourService">${data.title}</h4>
      <p class="text-ourService">${data.description}</p>
      <div class="overlay">  <a   href="./detail_service.html" class="button-overlay  link">LEARN MORE</a> </div>
    
    
      </div>
     
      `;

      list.append(item);
    });
  });
