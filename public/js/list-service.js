const item = document.querySelectorAll(".item-info-service");

fetch("../data/details-service.json")
  .then((res) => res.json())
  .then((data) => {
    item.forEach((element, index) => {
      const handelClick = (event) => {
        const e = event.currentTarget;

        const previousInfo = document.querySelector(".cir-div");
        const classActive = document.querySelector(".active-item");

        if (previousInfo && classActive) {
          previousInfo.remove();
          classActive.classList.remove("active-item");
        }

        const divInfo = document.createElement("article");
        divInfo.classList.add("cir-div");
        element.classList.add("active-item");

        divInfo.innerHTML = `<div class="cir-text">
          <p class="information-text">${data[index].description}</p>
          <p>${data[index].depiction}</p>
          <ul class="list-box">

            <p class="decription-list-box">${data[index].list}</p>
          </ul>
          <p class="information-text">${data[index].info}</p>
          <p>${data[index].commitment}</p>

          <div class="button wrapper-button-contact"> <a class="link " href="./contact_us.html">Contact us</a></div>
        </div>`;
        e.append(divInfo);

        const list = divInfo.querySelector(".list-box");
        data[index].items.forEach((i) => {
          const item = document.createElement("li");
          item.classList.add("item-svg-info");
          item.innerHTML = `${svgChecked} <p class="text-description">${i}</p>`;
          list.append(item);
        });
      };

      element.addEventListener("click", handelClick);
    });
  })
  .catch((error) => {
    console.log(error);
  });
// svg checked
const svgChecked = `<svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_21_12651)">
      <path
        d="M4.35556 6.31111L3.11111 7.55556L7.11111 11.5556L16 2.66667L14.7556 1.42222L7.11111 9.06667L4.35556 6.31111ZM14.2222 14.2222H1.77778V1.77778H10.6667V0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V7.11111H14.2222V14.2222Z"
        fill="url(#paint0_linear_21_12651)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_21_12651"
        x1="0"
        y1="8"
        x2="16"
        y2="8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#0CBAF1" />
        <stop offset="1" stop-color="#E95CE9" />
      </linearGradient>
      <clipPath id="clip0_21_12651">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>`;
