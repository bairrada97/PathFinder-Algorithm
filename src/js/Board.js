import { Dijkstra } from "./index";
import { Maze } from "./index";
import { Node } from "./index";

export class Board {
  constructor() {
    this.board = [];
    this.rowSize = 15;
    this.colSize = 50;
    this.startNodeRow = 2;
    this.startNodeCol = 2;
    this.finishNodeRow = 10;
    this.finishNodeCol = 35;
    this.boardContainer = document.createElement("div");
  }

  renderBoard() {
    this.boardContainer.className = "board";
    document.querySelector(".app").append(this.boardContainer);
    //render bidimensional board
    for (let i = 0; i < this.rowSize; i++) {
      const currentRow = [];
      for (let j = 0; j < this.colSize; j++) {
        const node = new Node(i, j);
        this.boardContainer.appendChild(node.render());
        currentRow.push(node);
      }
      this.board.push(currentRow);
    }
  }

  visualizeMaze(){
    const grid = this.board;
    
    const maze = new Maze(grid);

    maze.init();
    
  }

  async visualizeDijkstra() {
    const grid = this.board;
    const startNode = this.board[this.startNodeRow][this.startNodeCol];
    const endNode = this.board[this.finishNodeRow][this.finishNodeCol];
    const dijsktra = new Dijkstra(grid, startNode, endNode);

    const visitedNodes = dijsktra.init();
    const shortestPath = dijsktra.getShortestPath(endNode);
    await this.animateDijkstra(visitedNodes);
    await this.animateShortestPath(shortestPath);
  }

  async animateDijkstra(visitedNodes) {
    const startNode = this.board[this.startNodeRow][this.startNodeCol];
    const endNode = this.board[this.finishNodeRow][this.finishNodeCol];
    for (let i = 0; i < visitedNodes.length; i++) {
      await this.delay(25);
      const visitedNode = visitedNodes[i];
      if (visitedNode !== startNode && visitedNode !== endNode) {
        const visitedElement = document.querySelector(`li[data-row="${visitedNode.row}"][data-col="${visitedNode.col}"]`);
        visitedElement.classList.add("node-visited");
      }
    }
  }

  async animateShortestPath(shortestPath) {
    const startNode = this.board[this.startNodeRow][this.startNodeCol];
    const endNode = this.board[this.finishNodeRow][this.finishNodeCol];
    for (let i = 0; i < shortestPath.length; i++) {
      await this.delay(50);
      const shortestNode = shortestPath[i];
      if (shortestNode !== startNode && shortestNode !== endNode) {
        document.querySelector(`li[data-row="${shortestNode.row}"][data-col="${shortestNode.col}"]`).classList.add("node-shortestPath");
      }
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
