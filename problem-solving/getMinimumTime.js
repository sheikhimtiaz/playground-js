function getMinimumTime(processSize, capacity) {
    const n = processSize.length;
    const m = capacity.length;
    const assignments = Array.from({
        length: m
    }, () => []);

    // Sort processes from largest to smallest for a greedy approach
    const processIndices = processSize.map((_, i) => i);
    processIndices.sort((a, b) => processSize[b] - processSize[a]);

    for (const processIndex of processIndices) {
        const size = processSize[processIndex];
        let bestProcessor = -1;
        let earliestCompletion = Infinity;

        for (let i = 0; i < m; i++) {
            if (capacity[i] >= size) {
                const currentTime = assignments[i].length === 0 ? 1 :
                    assignments[i][assignments[i].length - 1] + 2;

                if (currentTime < earliestCompletion) {
                    earliestCompletion = currentTime;
                    bestProcessor = i;
                }
            }
        }

        if (bestProcessor === -1) return -1;
        assignments[bestProcessor].push(earliestCompletion);
    }

    let maxTime = 0;
    for (const times of assignments) {
        if (times.length > 0) {
            maxTime = Math.max(maxTime, times[times.length - 1]);
        }
    }

    return maxTime;
}

const processSize = [2, 5, 3];
const capacity = [6, 2, 4];
let result = getMinimumTime(processSize, capacity);
console.log("Minimum time required: " + result); // Should output 1

