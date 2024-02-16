fetch("../data/news.json")
  .then((res) => res.json())
  .then((data) => {
    const listNews = document.querySelector(".news-list");
    data.forEach((data) => {
      const itemNews = document.createElement("li");
      itemNews.classList.add("item-New");

      itemNews.innerHTML = `
     
      <img class="photo-news" src="${data.img}" alt="photo"/>
      <div class="wrapper-caption">
      <p class="caption-news">${data.title}</p>
      <h3 class="title-news">${data.description}</h3>
      </div>
      <a href="./detail_blog.html"  class="button-news"><svg class="svg-news"><use href="${data.svg}"></use></svg></a>
     `;
      listNews.append(itemNews);
    });
  });
