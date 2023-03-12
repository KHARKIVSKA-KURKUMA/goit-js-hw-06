const ref = {
  createBtn: document.querySelector("[data-create]"),
  removeBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
  box: document.querySelector("#boxes"),
  control: document.querySelector("#controls"),
};
ref.createBtn.addEventListener("click", createBoxes);
ref.removeBtn.addEventListener("click", destroyBoxes);

let sizeM = 30;
function createBoxes() {
  const amount = ref.input.value;
  for (let i = 0; i < amount; i++) {
    const newColor = getRandomHexColor();
    const size = i * 10 + 30;
    const str = `<div style = "background-color:${newColor}; width: ${size}px; height: ${size}px;"></div>`;
    ref.box.innerHTML += str;
  }
  //   for (let i = 0; i < amount; i++) {
  //     const div = document.createElement("div");
  //     sizeM += i * 10;
  //     const sizeMstr = `${sizeM}px`;
  //     div.style.width = sizeMstr;
  //     div.style.height = sizeMstr;
  //     div.style.backgroundColor = getRandomHexColor();
  //     ref.box.append(div);
  //   }
  //   sizeM += 10;
}
function destroyBoxes() {
  ref.input.value = "";
  ref.box.innerHTML = "";
  sizeM = 30;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
