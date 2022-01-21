function getTotalX(a, b) {
    let matches = 0
    for (let i = 1; i * a[0] <= b[0]; i++) {
        if (a.every(number => (i * a[0]) % number === 0) && b.every(number => number % (i * a[0]) === 0)) matches++
    }
    return matches
}