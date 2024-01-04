const list = document.querySelector(".list-blogs");

const perPage = 3;
let currentPage = 1;

fetch("../data/blog-list.json")
  .then((res) => res.json())
  .then((data) => {
    displayList(data, currentPage, perPage);
    displayPagination(data, perPage);
  });

const cardBlog = ({ img, title, description, link }) => {
  return `<article class="article-card-blog">
  <img class="photo-blog" src="${img}" alt="photo"/>
   <div class="wrapper-card-blog">
   <p class="title-blog">${title}</p>
    <p class="short-info">${description}</p> 
    <p class="link-readMore"><span class="span-background">${link}</span>
    </p>
    </div>
    </article>`;
};

const displayList = (data, page, perPage) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const arrPagination = data.slice(start, end);
  console.log(arrPagination);
  page--;
  list.innerHTML = "";
  addCardOnPage(arrPagination);
};

const addCardOnPage = (arrPagination) => {
  arrPagination.forEach((element) => {
    const { img, title, description, link } = element;
    const itemCard = document.createElement("li");
    itemCard.innerHTML = cardBlog({ img, title, description, link });
    list.append(itemCard);
  });
};

const displayPagination = (data, perPage) => {
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

    fetch("../data/blog-list.json")
      .then((res) => res.json())
      .then((data) => {
        displayList(data, currentPage, perPage);
      });
  });
  return itemButton;
};
