import { line, tableBoxes } from "./main.js";
import { refreshTable } from "./startGame.js";

const showWinLine = (winLine) => {
  tableBoxes.forEach(box => box.classList.add("mouse-block"))
  line.classList.add(winLine);
  setTimeout(() => {
    line.classList.remove(winLine);
    refreshTable();
    tableBoxes.forEach(box => box.classList.remove("mouse-block"))
  }, 1500);
};

export { showWinLine };
