function breakingRecords(scores) {
    let newMin = 0, newMax = 0, storedMin = scores[0], storedMax = scores[0]
    for (let score of scores) {
        if (score > storedMax) {
        	storedMax = score
        	newMax++
        } 
        else if (score < storedMin) {
        	storedMin = score
        	newMin++
        } 
    }
    return [newMax, newMin]
}