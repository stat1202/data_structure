// DFS
Graph.prototype.dfs = function (startVertex) {
  // this._dfsRecursiveVisit(startVertex);
  this._dfsLoopVisit(startVertex);
};

// 재귀를 이용한 DFS
Graph.prototype._dfsRecursiveVisit = function (vertex) {
  if (this.visited[vertex]) {
    return;
  }

  this.visited[vertex] = true;
  console.log(`visit "${vertex}"`);

  let neighbors = this.edge[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    this._dfsRecursiveVisit(neighbors[i]);
  }
};

// 스택을 이용한 DFS
Graph.prototype._dfsLoopVisit = function (vertex) {
  let stack = [];
  stack.push(vertex);
  while (stack.length) {
    let vertex = stack.pop();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      stack.push(neighbors[i]);
    }
  }
};

let graph = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
graph.print();
console.log('');

console.log(graph.sizeVertex());
console.log(graph.sizeEdge('C'));

graph.dfs('A');
