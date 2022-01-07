import { checkTurn } from "./checkTurn.js";

import {
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
} from "./main.js";

import {
  horizontalTopWin,
  horizontalMidWin,
  horizontalBotWin,
  verticalLeftWin,
  verticalMidWin,
  verticalRightWin,
  rightAngleWin,
  leftAngleWin,
} from "./showLine.js";

let playerWins = "0";
let compWins = "0";
let gameInDraw = "0";

const checkGame = () => {
  let wins = 0;

  if (playerClicks.length >= 3 || compClicks.length >= 3) {
    if (
      playerClicks.includes("0") &&
      playerClicks.includes("1") &&
      playerClicks.includes("2")
    ) {
      horizontalTopWin();
      playerWins++;
      wins++;
    }

    if (
      compClicks.includes("0") &&
      compClicks.includes("1") &&
      compClicks.includes("2")
    ) {
      horizontalTopWin();
      compWins++;
      wins++;
    }

    if (
      playerClicks.includes("3") &&
      playerClicks.includes("4") &&
      playerClicks.includes("5")
    ) {
      horizontalMidWin();
      playerWins++;
      wins++;
    }

    if (
      compClicks.includes("3") &&
      compClicks.includes("4") &&
      compClicks.includes("5")
    ) {
      horizontalMidWin();
      compWins++;
      wins++;
    }

    if (
      playerClicks.includes("6") &&
      playerClicks.includes("7") &&
      playerClicks.includes("8")
    ) {
      horizontalBotWin();
      playerWins++;
      wins++;
    }

    if (
      compClicks.includes("6") &&
      compClicks.includes("7") &&
      compClicks.includes("8")
    ) {
      horizontalBotWin();
      compWins++;
      wins++;
    }

    if (
      playerClicks.includes("0") &&
      playerClicks.includes("3") &&
      playerClicks.includes("6")
    ) {
      verticalLeftWin();
      playerWins++;
      wins++;
    }

    if (
      compClicks.includes("0") &&
      compClicks.includes("3") &&
      compClicks.includes("6")
    ) {
      verticalLeftWin();
      compWins++;
      wins++;
    }

    if (
      playerClicks.includes("1") &&
      playerClicks.includes("4") &&
      playerClicks.includes("7")
    ) {
      verticalMidWin();
      playerWins++;
      wins++;
    }

    if (
      compClicks.includes("1") &&
      compClicks.includes("4") &&
      compClicks.includes("7")
    ) {
      verticalMidWin();
      compWins++;
      wins++;
    }

    if (
      playerClicks.includes("2") &&
      playerClicks.includes("5") &&
      playerClicks.includes("8")
    ) {
      verticalRightWin();
      playerWins++;
      wins++;
    }

    if (
      compClicks.includes("2") &&
      compClicks.includes("5") &&
      compClicks.includes("8")
    ) {
      verticalRightWin();
      compWins++;
      wins++;
    }

    if (
      playerClicks.includes("2") &&
      playerClicks.includes("4") &&
      playerClicks.includes("6")
    ) {
      rightAngleWin();
      playerWins++;
      wins++;
    }

    if (
      compClicks.includes("2") &&
      compClicks.includes("4") &&
      compClicks.includes("6")
    ) {
      rightAngleWin();
      compWins++;
      wins++;
    }

    if (
      playerClicks.includes("0") &&
      playerClicks.includes("4") &&
      playerClicks.includes("8")
    ) {
      leftAngleWin();
      playerWins++;
      wins++;
    }

    if (
      compClicks.includes("0") &&
      compClicks.includes("4") &&
      compClicks.includes("8")
    ) {
      leftAngleWin();
      compWins++;
      wins++;
    }
  }

  if (allMadeClicks.length === 9 && wins === 0) {

    setTimeout(() => {
      gameInDraw++;
      inDraw.innerHTML = `<p>Played to <br/> a draw: <span class="red-color">${gameInDraw}<span></p>`;
      refreshTable();
    }, 1500);
  }

  if (playerClicks.length >= 3 || compClicks.length >= 3) {
    playerName.innerHTML = `<div class="img-box"><i class="fas fa-user"></i></div>
    <div class="text"><p>${input.value} <br/> [<span class="side-font">${playerSide}</span>]: <span class="yellow-color">${playerWins}<span></p></div>`;

    computer.innerHTML = `<div class="img-box"><img src=${randomCompName.img}/></div><div class="text"><p>${randomCompName.name}<br/> [<span class="side-font">${computerSide}</span>]: <span class="yellow-color">${compWins}<span></p></div>`;
  }

  checkTurn();
};

export { checkGame, playerWins, compWins, gameInDraw };
