function pickingNumbers(a) {
    let sortedA = a.sort((a, b) => a - b), pairs = [], longest = 0, base = 0
    for (let i = 0; i < sortedA.length; i++) {
        let difference = sortedA[i] - sortedA[base]
        if (difference < 2) {
            pairs.push(sortedA[i])
            if (pairs.length > longest) longest = pairs.length
        } 
        else {
            pairs.splice(0, pairs.length) // Or pairs.length === 0 or pairs = []
            base = i
            pairs.push(sortedA[i])
        }
    }
    return longest
}