export class Maze {
    constructor(grid) {
       this.grid = grid;

    }

    init(){
        const randomLine = Math.floor(Math.random() * this.grid.length);
        const randomPassage = Math.floor(Math.random() * randomCol);
        this.divideRegions();
    }

    divideRegions(){
          
          const random = this.grid[randomCol];

          this.grid = this.grid.filter((node) => !node.iswall)

          for (let i = 0; i < random.length; i++) {
              random[i].isWall = true;
              random[randomPassage].isWall = false;
              const visitedElement = document.querySelector(`li[data-row="${random[i].row}"][data-col="${random[i].col}"]`);
              visitedElement.classList.add('node-wall');
          }
          

          const ze = document.querySelector(`li[data-row="${ random[randomPassage].row}"][data-col="${random[randomPassage].col}"]`);
          ze.classList.remove('node-wall');

    }

    addWall(){
        
    }

}
