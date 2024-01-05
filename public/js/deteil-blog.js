const div = document.querySelector(".wrapper-detail-blog");

const address = document.querySelector(".detail-rout");

fetch("../data/blog-list.json")
  .then((res) => res.json())
  .then((data) => {
    const detailInfoData = data[0];
    updateAddress(detailInfoData);
    const { img, title, description } = detailInfoData;
    const itemCard = document.createElement("div");
    itemCard.innerHTML = cardBlog({ img, title, description });
    div.append(itemCard);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const cardBlog = ({ img, title, description }) => {
  return `<article class="">
  <p class="title-blog">${title}</p>
  <p>${title}</p>
  <img   class="photo-blog-detail" src="${img}" alt="photo"/>

    <p class="short-info">${description}</p>

    </article>`;
};

const updateAddress = ({ description }) => {
  const span = document.createElement("span");
  span.innerText = description;
  address.append(span);
};
