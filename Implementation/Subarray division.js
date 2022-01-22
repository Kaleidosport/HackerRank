function birthday(s, d, m) {
    let total = 0
    for (let i = 0; i < s.length; i++) {
        if (s.slice(i, i + m).reduce((a, b) => a + b) === d) total++
    }
    return total
}