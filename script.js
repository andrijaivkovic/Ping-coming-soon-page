const subscribeForm = document.querySelector(".hero__text-form--form");

subscribeForm.addEventListener("submit", function (e) {
  const inputsArray = [...this.querySelectorAll("input")];

  if (inputsArray.every((input) => input.validity.valid)) {
    console.log("Every input is valid!");
    inputsArray.forEach((input) => {
      input.value = "";
      hideError(input);
    });

    e.preventDefault();
    return;
  }

  inputsArray.forEach((input) => {
    if (!input.validity.valid) {
      showError(input);
    }
  });

  console.log("Some of the inputs are invalid!");
  e.preventDefault();
});

subscribeForm.addEventListener("input", function (e) {
  const input = e.target;

  if (input.validity.valid) {
    hideError(input);
    return;
  }

  showError(input);
});

const showError = function (element) {
  const errorMessage = element.closest("div").querySelector("p");

  if (element.validity.valueMissing) {
    errorMessage.textContent = `${element.placeholder} cannot be empty`;
  }

  if (element.validity.typeMismatch) {
    errorMessage.textContent = `Looks like this is not an ${element.type}`;
  }

  if (element.validity.tooShort) {
    errorMessage.textContent = `Entered ${element.placeholder} is too short`;
  }

  errorMessage.classList.remove("hidden");
};

const hideError = function (element) {
  const errorMessage = element.closest("div").querySelector("p");

  errorMessage.classList.add("hidden");
  errorMessage.textContent = "";
};
