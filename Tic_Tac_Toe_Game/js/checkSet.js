import { playerClicks, compClicks } from "./startGame.js";

export const checkSet = (arr, side) => {
  if (side === "player") {
    let success = arr.every((val) => {
      return playerClicks.indexOf(val) !== -1;
    });
    return success;
  }
  if (side === "comp") {
    let success = arr.every((val) => {
      return compClicks.indexOf(val) !== -1;
    });
    return success;
  }
};
