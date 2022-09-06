const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ulEl = document.querySelector("#ingredients");

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, "");

// ulEl.innerHTML = list;

const ingrediensRef = document.querySelector("#ingredients");

const list = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  return li;
});
ingrediensRef.append(...list);
