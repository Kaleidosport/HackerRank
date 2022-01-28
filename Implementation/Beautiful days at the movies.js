function beautifulDays(i, j, k) {
    let days = [], mappedDays = []
    for (let a = i; a < j + 1; a++) {
        days.push(a)
    }
    mappedDays = days.map(b => (Math.abs(b - parseInt([...b.toString()].reverse().join("")))) / k)
    return mappedDays.filter(c => c % 1 === 0).length
} // Worked, but timed-out!

function beautifulDays(i, j, k) {
    let days = [], mappedDays = []
    for (let a = i; a < j + 1; a++) {
        days.push([a, [...a.toString()].reverse().join("")])
    }
    mappedDays = days.map(b => Math.abs(b[0] - b[1]) / k)
    return mappedDays.filter(c => c % 1 === 0).length
} // Yatta!