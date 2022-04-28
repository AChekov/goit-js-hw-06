// const bodyEl = document.querySelector("body");
// const buttonEl = document.querySelector(".change-color");
// const spanEl = document.querySelector(".color");

// buttonEl.addEventListener("click", changeBodyBackgroundCol);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function changeBodyBackgroundCol() {
//   const color = getRandomHexColor();
//   bodyEl.style.backgroundColor = color;
//   spanEl.textContent = color;
// }

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

buttonRef.addEventListener("click", changeBodyBackgroundCol);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyBackgroundCol() {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
}
