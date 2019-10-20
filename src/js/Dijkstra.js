// Dijkstra Algorithm

//All nodes distance are set to Infinity
//set startNode distance to 0
//get all unvisitedNodes
//while still unvisitedNodes
  //sort unvisitedNodes by distance
  //get closestNode with shift from unvisitedNodes array
  //mark closestNode as visited and push to visitedNodes array
  //update unvisitedNodesNeighbors summing +1 to the Neighbors' distance
  //repeat while still unvisitedNodes

  //when closestNode is equal to end node, stop the algorithm;
  //Because we store to any node the previous Node we get a backtrack of the shortestPath;
  
export class Dijkstra {
  constructor(grid, startNode, endNode) {
    this.grid = grid;
    this.startNode = startNode;
    this.endNode = endNode;
    this.unvisitedNodes = [];
    this.visitedNodes = [];
  }
  init() {
    //set start Node distance to 0;
    this.startNode.distance = 0;

    //get all unvisitedNodes
    this.getUnvisitedNodes();

    //while still exists univisitedNodes
    while (!!this.unvisitedNodes) {
      //sort unvisitedNodes by distance, this makes the Algorithm start searching from neighbors and not from the begin of the grid;
      this.orderUnvisitedNodesByDistance();

      //remove the first element of unvisitedNodes Array
      //Algorithm has now a starting point
      const closestNode = this.unvisitedNodes.shift();

      //Do nothing if Its a wall;
      if (closestNode.isWall) continue;

      //In case that start node cant reach end node It should stop the Algorithm
      if (closestNode.distance == Infinity) return this.visitedNodes;

      //Now our closestNode is visited push to an array of visitedNodes;
      closestNode.visited = true;
      this.visitedNodes.push(closestNode);

      //Update the unvisitedNeighbors
      this.updateUnvisitedNeighbors(closestNode, this.grid);

      //When Algorithm reach the endNode, stop it
      if (closestNode == this.endNode) return this.visitedNodes;
    }
  }
  updateUnvisitedNeighbors(closestNode, grid) {
    const unvisitedNeighbors = this.getUnvisitedNeighbors(closestNode, grid);

    //for each unvisited neighbor sum +1 to actual distance;
    unvisitedNeighbors.forEach(neighbors => {
      neighbors.distance = closestNode.distance + 1;
      neighbors.previousNode = closestNode;
    });
  }

  getUnvisitedNeighbors(closestNode, grid) {
    const unvisitedNeighbors = [];
    const { row, col } = closestNode;

    if (row > 0) unvisitedNeighbors.push(grid[row - 1][col]); //search top Neighbor
    if (row < grid.length - 1) unvisitedNeighbors.push(grid[row + 1][col]); //search bottom Neighbor
    if (col > 0) unvisitedNeighbors.push(grid[row][col - 1]); //search left Neighbor
    if (col < grid[0].length - 1) unvisitedNeighbors.push(grid[row][col + 1]); //search right Neighbor, its grid[0] because we need to get length of collum and not of the row

    //return neighbors that are still not visited
    return unvisitedNeighbors.filter(neighbors => !neighbors.visited);
  }

  orderUnvisitedNodesByDistance() {
    this.unvisitedNodes.sort((a, b) => a.distance - b.distance);
  }
  getUnvisitedNodes() {
    for (let row of this.grid) {
      for (let col of row) {
        this.unvisitedNodes.push(col);
      }
    }
  }

  getShortestPath(endNode) {
    const nodesInShortestPath = [];
    let currentNode = endNode;

    while (currentNode) {
      nodesInShortestPath.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }

    return nodesInShortestPath;
  }
}
