import { compData } from "./data.js";
import { loadTable } from "./loadTable.js";

import { playerWins, compWins, gameInDraw } from "./checkClicks.js";

import {
  startGame,
  allMadeClicks,
  playerClicks,
  compClicks,
  refreshTable,
} from "./startGame.js";

const modalOverlay = document.querySelector(".modal-overlay");
const modalContainer = modalOverlay.querySelector(".modal-container");
const input = modalContainer.querySelector(".name");

const selectSide = document.querySelector(".select-side");
const sideX = selectSide.querySelector(".sideX");
const sideO = selectSide.querySelector(".sideO");

const backBtn = modalContainer.querySelector(".back-btn .fas");
const btnStart = modalContainer.querySelector(".btn-start");

const playerName = document.querySelector(".playerName");
const computer = document.querySelector(".computer");
const inDraw = document.querySelector(".inDraw");
const table = document.querySelector(".table");
const resetBtn = document.querySelectorAll(".reset-btn");

const $ = document.querySelector.bind(document);

const randomCompName = compData[Math.floor(Math.random() * compData.length)];

let playerSide = "";
let computerSide = "";

/* Load table */

table.innerHTML = loadTable();
const tableBoxes = Array.from(table.children);
const line = document.querySelector(".winLine");

/* Choose Side */

sideX.addEventListener("click", () => {
  sideO.classList.add("vsSide");
  sideX.classList.add("chosenSide");
  backBtn.classList.add("btn-visibility");
});

sideO.addEventListener("click", () => {
  sideX.classList.add("vsSide");
  sideO.classList.add("chosenSide");
  backBtn.classList.add("btn-visibility");
});

backBtn.addEventListener("click", () => {
  sideX.classList.remove("chosenSide");
  sideO.classList.remove("chosenSide");
  sideX.classList.remove("vsSide");
  sideO.classList.remove("vsSide");
  backBtn.classList.remove("btn-visibility");
});

/* Button Start Game*/

modalContainer.addEventListener("click", () => {
  (input.value && (sideX.classList.contains("chosenSide") ||
    sideX.classList.contains("vsSide")))?
    btnStart.classList.add("done"):
    btnStart.classList.remove("done")
});

input.addEventListener("keyup", ()=>{
  input.value != "" &&
  (sideX.classList.contains("chosenSide") || sideX.classList.contains("vsSide"))
    ? btnStart.classList.add("done")
    : btnStart.classList.remove("done");
})

btnStart.addEventListener("click", () => {
  if (input.value === "") {
    input.placeholder = "add your name";

    setTimeout(() => {
      input.placeholder = "";
    }, 1000);
  } else if (
    !sideX.classList.contains("chosenSide") &&
    !sideX.classList.contains("vsSide")
  ) {
    sideX.classList.add("blink-animation");
    sideO.classList.add("blink-animation");

    setTimeout(() => {
      sideX.classList.remove("blink-animation");
      sideO.classList.remove("blink-animation");
    }, 750);
  } else {
    setTimeout(() => {
      modalOverlay.classList.add("close-modal");

      if (sideX.classList.contains("chosenSide")) {
        playerSide = "X";
        computerSide = "O";
        resetBtn[0].classList.add("active-side");
      } else {
        playerSide = "O";
        computerSide = "X";
        resetBtn[1].classList.add("active-side");
      }

      playerName.innerHTML = `<div class="img-box show-turn"><i class="fas fa-user"></i></div>
      <div class="text"><p>${input.value} <br /> [<span class="side-font">${playerSide}</span>]: <span class="yellow-color">${playerWins}<span></p></div>`;

      computer.innerHTML = `<div class="img-box"><img src=${randomCompName.img}/></div><div class="text"><p>
      ${randomCompName.name} <br /> [<span class="side-font">${computerSide}</span>]: <span class="yellow-color">
      ${compWins}<span></p></div>`;

      inDraw.innerHTML = `<p>Played to <br/> a draw: <span class="red-color">${gameInDraw}<span></p>`;
    }, 250);
  }
  startGame();
});

/* Reset Game Button */

resetBtn.forEach((btn) =>
  btn.addEventListener("click", () => location.reload())
);

/* Functions */

export {
  line,
  refreshTable,
  playerClicks,
  compClicks,
  allMadeClicks,
  inDraw,
  input,
  playerSide,
  playerName,
  computer,
  randomCompName,
  computerSide,
  table,
  tableBoxes,
};
