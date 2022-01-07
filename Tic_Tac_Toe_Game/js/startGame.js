import { allPossibleClicks } from "./data.js";

import { table, tableBoxes, playerSide, computerSide } from "./main.js";
import { checkGame } from "./checkClicks.js";
// import {changeTurn}

let allMadeClicks = [];
let playerClicks = [];
let compClicks = [];

let changeTurn = true;

/* Additional functions */

/* Refresh table */
const refreshTable = () => {
  Array.from(table.children).forEach((item) => (item.innerHTML = ""));

  playerClicks = [];
  compClicks = [];
  allMadeClicks = [];
};

/* Show Comp Click */
const writeCompClick = (click) => {
  tableBoxes.map((number) => {
    if (click === number.className.slice(5)) {
      number.innerHTML = computerSide;
    }
  });
  changeTurn = true;
};

/* Add Comp Click to an array */
const addItem = (number) => {
  compClicks.push(number);
  allMadeClicks.push(number);
};


/* Start Game function */
const startGame = () => {
  table.addEventListener("click", (e) => {
    const speedRate = [1550, 2000, 2300];
    let clickSpeed = Math.floor(Math.random() * speedRate.length);

    const click = e.target.classList[1].slice(1);

    if (allMadeClicks.includes(click) || !changeTurn) {
      return;
    } else {
      playerClicks.push(click);
      allMadeClicks.push(click);
      e.target.innerHTML = `${playerSide}`;
      changeTurn = false;
      checkGame();
    }

    setTimeout(() => {
      let missingClick;
      let blockingClick;

      /* Start of missingClick check */

      /* horizontal 1 level check for click */
      if (
        compClicks.includes("0") &&
        compClicks.includes("1") &&
        !allMadeClicks.includes("2")
      ) {
        missingClick = "2";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("0") &&
        compClicks.includes("2") &&
        !allMadeClicks.includes("1")
      ) {
        missingClick = "1";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("2") &&
        compClicks.includes("1") &&
        !allMadeClicks.includes("0")
      ) {
        missingClick = "0";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* horizontal 2 level check for click */
      } else if (
        compClicks.includes("3") &&
        compClicks.includes("4") &&
        !allMadeClicks.includes("5")
      ) {
        missingClick = "5";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("3") &&
        compClicks.includes("5") &&
        !allMadeClicks.includes("4")
      ) {
        missingClick = "4";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("4") &&
        compClicks.includes("5") &&
        !allMadeClicks.includes("3")
      ) {
        missingClick = "3";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* horizontal 3 level check for click */
      } else if (
        compClicks.includes("6") &&
        compClicks.includes("7") &&
        !allMadeClicks.includes("8")
      ) {
        missingClick = "8";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("6") &&
        compClicks.includes("8") &&
        !allMadeClicks.includes("7")
      ) {
        missingClick = "7";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("7") &&
        compClicks.includes("8") &&
        !allMadeClicks.includes("6")
      ) {
        missingClick = "6";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* vertical 1 level check for click */
      } else if (
        compClicks.includes("0") &&
        compClicks.includes("3") &&
        !allMadeClicks.includes("6")
      ) {
        missingClick = "6";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("0") &&
        compClicks.includes("6") &&
        !allMadeClicks.includes("3")
      ) {
        missingClick = "3";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("3") &&
        compClicks.includes("6") &&
        !allMadeClicks.includes("0")
      ) {
        missingClick = "0";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* vertical 2 level check for click */
      } else if (
        compClicks.includes("1") &&
        compClicks.includes("4") &&
        !allMadeClicks.includes("7")
      ) {
        missingClick = "7";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("1") &&
        compClicks.includes("7") &&
        !allMadeClicks.includes("4")
      ) {
        missingClick = "4";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("4") &&
        compClicks.includes("7") &&
        !allMadeClicks.includes("1")
      ) {
        missingClick = "1";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* vertical 3 level check for click */
      } else if (
        compClicks.includes("2") &&
        compClicks.includes("5") &&
        !allMadeClicks.includes("8")
      ) {
        missingClick = "8";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("2") &&
        compClicks.includes("8") &&
        !allMadeClicks.includes("5")
      ) {
        missingClick = "5";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("5") &&
        compClicks.includes("8") &&
        !allMadeClicks.includes("2")
      ) {
        missingClick = "2";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* diagonal leftTop to rightBottom check for click */
      } else if (
        compClicks.includes("0") &&
        compClicks.includes("4") &&
        !allMadeClicks.includes("8")
      ) {
        missingClick = "8";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("0") &&
        compClicks.includes("8") &&
        !allMadeClicks.includes("4")
      ) {
        missingClick = "4";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("4") &&
        compClicks.includes("8") &&
        !allMadeClicks.includes("0")
      ) {
        missingClick = "0";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* diagonal leftBottom to rightTop check for click */
      } else if (
        compClicks.includes("2") &&
        compClicks.includes("4") &&
        !allMadeClicks.includes("6")
      ) {
        missingClick = "6";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("2") &&
        compClicks.includes("6") &&
        !allMadeClicks.includes("4")
      ) {
        missingClick = "4";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (
        compClicks.includes("4") &&
        compClicks.includes("6") &&
        !allMadeClicks.includes("2")
      ) {
        missingClick = "2";
        addItem(missingClick);
        writeCompClick(missingClick);
        /* End of missingClick check */

        /* Start of blocking check */
        /* horizontal 1 level */
      } else if (
        playerClicks.includes("0") &&
        playerClicks.includes("1") &&
        !allMadeClicks.includes("2")
      ) {
        blockingClick = "2";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("0") &&
        playerClicks.includes("2") &&
        !allMadeClicks.includes("1")
      ) {
        blockingClick = "1";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("1") &&
        playerClicks.includes("2") &&
        !allMadeClicks.includes("0")
      ) {
        blockingClick = "0";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* horizontal 2 level */
      } else if (
        playerClicks.includes("3") &&
        playerClicks.includes("4") &&
        !allMadeClicks.includes("5")
      ) {
        blockingClick = "5";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("3") &&
        playerClicks.includes("5") &&
        !allMadeClicks.includes("4")
      ) {
        blockingClick = "4";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("4") &&
        playerClicks.includes("5") &&
        !allMadeClicks.includes("3")
      ) {
        blockingClick = "3";
        addItem(blockingClick);
        writeCompClick(blockingClick);
        /* horizontal 3 level */
      } else if (
        playerClicks.includes("6") &&
        playerClicks.includes("7") &&
        !allMadeClicks.includes("8")
      ) {
        blockingClick = "8";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("6") &&
        playerClicks.includes("8") &&
        !allMadeClicks.includes("7")
      ) {
        blockingClick = "7";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("7") &&
        playerClicks.includes("8") &&
        !allMadeClicks.includes("6")
      ) {
        blockingClick = "6";
        addItem(blockingClick);
        writeCompClick(blockingClick);
        /* vertical 1 level*/
      } else if (
        playerClicks.includes("0") &&
        playerClicks.includes("3") &&
        !allMadeClicks.includes("6")
      ) {
        blockingClick = "6";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("0") &&
        playerClicks.includes("6") &&
        !allMadeClicks.includes("3")
      ) {
        blockingClick = "3";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("3") &&
        playerClicks.includes("6") &&
        !allMadeClicks.includes("0")
      ) {
        blockingClick = "0";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* vertical 2 level*/
      } else if (
        playerClicks.includes("1") &&
        playerClicks.includes("4") &&
        !allMadeClicks.includes("7")
      ) {
        blockingClick = "7";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("1") &&
        playerClicks.includes("7") &&
        !allMadeClicks.includes("4")
      ) {
        blockingClick = "4";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("4") &&
        playerClicks.includes("7") &&
        !allMadeClicks.includes("1")
      ) {
        blockingClick = "1";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* vertical 3 level*/
      } else if (
        playerClicks.includes("2") &&
        playerClicks.includes("5") &&
        !allMadeClicks.includes("8")
      ) {
        blockingClick = "8";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("2") &&
        playerClicks.includes("8") &&
        !allMadeClicks.includes("5")
      ) {
        blockingClick = "5";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("5") &&
        playerClicks.includes("8") &&
        !allMadeClicks.includes("2")
      ) {
        blockingClick = "2";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* diagonal leftTop to rightBottom */
      } else if (
        playerClicks.includes("0") &&
        playerClicks.includes("4") &&
        !allMadeClicks.includes("8")
      ) {
        blockingClick = "8";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("0") &&
        playerClicks.includes("8") &&
        !allMadeClicks.includes("4")
      ) {
        blockingClick = "4";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("4") &&
        playerClicks.includes("8") &&
        !allMadeClicks.includes("0")
      ) {
        blockingClick = "0";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* diagonal rightBottom to leftTop */
      } else if (
        playerClicks.includes("2") &&
        playerClicks.includes("4") &&
        !allMadeClicks.includes("6")
      ) {
        blockingClick = "6";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("2") &&
        playerClicks.includes("6") &&
        !allMadeClicks.includes("4")
      ) {
        blockingClick = "4";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        playerClicks.includes("4") &&
        playerClicks.includes("6") &&
        !allMadeClicks.includes("2")
      ) {
        blockingClick = "2";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* End of blocking check */
      } else {
        /* generate random click */
        let found = allPossibleClicks.filter(
          (number) => allMadeClicks.indexOf(number) < 0
        );

        let randomClick = found[Math.floor(Math.random() * found.length)];

        let foundRandomClick = randomClick.toString();

        addItem(foundRandomClick);
        writeCompClick(foundRandomClick);
      }
      checkGame();
      // }, 2500);  - or set static speed
    }, speedRate[clickSpeed]);
  });
};

export {
  startGame,
  allMadeClicks,
  playerClicks,
  compClicks,
  refreshTable,
  changeTurn,
};
