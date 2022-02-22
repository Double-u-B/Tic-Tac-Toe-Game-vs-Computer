import { table, tableBoxes, playerSide, computerSide } from "./main.js";
import { checkGame } from "./checkClicks.js";
import { checkSet } from "./checkSet.js";
import { combinations } from "./winComb.js";

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

/* Start Game function */
const startGame = () => {
  let clickSpeed;

  table.addEventListener("click", (e) => {
    const speedRate = [1600, 2000, 2300];
    let ranNum = Math.floor(Math.random() * speedRate.length);
    if (clickSpeed !== ranNum) clickSpeed = ranNum;

    if (ranNum === clickSpeed) {
      clickSpeed += 1;
      if (clickSpeed > speedRate.length - 1) clickSpeed = 0;
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
      let madeClick = false;

      const fillIn = (data) => {
        addItem(data);
        writeCompClick(data);
        madeClick = true;
      };

      combinations.map((set) => {
        let firstPart = set.slice(0, 2);
        let secondPart = set.slice(-1).toString();

        if (
          !madeClick &&
          checkSet(firstPart, "comp") &&
          !allMadeClicks.includes(secondPart)
        ) {
          fillIn(secondPart);
        }
      });

      combinations.map((set) => {
        let firstPart = set.slice(0, 2);
        let secondPart = set.slice(-1).toString();
        if (
          !madeClick &&
          checkSet(firstPart, "player") &&
          !allMadeClicks.includes(secondPart)
        ) {
          fillIn(secondPart);
        }
      });

      if (!madeClick && allMadeClicks.length < 9) {
        /* generate random click */
        let found = allPossibleClicks.filter(
          (number) => allMadeClicks.indexOf(number) < 0
        );

        let randomNumber = found[Math.floor(Math.random() * found.length)];

        let randomClick = randomNumber.toString();

        // addItem(randomClick);
        // writeCompClick(randomClick);
        fillIn(randomClick);
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
