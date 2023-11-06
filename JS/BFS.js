// Queue class definition
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(obj) {
    this.items.push(obj);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// BFS function definition
function doBFS(graph, source) {
  let bfsInfo = [];

  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null
    };
  }

  bfsInfo[source].distance = 0;

  let queue = new Queue();
  queue.enqueue(source);

  // Traverse the graph
  while (!queue.isEmpty()) {
    let u = queue.dequeue();

    graph[u].forEach(v => {
      if (bfsInfo[v].distance === null) {
        queue.enqueue(v);
        bfsInfo[v].distance = bfsInfo[u].distance + 1;
        bfsInfo[v].predecessor = u;
      }
    });
  }

  return bfsInfo;
}

// Graph representation (Adjacency list)
let adjList = [
  [1],
  [0, 4, 5],
  [3, 4, 5],
  [2, 6],
  [1, 2],
  [1, 2, 6],
  [3, 5],
  []
];

// Performing BFS on the graph
let bfsInfo = doBFS(adjList, 3);

// Logging the BFS result
bfsInfo.forEach((info, index) => {
  console.log(`vertex ${index}: distance = ${info.distance}, predecessor = ${info.predecessor}`);
});

