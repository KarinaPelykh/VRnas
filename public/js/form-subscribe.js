const ref = {
  buttonSubmit: document.querySelector(".js-button-subscribe"),
  inputEmail: document.querySelector(" .js-input-email"),
  form: document.querySelector(".js-from-subscribe"),
};
const describeUser = (e) => {
  e.preventDefault();
  const form = e.target;
  const userEmail = form.elements.email.value;
  if (userEmail) {
    const modalWindow = document.createElement("div");
    modalWindow.classList.add("bloc-modal");

    modalWindow.innerHTML = `
    <div class="modal">
      <button class="menu-toggle js-close-modal">
        <svg
          fill="#000"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
     
      <p>
       Thanks for ${userEmail} subscribe❤️
      </p>
    </div>
 `;
    form.append(modalWindow);
  }
  const closeWindow = document.querySelector(".js-close-modal");
  const modalWindow = document.querySelector(".bloc-modal");
 
  if (closeWindow) { 
    document.body.style.overflow = "hidden";
    closeWindow.addEventListener("click", () => {
      modalWindow.remove();
      document.body.style.overflow = "auto";
    });
  }
  form.reset();
};
ref.form.addEventListener("submit", describeUser);
