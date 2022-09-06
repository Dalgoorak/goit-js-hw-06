const categoriesList = document.querySelector("#categories").children;
console.log(`Number of categories: ${categoriesList.length}`);

[...categoriesList].forEach((item) => {
  const titleItemEl = `Category: ${item.querySelector("h2").textContent}`;
  const listItemEl = `Elements: ${item.querySelectorAll("li").length}`;

  console.log(titleItemEl);
  console.log(listItemEl);
});

// categoriesList.forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });
