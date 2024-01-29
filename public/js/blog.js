const list = document.querySelector(".list-blogs");

let perPage = 3;
let currentPage = 1;
let data;
fetch("../data/blog-list.json")
  .then((res) => res.json())
  .then((question) => {
    data = question;

    displayList(currentPage, perPage);

    displayPagination(perPage);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const displayList = (page, perPage) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  let arrPagination;
  const handelAdaptationList = () => {
    if (window.innerWidth < 700) {
      arrPagination = data;
    } else {
      arrPagination = data.slice(start, end);
    }
    page--;
    list.innerHTML = "";
    addCardOnPage(arrPagination);
  };
  window.addEventListener("resize", handelAdaptationList);
  handelAdaptationList();
};

const cardBlog = ({ img, title, description, link, id }) => {
  return `<article class="article-card-blog">
  <img class="photo-blog" src="${img}" alt="photo"/>
   <div class="wrapper-card-blog">
   <p class="title-blog">${title}</p>
    <p class="short-info">${description}</p> 
    <a href="./detail_blog.html"  class="link-readMore"  data-id="${id}"><span class="span-background">${link}</span>
    </a>
    </div>
    </article>`;
};

const addCardOnPage = (arrPagination) => {
  arrPagination.forEach((element) => {
    const { img, title, description, link } = element;
    const itemCard = document.createElement("li");
    itemCard.innerHTML = cardBlog({ img, title, description, link });
    list.append(itemCard);
  });
};

const displayPagination = (perPage) => {
  const div = document.querySelector(".pagination-wrapper");
  const paginationCount = data.length / perPage;

  const listBtnPagination = document.createElement("ul");
  listBtnPagination.classList.add("pagination-list");

  for (let i = 0; i < paginationCount; i++) {
    const itemButton = displayPaginationBtn(i + 1);
    listBtnPagination.appendChild(itemButton);
  }
  div.appendChild(listBtnPagination);
};

const displayPaginationBtn = (page) => {
  const itemButton = document.createElement("li");
  itemButton.classList.add("pagination-item");
  itemButton.innerText = page;

  if (currentPage === page) {
    itemButton.classList.add("button-active");
  }
  itemButton.addEventListener("click", () => {
    currentPage = page;

    let buttonActive = document.querySelector("li.button-active");
    buttonActive.classList.remove("button-active");

    itemButton.classList.add("button-active");

    displayList(currentPage, perPage);
  });
  return itemButton;
};
