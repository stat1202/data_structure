function Graph() {
  this.edge = {};
}

Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
};

Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
  // 무방향 그래프
  this.edge[v2].push(v1);
};

Graph.prototype.removeEdge = function (v1, v2) {
  if (this.edge[v1]) {
    let idx = this.edge[v1].indexOf(v2);

    if (idx != -1) {
      this.edge[v1].splice(idx, 1);
    }

    if (this.edge[v1].length === 0) {
      delete this.edge[v1];
    }
  }
  // 무방향 그래프 v2 -> v1 삭제
  if (this.edge[v2]) {
    let idx = this.edge[v2].indexOf(v1);

    if (idx != -1) {
      this.edge[v2].splice(idx, 1);
    }

    if (this.edge[v2].length === 0) {
      delete this.edge[v2];
    }
  }
};

Graph.prototype.removeVertex = function (v) {
  if (this.edge[v] === undefined) return;

  let length = this.edge[v].length;
  let connectedVertex = [...this.edge[v]];

  for (let i = 0; i < length; i++) {
    this.removeEdge(v, connectedVertex[i]);
  }
};

Graph.prototype.sizeVertex = function () {
  return Object.keys(this.edge).length;
};

Graph.prototype.sizeEdge = function (vertex) {
  return this.edge[vertex] ? Object.keys(this.edge[vertex]).length : 0;
};

Graph.prototype.print = function () {
  for (let vertex in this.edge) {
    let neighbors = this.edge[vertex];

    if (neighbors.length === 0) continue;

    process.stdout.write(`${vertex} -> `);
    for (let i = 0; i < neighbors.length; i++) {
      process.stdout.write(`${neighbors[i]} `);
    }

    console.log('');
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

graph.removeEdge('B', 'F');
graph.removeEdge('B', 'E');
graph.print();
console.log('');

graph.removeVertex('B');
graph.print();
console.log('');

graph.removeVertex('D');
graph.print();
console.log('');

console.log(graph.sizeVertex());
console.log(graph.sizeEdge('C'));
