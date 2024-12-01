// 다익스트라 shortestPath 재활용
ShortestPath.prototype.floydWarshall = function () {
  let dist = {};

  for (let srcVertex in this.edges) {
    dist[srcVertex] = {};
    for (let dstVertex in this.edges) {
      if (srcVertex === dstVertex) dist[srcVertex][dstVertex] = 0;
      else dist[srcVertex][dstVertex] = Number.POSITIVE_INFINITY;
    }
  }

  for (let srcVertex in this.edges) {
    for (let dstVertex in this.edges[srcVertex]) {
      dist[srcVertex][dstVertex] = this.edges[srcVertex][dstVertex];
    }
  }

  for (let midVertex in this.edges) {
    for (let srcVertex in this.edges) {
      for (let dstVertex in this.edges) {
        dist[srcVertex][dstVertex] = Math.min(
          dist[srcVertex][dstVertex],
          dist[srcVertex][midVertex] + dist[midVertex][dstVertex]
        );
      }
    }
  }

  for (let srcVertex in this.edges) {
    for (let dstVertex in this.edges) {
      if (dist[srcVertex][dstVertex] === Number.POSITIVE_INFINITY) {
        delete dist[srcVertex][dstVertex];
      }
    }
  }

  return dist;
};

let path = new ShortestPath();
path.addVertex('A');
path.addVertex('B');
path.addVertex('C');
path.addVertex('D');
path.addVertex('E');

path.addEdge('A', 'B', 10);
path.addEdge('A', 'C', 3);
path.addEdge('B', 'C', 1);
path.addEdge('B', 'D', 2);
path.addEdge('C', 'B', 4);
path.addEdge('C', 'D', 8);
path.addEdge('C', 'E', 2);
path.addEdge('D', 'E', 7);
path.addEdge('E', 'D', 9);

console.log(path);
console.log(path.floydWarshall());
