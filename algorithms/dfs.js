class Graph {
    constructor() {
      this.nodes = [];
      this.adjacencyList = {};
    }
  
    addNode(node) {
      this.nodes.push(node);
      this.adjacencyList[node] = [];
    }
  
    addEdge(node1, node2) {
      this.adjacencyList[node1].push(node2);
      this.adjacencyList[node2].push(node1);
    }
  
    dfs(start) {
      const visited = {};
      const result = [];
      const adjacencyList = this.adjacencyList;
  
      (function dfsVisit(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
  
        adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            return dfsVisit(neighbor);
          }
        });
      })(start);
  
      return result;
    }
  }
  
  const graph = new Graph();
  
  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  graph.addNode("E");
  graph.addNode("F");
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "E");
  graph.addEdge("D", "F");
  graph.addEdge("E", "F");
  
  console.log(graph.dfs("A")); // Output: ['A', 'B', 'D', 'E', 'C', 'F']

  