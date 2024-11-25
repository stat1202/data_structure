// BFS
Graph.prototype.bfs = function (startVertex) {
  this._bfsLoopVisit(startVertex);
};

Graph.prototype._bfsLoopVisit = function (vertex) {
  let queue = [];

  queue.push(vertex);
  while (queue.length) {
    let vertex = queue.shift();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];

    for (let i = 0; i < neighbors.length; i++) {
      queue.push(neighbors[i]);
    }
  }
};

// 최단 경로 비용
Graph.prototype._bfsShortestPath = function (vertex) {
  let queue = [];
  queue.push(vertex);

  let distance = {};
  let pre_visit = {};
  for (let vertex in this.edge) {
    distance[vertex] = 0;
    pre_visit[vertex] = null;
  }

  while (queue.length) {
    let vertex = queue.shift();

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      if (!this.visited[neighbors[i]]) {
        distance[neighbors[i]] = distance[vertex] + 1;
        pre_visit[neighbors[i]] = vertex;
        queue.push(neighbors[i]);
      }
    }
  }

  return { distance, pre_visit };
};

// from 정점에서 to 정점으로 최단 경로 출력
Graph.prototype._from_to_path = function (pre_visit, from, to) {
  let stack = [];

  for (let v = to; v !== from; v = pre_visit[v]) {
    stack.push(v);
  }

  stack.push(from);

  while (stack.length) {
    let v = stack.pop();
    process.stdout.write(`${v} -> `);
  }

  console.log('end');
};

Graph.prototype.shortestPath = function (startVertex) {
  let result = this._bfsShortestPath(startVertex);

  console.log(result.distance);
  console.log(result.pre_visit);

  for (let vertex in this.edge) {
    if (vertex === startVertex) continue;

    this._from_to_path(result.pre_visit, startVertex, vertex);
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

// graph.bfs('A');
// console.log(graph._bfsShortestPath('A'));
console.log(graph.shortestPath('A'));
