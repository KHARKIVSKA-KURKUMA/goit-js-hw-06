/* <input
      type="text"
      id="validation-input"
      data-length="6"
      placeholder="Please enter 6 symbols"
    /> */

const input = document.querySelector(`#validation-input`);

input.addEventListener("blur", onCheckedLength);

function onCheckedLength() {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
