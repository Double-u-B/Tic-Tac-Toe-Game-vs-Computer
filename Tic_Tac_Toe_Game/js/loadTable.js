import { table } from "./main.js";

const $$ = document.querySelectorAll.bind(document);

const loadTable = () => {
  table.style.backgroundColor = "#1d3557";
  return `<div class="box t0"></div>
        <div class="box t1"></div>
        <div class="box t2"></div>
        <div class="box t3"></div>
        <div class="box t4"></div>
        <div class="box t5"></div>
        <div class="box t6"></div>
        <div class="box t7"></div>
        <div class="box t8"></div>
        <div class="winLine">
          <p></p>
        </div>`;
};

export { loadTable };
