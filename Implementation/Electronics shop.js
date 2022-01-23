function getMoneySpent(keyboards, drives, b) {
    let options = [], filler = []
    for (let i = 0; i < keyboards.length; i++) {
        filler = drives.map(d => d + keyboards[i])
        options = [...options, ...filler]
        console.log(filler)
        console.log(options)
    }
    let filteredOptions = options.filter(o => o < b)
    console.log(filteredOptions)
    return filteredOptions.length === 0 ? -1 : Math.max(...filteredOptions)
} // Worked for most test cases, gotta be optimized tho.

function getMoneySpent(keyboards, drives, b) {
    let options = [], filler = []
    for (let i = 0; i < keyboards.length; i++) {
        filler = drives.map(d => {if (d + keyboards[i] <= b) {
            return d + keyboards[i]
        }})
        options = [...options, ...filler]
        console.log(filler)
        console.log(options)
    }
    let filteredOptions = options.filter(o => o <= b)
    console.log(filteredOptions)
    return filteredOptions.length === 0 ? -1 : Math.max(...filteredOptions)
} // Better, but still timed out in 3 test cases.

function getMoneySpent(keyboards, drives, b) {
    let maxPrice = -1 // This was key in order to get the gist of things.
    for (let keyboard of keyboards) {
        for (let drive of drives) {
            let bundle = keyboard + drive
            maxPrice = bundle <= b ? (bundle > maxPrice ? bundle : maxPrice) : maxPrice
        } // The above ternary should be refactored: an if() or a ternary using a && would improve readability.
    }
    return maxPrice
}