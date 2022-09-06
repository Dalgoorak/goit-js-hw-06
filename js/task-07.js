const textEl = document.querySelector("#text");

const sizeControle = document.querySelector("#font-size-control");

sizeControle.addEventListener("input", () => {
  textEl.style.fontSize = sizeControle.value + "px";
});
