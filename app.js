const submitBtn = document.querySelector(".submit-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const inputField = document.querySelector("input");
const signUpForm = document.querySelector(".sign-up-form");
const successModal = document.querySelector(".success-modal");
const errorMessage = document.querySelector(".error");

// validate email function
function validateEmail(inputField) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  console.log(inputField.value.match(validRegex));
  return inputField.value.match(validRegex);
}

// display error message and input field red borders
const displayError = (element) => {
  errorMessage.textContent = "Valid email required";
  element.classList.remove("border-neutralGrey");
  element.classList.add("border-primaryTomato");
  element.focus();
};

// toggle subscribe page and success modal
const toggleModal = (e) => {
  e.preventDefault();
  signUpForm.classList.toggle("hidden");
  successModal.classList.toggle("hidden");
};

// handle click submit
const handleSubmit = (e) => {
  e.preventDefault();
  if (validateEmail(inputField)) {
    toggleModal(e);
  } else {
    displayError(inputField);
  }
};

// handle click dismiss
const handleDismiss = (e) => {
  toggleModal(e);
  //   reset
  inputField.value = "";
  errorMessage.textContent = "";
  inputField.classList.add("border-neutralGrey");
  inputField.classList.remove("border-primaryTomato");
  inputField.focus();
};

// event listeners
submitBtn.addEventListener("click", handleSubmit);
dismissBtn.addEventListener("click", handleDismiss);
