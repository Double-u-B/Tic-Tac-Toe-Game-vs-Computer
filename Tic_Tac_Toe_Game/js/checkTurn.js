import { changeTurn } from "./startGame.js";

const $ = document.querySelector.bind(document);

const checkTurn = () => {
  if (changeTurn) {
    $(".playerName .img-box").classList.add("show-turn");
    $(".computer .img-box").classList.remove("show-turn");
  } else {
    $(".playerName .img-box").classList.remove("show-turn");
    $(".computer .img-box").classList.add("show-turn");
  }
};

export { checkTurn };
