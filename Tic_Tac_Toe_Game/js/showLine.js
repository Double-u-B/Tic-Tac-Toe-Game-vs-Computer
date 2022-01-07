import { line, refreshTable} from "./main.js";

const horizontalTopWin = () => {
  line.classList.add("horizontalTopWin");
  setTimeout(() => {
    line.classList.remove("horizontalTopWin");
    refreshTable();
  }, 1500);
};

const horizontalMidWin = () => {
  line.classList.add("horizontalMidWin");
  setTimeout(() => {
    line.classList.remove("horizontalMidWin");
    refreshTable();
  }, 1500);
};

const horizontalBotWin = () => {
  line.classList.add("horizontalBotWin");
  setTimeout(() => {
    line.classList.remove("horizontalBotWin");
    refreshTable();
  }, 1500);
};

const verticalLeftWin = () => {
  line.classList.add("verticalLeftWin");
  setTimeout(() => {
    line.classList.remove("verticalLeftWin");
    refreshTable();
  }, 1500);
};

const verticalMidWin = () => {
  line.classList.add("verticalMidWin");
  setTimeout(() => {
    line.classList.remove("verticalMidWin");
    refreshTable();
  }, 1500);
};

const verticalRightWin = () => {
  line.classList.add("verticalRightWin");
  setTimeout(() => {
    line.classList.remove("verticalRightWin");
    refreshTable();
  }, 1500);
};

const rightAngleWin = () => {
  line.classList.add("rightAngleWin");
  setTimeout(() => {
    line.classList.remove("rightAngleWin");
    refreshTable();
  }, 1500);
};

const leftAngleWin = () => {
  line.classList.add("leftAngleWin");
  setTimeout(() => {
    line.classList.remove("leftAngleWin");
    refreshTable();
  }, 1500);
};

export{horizontalTopWin,
horizontalMidWin,
horizontalBotWin,
verticalLeftWin,
verticalMidWin,
verticalRightWin,
rightAngleWin,
leftAngleWin}