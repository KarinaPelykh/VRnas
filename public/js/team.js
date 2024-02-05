const buttonSeeAll = document.querySelector(".button-see");
const list = document.querySelector(".list-team");

const skeletonCard = (item) => {
  const itemMember = document.createElement("li");
  itemMember.classList.add("item-card");
  itemMember.innerHTML = `<article class="box-images">
  <div class="wrapper-overlay">
  <img 
  srcset="${item.img1x} 1x, ${item.img2x} 2x"
  class="photo-member-team"  src="${item.img}">

<div class="static-overlay">
<p class="name-member-team">${item.name}</p>
<p class="position-member-team">${item.position}</p>
</div></div>
</article>`;
  list.append(itemMember);
};

fetch("../data/team.json")
  .then((res) => res.json())
  .then((data) => {
    const cardMember = data.slice(0, 4);

    const cardMemberALL = (event) => {
      if (event.currentTarget === buttonSeeAll) {
        const card = data.slice(4);
        card.forEach((item) => {
          skeletonCard(item);

          buttonSeeAll.disabled = true;
        });
      }
    };
    buttonSeeAll.addEventListener("click", cardMemberALL);

    cardMember.forEach((item) => {
      skeletonCard(item);
    });
  })
  .catch((error) => {
    console.log(error);
  });
