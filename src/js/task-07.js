const fontSizeEl = document.querySelector("#font-size-control");
const fontSizeChangeEl = document.querySelector("#text");

fontSizeChangeEl.style.fontSize = `${fontSizeEl.value}px`;

fontSizeEl.addEventListener("input", getInputElChange);

function getInputElChange(event) {
  fontSizeChangeEl.style.fontSize = `${event.currentTarget.value}px`;
}
