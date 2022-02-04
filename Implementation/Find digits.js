function findDigits(n) {
    let o = String(n), p = 0
    for (let i = 0; i < o.length; i++) {
        if (n % o[i] === 0) p++
    }
    return p
}