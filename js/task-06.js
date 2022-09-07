const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);
console.log(inputLength);

input.addEventListener("blur", onInputNotActive);

function onInputNotActive(event) {
  const totalLength = event.currentTarget.value.length;
  console.log(totalLength);

  if (inputLength === totalLength) {
    updateClassEl("valid", "invalid");
  } else {
    updateClassEl("invalid", "valid");
  }
}

function updateClassEl(addClass, removeClass) {
  input.classList.remove(removeClass);
  input.classList.add(addClass);
}
