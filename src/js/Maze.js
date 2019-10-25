//populate board walls
//while something
//get random line and create a wall vertically 
//if the number is higher than the half of the  grid change to horizontally


export class Maze {
    constructor(grid) {
       this.grid = grid;
       this.orientation = "vertically";

    }

    init(){
        const randomLine = Math.floor(Math.random() * this.grid.length);
        const randomPassage = Math.floor(Math.random() * randomLine);

        randomLine < this.grid.length / 2 ? this.orientation = "horizontal" : this.orientation = "vertical";
             
        this.addBoardWalls(randomLine);
        //this.addWall(this.grid[randomLine], this.grid[randomPassage] );
        
    }
    addBoardWalls() {

        for (let i = 0; i < this.grid.length; i++) {

             this.addWall(this.grid[i][0]);
             this.addWall(this.grid[i][this.grid[i].length - 1]);

            for (let j = 0; j < this.grid[i].length; j++) {

                this.addWall(this.grid[0][j]);
                this.addWall(this.grid[this.grid.length - 1][j]);
       
            }
        
        }
     
    }
    addWall(line, passage) {
         line.isWall = true;
         //passage ? line[passage].isWall = false : "";
         const visitedElement = document.querySelector(`li[data-row="${line.row}"][data-col="${line.col}"]`);
         visitedElement.classList.add('node-wall');
    }

}
 