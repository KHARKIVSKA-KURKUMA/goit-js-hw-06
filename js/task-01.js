const taskItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${taskItemEl.length}`);

const categoriesList = document.querySelector("ul#categories");
const items = categoriesList.querySelectorAll("li.item");

items.forEach((item) => {
  const heading = item.querySelector("h2");
  const itemsCount = item.querySelectorAll("li").length;

  console.log(`Category: ${heading.textContent}. 
  Elements: ${itemsCount}`);
});
/* -------------------------------------------------------------------------- */
