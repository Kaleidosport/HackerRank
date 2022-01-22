function divisibleSumPairs(n, k, ar) {
    let pairs = 0
    for (let i = 0; i < ar.length - 1; i++) {
        let intermediary = ar.slice(i + 1, n).map((a, b) => (ar[i] + a) % k)
        console.log(ar[i] + ": " + intermediary)
        pairs += intermediary.filter(x => x === 0).length
    }
    return pairs
}