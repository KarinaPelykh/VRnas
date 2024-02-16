const div = document.querySelector(".wrapper-detail-blog");

const address = document.querySelector(".detail-rout");

fetch("../data/detail-blog.json")
  .then((res) => res.json())
  .then((data) => {
    const detailInfoData = data[0];
    updateAddress(detailInfoData);

    const itemCard = document.createElement("div");
    itemCard.innerHTML = cardBlog(detailInfoData);
    div.append(itemCard);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const cardBlog = (detailInfoData) => {
  const {
    img,
    imgSecond,
    imgThird,
    title,
    mainTitle,
    time,
    architecture,
    describe,
    reasons,
    tag,
    advantage,
    twitter,
    facebook,
    instagram,
    img2x,
    img1x,
  } = detailInfoData;
  return `<article class="">
  <p class="title-blog">${title}</p>
  <p class="title-blog-detail">${mainTitle}</p>
  <p class="time"><span class="span-background">${time}</span></p>
  <img   srcset="${img1x} 1x, ${img2x} 2x"  class="photo-blog-detail" src="${img}" alt="photo"/>

   
    <p class="short-info-detail">${architecture}</p>
    <p class="short-info-detail">${describe}</p>
    <p class="short-info-detail">${reasons}</p>
    <div class="thumb-detail-blog-img">  <img class="imgSecond" src="${imgSecond}" alt="img second" / >
    <img class="imgThird"  src="${imgThird}" alt="img third" / >  </div>
    
     <p class="short-info-detail">${advantage}</p>
    <p class="post-tag">Post Tags :</p>
    <p class="tags"><span class="span-background">${tag}</span></p>
    <p class="post-tag">Share :</p>
    <ul class="social-media-list">
    <li><svg width="24px" height="24px"><use href="${twitter}"></use></svg></li>
    <li><svg width="24px" height="24px"><use href="${facebook}"></use></svg></li>
    <li><svg width="24px" height="24px"><use href="${instagram}"></use></svg></li>
    </ul>
    </article>`;
};

const updateAddress = ({ mainTitle }) => {
  const span = document.createElement("span");
  span.classList.add("span-keep");
  span.innerText = mainTitle;
  address.append(span);
};

fetch("../data/news.json")
  .then((res) => res.json())
  .then((data) => {
    const listNews = document.querySelector(".recent-list");
    data.forEach((data) => {
      const itemNews = document.createElement("li");
      itemNews.classList.add("item-recent");

      itemNews.innerHTML = `
     
      <img class="photo-recent" src="${data.img}" alt="photo-recent"/>
      <div class="wrapper-caption">
      <p class="caption-list-recent">${data.title}</p>
      <h3 class="title-list-recent">${data.description}</h3>
      </div>
      
     `;
      listNews.append(itemNews);
    });
  });
