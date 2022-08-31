const counter = {
  value: 0,
  increment() {
    // console.log("increment -> this", this);
    this.value += 1;
  },

  decrement() {
    // console.log("decrement -> this", this);
    this.value -= 1;
  },
};

let counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector("#counter").firstElementChild;
const incrementBtn = document.querySelector("#counter").lastElementChild;

decrementBtn.addEventListener("click", function () {
  // console.log("кликнули на декремент");
  counter.decrement();
  counterValue.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  // console.log("кликнули на инкремент");
  counter.increment();
  counterValue.textContent = counter.value;
});
