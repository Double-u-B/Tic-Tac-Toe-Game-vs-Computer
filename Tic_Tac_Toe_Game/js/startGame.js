import { table, tableBoxes, playerSide, computerSide } from "./main.js";
import { checkGame } from "./checkClicks.js";
import { checkSet } from "./checkSet.js";

const allPossibleClicks = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
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

let clickSpeed;
/* Start Game function */
const startGame = () => {
  table.addEventListener("click", (e) => {
    const speedRate = [1550, 2000, 2300];
    let ranNum = Math.floor(Math.random() * speedRate.length);

    if (clickSpeed !== ranNum) clickSpeed = ranNum;

    if (ranNum === clickSpeed) {
      clickSpeed += 1;
      if (clickSpeed > 2) clickSpeed = 0;
    }

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
      if (checkSet(["0", "1"], "comp") && !allMadeClicks.includes("2")) {
        missingClick = "2";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["0", "2"], "comp") && !allMadeClicks.includes("1")) {
        missingClick = "1";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["2", "1"], "comp") && !allMadeClicks.includes("0")) {
        missingClick = "0";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* horizontal 2 level check for click */
      } else if (checkSet(["3", "4"], "comp") && !allMadeClicks.includes("5")) {
        missingClick = "5";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["3", "5"], "comp") && !allMadeClicks.includes("4")) {
        missingClick = "4";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["4", "5"], "comp") && !allMadeClicks.includes("3")) {
        missingClick = "3";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* horizontal 3 level check for click */
      } else if (checkSet(["6", "7"], "comp") && !allMadeClicks.includes("8")) {
        missingClick = "8";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["6", "8"], "comp") && !allMadeClicks.includes("7")) {
        missingClick = "7";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["7", "8"], "comp") && !allMadeClicks.includes("6")) {
        missingClick = "6";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* vertical 1 level check for click */
      } else if (checkSet(["0", "3"], "comp") && !allMadeClicks.includes("6")) {
        missingClick = "6";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["0", "6"], "comp") && !allMadeClicks.includes("3")) {
        missingClick = "3";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["3", "6"], "comp") && !allMadeClicks.includes("0")) {
        missingClick = "0";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* vertical 2 level check for click */
      } else if (checkSet(["1", "4"], "comp") && !allMadeClicks.includes("7")) {
        missingClick = "7";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["1", "7"], "comp") && !allMadeClicks.includes("4")) {
        missingClick = "4";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["4", "7"], "comp") && !allMadeClicks.includes("1")) {
        missingClick = "1";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* vertical 3 level check for click */
      } else if (checkSet(["2", "5"], "comp") && !allMadeClicks.includes("8")) {
        missingClick = "8";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["2", "8"], "comp") && !allMadeClicks.includes("5")) {
        missingClick = "5";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["5", "8"], "comp") && !allMadeClicks.includes("2")) {
        missingClick = "2";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* diagonal leftTop to rightBottom check for click */
      } else if (checkSet(["0", "4"], "comp") && !allMadeClicks.includes("8")) {
        missingClick = "8";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["0", "8"], "comp") && !allMadeClicks.includes("4")) {
        missingClick = "4";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["4", "8"], "comp") && !allMadeClicks.includes("0")) {
        missingClick = "0";
        addItem(missingClick);
        writeCompClick(missingClick);

        /* diagonal leftBottom to rightTop check for click */
      } else if (checkSet(["2", "4"], "comp") && !allMadeClicks.includes("6")) {
        missingClick = "6";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["2", "6"], "comp") && !allMadeClicks.includes("4")) {
        missingClick = "4";
        addItem(missingClick);
        writeCompClick(missingClick);
      } else if (checkSet(["4", "6"], "comp") && !allMadeClicks.includes("2")) {
        missingClick = "2";
        addItem(missingClick);
        writeCompClick(missingClick);
        /* End of missingClick check */

        /* Start of blocking check */
        /* horizontal 1 level */
      } else if (
        checkSet(["0", "1"], "player") &&
        !allMadeClicks.includes("2")
      ) {
        blockingClick = "2";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["0", "2"], "player") &&
        !allMadeClicks.includes("1")
      ) {
        blockingClick = "1";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["1", "2"], "player") &&
        !allMadeClicks.includes("0")
      ) {
        blockingClick = "0";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* horizontal 2 level */
      } else if (
        checkSet(["3", "4"], "player") &&
        !allMadeClicks.includes("5")
      ) {
        blockingClick = "5";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["3", "5"], "player") &&
        !allMadeClicks.includes("4")
      ) {
        blockingClick = "4";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["4", "5"], "player") &&
        !allMadeClicks.includes("3")
      ) {
        blockingClick = "3";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* horizontal 3 level */
      } else if (
        checkSet(["6", "7"], "player") &&
        !allMadeClicks.includes("8")
      ) {
        blockingClick = "8";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["6", "8"], "player") &&
        !allMadeClicks.includes("7")
      ) {
        blockingClick = "7";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["7", "8"], "player") &&
        !allMadeClicks.includes("6")
      ) {
        blockingClick = "6";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* vertical 1 level*/
      } else if (
        checkSet(["0", "3"], "player") &&
        !allMadeClicks.includes("6")
      ) {
        blockingClick = "6";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["0", "6"], "player") &&
        !allMadeClicks.includes("3")
      ) {
        blockingClick = "3";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["3", "6"], "player") &&
        !allMadeClicks.includes("0")
      ) {
        blockingClick = "0";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* vertical 2 level*/
      } else if (
        checkSet(["1", "4"], "player") &&
        !allMadeClicks.includes("7")
      ) {
        blockingClick = "7";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["1", "7"], "player") &&
        !allMadeClicks.includes("4")
      ) {
        blockingClick = "4";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["4", "7"], "player") &&
        !allMadeClicks.includes("1")
      ) {
        blockingClick = "1";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* vertical 3 level*/
      } else if (
        checkSet(["2", "5"], "player") &&
        !allMadeClicks.includes("8")
      ) {
        blockingClick = "8";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["2", "8"], "player") &&
        !allMadeClicks.includes("5")
      ) {
        blockingClick = "5";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["5", "8"], "player") &&
        !allMadeClicks.includes("2")
      ) {
        blockingClick = "2";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* diagonal leftTop to rightBottom */
      } else if (
        checkSet(["0", "4"], "player") &&
        !allMadeClicks.includes("8")
      ) {
        blockingClick = "8";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["0", "8"], "player") &&
        !allMadeClicks.includes("4")
      ) {
        blockingClick = "4";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["4", "8"], "player") &&
        !allMadeClicks.includes("0")
      ) {
        blockingClick = "0";
        addItem(blockingClick);
        writeCompClick(blockingClick);

        /* diagonal rightBottom to leftTop */
      } else if (
        checkSet(["2", "4"], "player") &&
        !allMadeClicks.includes("6")
      ) {
        blockingClick = "6";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["2", "6"], "player") &&
        !allMadeClicks.includes("4")
      ) {
        blockingClick = "4";
        addItem(blockingClick);
        writeCompClick(blockingClick);
      } else if (
        checkSet(["4", "6"], "player") &&
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

        let randomNumber = found[Math.floor(Math.random() * found.length)];

        let RandomClick = randomNumber.toString();

        addItem(RandomClick);
        writeCompClick(RandomClick);
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
