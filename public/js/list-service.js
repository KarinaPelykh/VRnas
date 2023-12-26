const item = document.querySelectorAll(".item-info-service");

fetch("../data/details-service.json")
  .then((res) => res.json())
  .then((data) => {
    item.forEach((element, index) => {
      const handelClick = (event) => {
        const e = event.currentTarget;

        const previousInfo = document.querySelector("article");
        console.log(previousInfo);
        if (previousInfo === true) {
          previousInfo.remove();
        }

        const divInfo = document.createElement("article");
        divInfo.classList.add("cir-div");
        divInfo.innerHTML = `<div class="cir-text">
          <p class="information-text">${data[index].description}</p>
          <p>${data[index].depiction}</p>
          <ul class="list-box">
            <p class="decription-list-box">${data[index].list}</p>
          </ul>
          <p class="information-text">${data[index].info}</p>
          <p>${data[index].inspire}</p>
        </div>`;
        e.append(divInfo);

        const list = divInfo.querySelector(".list-box");
        data[index].items.forEach((i) => {
          const item = document.createElement("li");
          item.classList.add("item-svg-info");
          item.innerHTML = `<p>${i}</p>`;
          list.append(item);
        });
      };

      element.addEventListener("click", handelClick);
    });
  });

// const item = document.querySelectorAll(".item-info-service");
// fetch("../data/details-service.json")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((element, index) => {
//       const handelClick = (event) => {
//         const e = event.currentTarget;

//         // const previousInfo = document.querySelector(".cir-div");
//         // previousInfo.remove();
//         // if (previousInfo) {
//         // }

//         const divInfo = document.createElement("article");
//         divInfo.classList.add("cir-div");
//         divInfo.innerHTML = `<div class="cir-text">
//         <p  class="information-text">${data[index].description}</p>
//        <p >${element[index].depiction}</p>
//   <ul class="list-box">
//   <p class="decription-list-box">${element[index].list}</p>
//   </ul>
//    <p class="information-text">${element[index].info}</p>
//    <p>${element[index].inspire}</p>
//         </div>`;
//         e.append(divInfo);

//         const list = document.querySelector(".list-box");
//         element[index].items.map((i) => {
//           const item = document.createElement("li");
//           item.classList.add("item-svg-info");
//           item.innerHTML = `<p>${i}</p>`;
//           list.append(item);
//         });
//       };

//       item.forEach((item) => {
//         item.addEventListener("click", handelClick);
//       });
//     });
//   });
