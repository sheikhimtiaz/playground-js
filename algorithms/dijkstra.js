function dijkstra(graph, start) {
    const visited = new Set();
    const distances = new Map();
    const prev = new Map();

    for (const node in graph) {
        distances.set(node, Infinity);
        prev.set(node, null);
    }

    distances.set(start, 0);

    while (visited.size !== Object.keys(graph).length) {
        let currNode = null;
        let currDist = Infinity;

        for (const [node, dist] of distances) {
            if (!visited.has(node) && dist < currDist) {
                currNode = node;
                currDist = dist;
            }
        }

        for (const [neighbor, weight] of graph[currNode]) {
            const dist = currDist + weight;
            if (dist < distances.get(neighbor)) {
                distances.set(neighbor, dist);
                prev.set(neighbor, currNode);
            }
        }

        visited.add(currNode);
    }

    return {
        distances,
        prev
    };
}
const dijkstraGraph = {
    A: {
        B: 2,
        C: 3
    },
    B: {
        D: 4,
        E: 5
    },
    C: {
        F: 6
    },
    D: {
        G: 7
    },
    E: {
        G: 8,
        H: 9
    },
    F: {
        H: 10
    },
    G: {},
    H: {},
};
console.log(dijkstra(dijkstraGraph, 'A'));
