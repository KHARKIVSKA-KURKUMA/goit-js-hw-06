const inputName = document.querySelector("#name-input");
const outName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  if (inputName.value !== "") {
    outName.textContent = event.currentTarget.value;
  } else {
    outName.textContent = "Anonymous";
  }
});
