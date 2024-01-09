const refs = {
  openModalBtn: document.querySelector(".js-open-menu"),
  closeModalBtn: document.querySelector(".js-close-menu"),
  modal: document.querySelector(".js-modal"),
};
refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  const res = refs.modal.classList.toggle("is-hidden");
  refs.openModalBtn.style.display = "flex";
  if (!res) {
    document.body.style.overflow = "hidden";
  }
  document.body.style.overflow = "auto";
}
