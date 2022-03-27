"use script";

const container = document.querySelector(".container");
const reloadBtn = document.querySelector(".btn");

function init() {
  const squareNumSide = prompt("How many squares do you want on your canvas?");

  convertToGrid(squareNumSide);
}
init();

function convertToGrid(squareNumSide) {
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${squareNumSide}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${squareNumSide}, 1fr)`;

  createSquares(squareNumSide);
}

function styleSquare() {
  const square = document.createElement("div");
  square.classList.add("square-hover");

  return square;
}

function genRandomNum() {
  return Math.floor(Math.random() * (255 - 0 + 1));
}

function genRandomColor() {
  let r = genRandomNum();
  let g = genRandomNum();
  let b = genRandomNum();

  return `rgb(${r},${g},${b})`;
}

function createSquares(squarePerSide) {
  let totalSquares = squarePerSide * squarePerSide;

  for (let i = 1; i <= totalSquares; i++) {
    container.appendChild(styleSquare());
  }

  drawLine();
}

function drawLine() {
  const squares = Array.from(document.querySelectorAll(".square-hover"));

  squares.forEach((square) =>
    square.addEventListener("mouseenter", function () {
      square.style.backgroundColor = genRandomColor();
    })
  );
}

reloadBtn.addEventListener("click", function () {
  container.innerHTML = "";
  init();
});
