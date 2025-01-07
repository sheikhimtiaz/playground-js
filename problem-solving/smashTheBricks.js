function smashTheBricks(bigHits, newtons) {
    const n = newtons.length;

    const pairs = newtons.map((value, index) => [index + 1, value]);
    pairs.sort((a, b) => b[1] - a[1]);

    const bigIndices = [];
    const smallIndices = [];
    let totalHits = 0;

    for (let i = 0; i < n && i < bigHits; i++) {
        bigIndices.push(pairs[i][0]);
        totalHits++;
    }

    for (let i = bigHits; i < n; i++) {
        smallIndices.push(pairs[i][0]);
        totalHits += pairs[i][1];
    }

    bigIndices.sort((a, b) => a - b);
    smallIndices.sort((a, b) => a - b);

    if (bigIndices.length === 0) bigIndices.push(-1);
    if (smallIndices.length === 0) smallIndices.push(-1);

    return [
        [totalHits],
        bigIndices,
        smallIndices
    ];
}


console.log(smashTheBricks(0, [2])); // [[2], [-1], [1]]
console.log(smashTheBricks(4, [3, 2, 5, 4, 6, 7, 9])); // [[13], [3, 5, 6, 7], [1, 2, 4]]

