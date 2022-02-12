function squares(a, b) {
    let sqrtA = Math.sqrt(a), sqrtB = Math.sqrt(b)
    let entry = Number.isInteger(sqrtA) ? sqrtA : Math.floor(sqrtA)
    let exit = Number.isInteger(sqrtB) ? sqrtB : Math.floor(sqrtB)
} // Pre-test.

function squares(a, b) {
    let sqrtA = Math.sqrt(a), sqrtB = Math.sqrt(b), entry = 0, exit = 0
    let total = Number.isInteger(sqrtA) ? 1 : 0

    const ROUNDSQRT = x => Number.isInteger(x) ? x : Math.floor(x)
    entry = ROUNDSQRT(sqrtA)
    exit = ROUNDSQRT(sqrtB)

    return total + exit - entry
} // Yatta, worked as a charm!