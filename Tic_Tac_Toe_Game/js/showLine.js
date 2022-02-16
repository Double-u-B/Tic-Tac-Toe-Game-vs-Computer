import { line } from "./main.js";
import { refreshTable } from "./startGame.js";

const showWinLine = (winLine) => {
  line.classList.add(winLine);
  setTimeout(() => {
    line.classList.remove(winLine);
    refreshTable();
  }, 1500);
};

export { showWinLine };
