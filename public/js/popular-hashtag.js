const popularHashtagList = document.querySelector(".popular-hashtag-list");
console.log(popularHashtagList);
fetch("../data/popular-hashtag.json")
  .then((res) => res.json())
  .then((data) => {
    const items = data
      .map((item) => {
        return `<li class="caption-list-recent">${item}</li>`;
      })
      .join("");
    popularHashtagList.innerHTML = items;
  });
