const list = document.querySelector(".list-team");

const skeletonCard = (item) => {
  const itemMember = document.createElement("li");
  itemMember.classList.add("last-member");
  itemMember.innerHTML = `<article class="box-images">
  <div class="wrapper-overlay"><img    class="photo-member-team" srcset="${item.img1x} 1x,  ${item.img2x} 2x"  src="${item.img}">

<div class="static-overlay">
<div class=" box-overlay">


<div class="overlay-social"><ul class="list-socialM-member">
<li class="item-socialMedia"><a  href="https://www.instagram.com/" target="blank"><svg width= "46px" height="46px" ><use href="${item.svgInstagram}"></use></svg></a></li>
<li class="item-socialMedia"><a  href="https://www.facebook.com/" target="blank"><svg width= "46px" height="46px" ><use href="${item.svgFacebook}"></use></svg></a></li>
<li class="item-socialMedia"><a  href="https://twitter.com/i/flow/login" target="blank"> <svg width= "46px" height="46px" ><use href="${item.svgTwitter}"></use></svg> </a></li>

</ul> </div> </div>
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
