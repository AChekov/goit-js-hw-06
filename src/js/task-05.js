const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function getInputElChange(event) {
  return inputEl.value.length >= 1
    ? (outputEl.textContent = event.currentTarget.value)
    : (outputEl.textContent = "Anonymous");
}

inputEl.addEventListener("input", getInputElChange);
