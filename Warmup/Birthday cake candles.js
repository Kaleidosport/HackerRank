function birthdayCakeCandles(candles) {
    const CANDLES = candles.sort((a, b) => b - a)
    let highest = CANDLES[0]
    let count = 1
    for (let i = 1; i < CANDLES.length; i++) {
        if (candles.sort((a, b) => b - a)[i] === highest) count++
        else break
    }
    return count
}

// ************** Only worked for 4 cases out of 8, timed-out for the 4 remaining ones ***************

function birthdayCakeCandles(candles) {
    return candles.filter(x => x === Math.max(...candles)).length
}

// ************** Same issue, timed-out for cases 5 to 8... **************

function birthdayCakeCandles(candles) {
    let highest = Math.max(...candles)
    let count = candles.filter(x => x === highest).length
    return count
}

// ************** The last one worked but... ***************

function birthdayCakeCandles(candles) {
    let highest = Math.max(candles.reduce((a, b) => Math.max(a, b)))
    return candles.filter(c => c === highest).length
}