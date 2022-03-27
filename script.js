"use script";

const container = document.querySelector(".container");

function init() {
  //const squareNumSide = prompt("How many squares do you want on your canvas?");

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

  return square;
}

function createSquares(squarePerSide) {
  let totalSquares = squarePerSide * squarePerSide;
  console.log(totalSquares);

  for (let i = 1; i <= totalSquares; i++) {
    container.appendChild(styleSquare());
  }
}
