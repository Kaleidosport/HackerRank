function nonDivisibleSubset(k, s) {
    let biggestSubset = 0

    if (k === 1) return 1
    if (s.find(e => e % k === 0)) biggestSubset++
    if (k % 2 === 0) biggestSubset += s.find(e => e % k === k / 2) ? 1 : 0

    for (let i = 1; i < k / 2; i++) {
        biggestSubset += Math.max(s.filter(e => e % k === i).length, 
        s.filter(e => e % k === k - i).length)
    }

    return biggestSubset
}