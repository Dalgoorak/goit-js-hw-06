const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);
console.log(inputLength);

input.addEventListener("input", onInputNotActive);

function onInputNotActive(event) {
  const totalLength = event.currentTarget.value.length;
  console.log(totalLength);

  if (inputLength === totalLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  return;
}
