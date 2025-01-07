
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

    bfs(start) {
        const visited = {};
        const result = [];
        const queue = [start];
        visited[start] = true;

        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current);

            this.adjacencyList[current].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

const bfsGraph = new Graph();

bfsGraph.addNode("A");
bfsGraph.addNode("B");
bfsGraph.addNode("C");
bfsGraph.addNode("D");
bfsGraph.addNode("E");
bfsGraph.addNode("F");

bfsGraph.addEdge("A", "B");
bfsGraph.addEdge("A", "C");
bfsGraph.addEdge("B", "D");
bfsGraph.addEdge("C", "E");
bfsGraph.addEdge("D", "E");
bfsGraph.addEdge("D", "F");
bfsGraph.addEdge("E", "F");

console.log(bfsGraph.bfs("A")); // Output: ['A', 'B', 'C', 'D', 'E', 'F']


