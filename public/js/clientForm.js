const ref = {
  form: document.querySelector(".js-submit-form"),
  textarea: document.querySelector(".textares"),
};

const STORAGE_KEY = "message";
const saveMessageUser = (event) => {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
};

const onFormSubmit = (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

const getMessageTextarea = () => {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  if (saveMessage) {
    ref.textarea.value = saveMessage;
  }
};
getMessageTextarea();

ref.textarea.addEventListener("input", saveMessageUser);
ref.form.addEventListener("submit", onFormSubmit);

// створення обєкту
//   const {
//     elements: { username, surname, emil, number },
//   } = event.currentTarget;
//   const userData = {
//     firstName: username.value,
//     lastName: surname.value,
//     emil: emil.value,
//     phonNumber: number.value,
//   };
//   const stringUserData = JSON.stringify(userData);
//   localStorage.setItem("stringUserData", stringUserData);
