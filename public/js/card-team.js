const list = document.querySelector(".list-team");

const skeletonCard = (item) => {
  const itemMember = document.createElement("li");
  itemMember.classList.add("last-member");
  itemMember.innerHTML = `<article class="box-images">
  <div class="wrapper-overlay"><img class="photo-member-team"  src="${item.img}">

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
    data.forEach((item) => {
      skeletonCard(item);
    });
  })
  .catch((error) => {
    console.log(error);
  });
