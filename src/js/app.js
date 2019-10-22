import "../scss/app.scss";


import { Board } from "./index";
import { Dijkstra } from "./index";



const App = (() => {
  const $Module = document.querySelector(".app");
  const board = new Board();
  const init = () => {
    board.renderBoard();
    events();
  };
  const events = () => { 
    $Module.querySelector(".startDijkstra").addEventListener("click", () => board.visualizeDijkstra());
    $Module.querySelector(".startMaze").addEventListener("click", () => board.visualizeMaze());
  };

  return {
    init: init
  };
})();
App.init(); 
