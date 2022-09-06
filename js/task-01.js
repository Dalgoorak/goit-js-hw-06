const categoriesList = document.querySelector("#categories").children;
console.log(`Number of categories: ${categoriesList.length}`);

[...categoriesList].forEach((item) => {
  const titleItemEl = item.querySelector("h2").textContent;
  const listItemEl = item.querySelectorAll("li").length;

  console.log("Category:", titleItemEl);
  console.log("Elements:", listItemEl);
});

// categoriesList.forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });
