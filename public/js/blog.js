const list = document.querySelector(".list-blogs");
fetch("../data/blog-list.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const { img, title, description, link } = element;
      const itemCard = document.createElement("li");
      itemCard.innerHTML = `<article class="article-card-blog">
      <img class="photo-blog" src="${img}" alt="photo"/>
       <div class="wrapper-card-blog">
       <p class="title-blog">${title}</p>
        <p class="short-info">${description}</p> 
        <p class="link-readMore"><span class="span-background">${link}</span>
        </p>
        </div>
        </article>`;
      list.append(itemCard);
    });
  });
