const categoriesList = document.querySelector("#categories").children;
console.log(`Number of categories: ${categoriesList.length}`);

[...categoriesList].forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});

// categoriesList.forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });
