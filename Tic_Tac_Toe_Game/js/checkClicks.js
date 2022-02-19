import { checkTurn } from "./checkTurn.js";
import { checkSet } from "./checkSet.js";
import {
  inDraw,
  input,
  playerSide,
  playerName,
  computer,
  computerSide,
  compPlayer,
} from "./main.js";
import {
  refreshTable,
  playerClicks,
  compClicks,
  allMadeClicks,
} from "./startGame.js";
import { showWinLine } from "./showLine.js";

let playerWins = "0";
let compWins = "0";
let gameInDraw = "0";

const checkGame = () => {
  let wins = 0;

  if (playerClicks.length >= 3 || compClicks.length >= 3) {
    if (checkSet(["0", "1", "2"], "player")) {
      showWinLine("horizontalTopWin");
      playerWins++;
      wins++;
    }

    if (checkSet(["0", "1", "2"], "comp")) {
      showWinLine("horizontalTopWin");
      compWins++;
      wins++;
    }

    if (checkSet(["3", "4", "5"], "player")) {
      showWinLine("horizontalMidWin");
      playerWins++;
      wins++;
    }

    if (checkSet(["3", "4", "5"], "comp")) {
      showWinLine("horizontalMidWin");
      compWins++;
      wins++;
    }

    if (checkSet(["6", "7", "8"], "player")) {
      showWinLine("horizontalBotWin");
      playerWins++;
      wins++;
    }

    if (checkSet(["6", "7", "8"], "comp")) {
      showWinLine("horizontalBotWin");
      compWins++;
      wins++;
    }

    if (checkSet(["0", "3", "6"], "player")) {
      showWinLine("verticalLeftWin");
      playerWins++;
      wins++;
    }

    if (checkSet(["0", "3", "6"], "comp")) {
      showWinLine("verticalLeftWin");
      compWins++;
      wins++;
    }

    if (checkSet(["1", "4", "7"], "player")) {
      showWinLine("verticalMidWin");
      playerWins++;
      wins++;
    }

    if (checkSet(["1", "4", "7"], "comp")) {
      showWinLine("verticalMidWin");
      compWins++;
      wins++;
    }

    if (checkSet(["2", "5", "8"], "player")) {
      showWinLine("verticalRightWin");
      playerWins++;
      wins++;
    }

    if (checkSet(["2", "5", "8"], "comp")) {
      showWinLine("verticalRightWin");
      compWins++;
      wins++;
    }

    if (checkSet(["2", "4", "6"], "player")) {
      showWinLine("rightAngleWin");
      playerWins++;
      wins++;
    }

    if (checkSet(["2", "4", "6"], "comp")) {
      showWinLine("rightAngleWin");
      compWins++;
      wins++;
    }

    if (checkSet(["0", "4", "8"], "player")) {
      showWinLine("leftAngleWin");
      playerWins++;
      wins++;
    }

    if (checkSet(["0", "4", "8"], "comp")) {
      showWinLine("leftAngleWin");
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

    computer.innerHTML = `<div class="img-box"><img src=${compPlayer.img}></div><div class="text"><p>
      ${compPlayer.name} <br /> [<span class="side-font">${computerSide}</span>]: <span class="yellow-color">
      ${compWins}<span></p></div>`;
  }

  checkTurn();
};

export { checkGame, playerWins, compWins, gameInDraw };
