const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const addIngredients = (array) =>
  array.map((elem) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = elem;
    itemEl.style.fontSize = "30px";
    itemEl.style.color = "rgb(125 22 225)";
    return itemEl;
  });

ulEl.append(...addIngredients(ingredients));
/* -------------------------------------------------------------------------- */
