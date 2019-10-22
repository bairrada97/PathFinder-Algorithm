import { Behaviors } from "./index";
import { Board } from "./index";
export class Node extends Behaviors(Board) {
  constructor(row, col) {
    super();
    this.row = row;
    this.col = col;
    this.isStart = row == this.startNodeRow && col == this.startNodeCol;
    this.isEnd = row == this.finishNodeRow && col == this.finishNodeCol;
    this.previousNode = false;
    this.distance = Infinity;
    this.visited = false;
    this.isWall = false;
  }

  render() {
    const node = document.createElement("li");
    node.dataset.row = this.row;
    node.dataset.col = this.col;
    
    const addClass = this.isStart ? "node-start" : this.isEnd ? "node-end" : "";
    addClass ? node.classList.add(addClass) : "";

    node.addEventListener("mousedown", evt => this.handleMouseDown(evt));
    node.addEventListener("mouseenter", evt => this.handleMouseEnter(evt));
    node.addEventListener("mouseup", evt => this.handleMouseUp(evt));
    return node;
  }
}
