import "../scss/app.scss";


import { Board } from "./index";
import { Dijkstra } from "./index";



const App = (() => {
  const $Module = document.querySelector(".app");
  const board = new Board();
  const dijkstra = new Dijkstra();
  const init = () => {
    board.renderBoard();
    events();
  };
  const events = () => { 
    $Module.querySelector(".startDijkstra").addEventListener("click", () => board.visualizeDijkstra());
  };

  return {
    init: init
  };
})();
App.init(); 
