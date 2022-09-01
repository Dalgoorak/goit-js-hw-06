const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

Array.prototype.forEach.call(items, (elelement) => {
  const title = elelement.querySelector("h2").innerHTML;
  const itemsLength = elelement.querySelectorAll("li").length;
  console.log(`Category: ${title} 
  Elements ${itemsLength}`);
});
