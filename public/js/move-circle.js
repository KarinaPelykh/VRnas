const buttonLeft = document.querySelector(".js-button-left");
const buttonRight = document.querySelector(".js-button-right");
const list = document.querySelectorAll(".js-item");
let currentIndexItem = 1;
const handelDisplaySvg = () => {
  list.forEach((item) => {
    item.style.top = "";
    item.style.left = "";
    item.style.zIndex = 0;
  });
  const itemList = list[currentIndexItem];
  itemList.style.top = "-47px";
  itemList.style.left = "458px";
  itemList.style.zIndex = 20;
  currentIndexItem++;
  if (currentIndexItem >= list.length) {
    currentIndexItem = 0;
  }
};

const handelDisplayReversSvg = () => {
  list.forEach((item) => {
    item.style.top = "";
    item.style.left = "";
    item.style.zIndex = 0;
  });

  if (currentIndexItem <= 0) {
    currentIndexItem = list.length - 1;
  }
  currentIndexItem--;
  const itemList = list[currentIndexItem];
  console.log(itemList);
  itemList.style.top = "-47px";
  itemList.style.left = "458px";
  itemList.style.zIndex = 20;
};

buttonLeft.addEventListener("click", handelDisplaySvg);

buttonRight.addEventListener("click", handelDisplayReversSvg);
