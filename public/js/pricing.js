const ref={
    openButton: document.querySelector(".js-open-modal"),
}


  
const closeModal = () => {
    const modal = document.querySelector(".bloc-modal");    document.body.style.overflow = "auto";
    modal.remove(); 

  };
  
  const openModal = () => {
    const body = document.querySelector("body");
    const modal = document.createElement("div");
    modal.classList.add("bloc-modal");
  
    modal.innerHTML = `
    <div class="modal">
      <button class="menu-toggle js-close-modal">
        <svg
          fill="#000"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
     
      <p>
       If you want Get start 
       
       Click on a <a href="./pricing_plan.html"><span class="page-pricing">Pricing Plan</span></a>❤️
      </p>
      <img  class="img-modal" src="https://images.pexels.com/photos/8721313/pexels-photo-8721313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    </div>
    `;
    
    body.append(modal);
  
document.body.style.overflow = "hidden";
    const closeButton = document.querySelector(".js-close-modal");
    closeButton.addEventListener("click", closeModal); 
  };

  ref.openButton.addEventListener("click", openModal);
  