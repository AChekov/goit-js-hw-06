const currentValueEl = document.querySelector("#value");
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

function getDecrementBtnValue() {
  counterValue -= 1;
  currentValueEl.textContent = counterValue;
}

function getIncrementBtnValue() {
  counterValue += 1;
  currentValueEl.textContent = counterValue;
}

incrementBtnEl.addEventListener("click", getIncrementBtnValue);
decrementBtnEl.addEventListener("click", getDecrementBtnValue);
