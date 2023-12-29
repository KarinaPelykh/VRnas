const list = document.querySelector(".list-team");

const skeletonCard = (item) => {
  const itemMember = document.createElement("li");
  itemMember.classList.add("last-member");
  itemMember.innerHTML = `<article class="box-images">
  <div class="wrapper-overlay"><img class="photo-member-team"  src="${item.img}">

<div class="static-overlay">
<ul class="list-socialM-member">
<li class="item-socialMedia"><svg width= "46px" height="46px" ><use href="${item.svgTwitter}"></use></svg></li>
<li class="item-socialMedia"><svg width= "46px" height="46px" ><use href="${item.svgInstagram}"></use></svg></li>
<li class="item-socialMedia"><svg width= "46px" height="46px" ><use href="${item.svgFacebook}"></use></svg></li>
</ul>
<p class="name-member ">${item.name}</p>
<p class="position-member">${item.position}</p>
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
