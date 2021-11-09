const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContEl = document.querySelector("#ingredients");
const createElement = (item) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = item;
  return itemEl;
};

const items = ingredients.map(createElement);
console.log(items);
ingredientsContEl.append(...items);
