const counterValue = document.querySelector("#value");
const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');
let count = 0;

function increment() {
  count += 1;
  counterValue.textContent = count;
}

function decrement() {
  if (count > 0) {
    count -= 1;
    counterValue.textContent = count;
  } else if (count <= 0) {
    counterValue.textContent = 0;
    alert(`Ви намагаєтесь відняти від 0`);
  }
}

incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);
