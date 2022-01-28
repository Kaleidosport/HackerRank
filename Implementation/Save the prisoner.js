function saveThePrisoner(n, m, s) {
    let t = ((m + n) % n + s % n - 1) % n
    console.log(s % n)
    return t === 0 ? n : (t + n) % n
}

function saveThePrisoner(n, m, s) {
    let finalRound = m % n
    while (finalRound > 1) {
        finalRound--
        s++
    }
    return s <= n ? s : (s % n === 0 ? n : s % n) 
} // Worked but timed-out...