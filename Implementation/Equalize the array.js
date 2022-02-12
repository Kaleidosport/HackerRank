function equalizeArray(arr) {
    let mostRedundant = arr.sort((a, b) =>
    arr.filter(e => e === a).length
    - arr.filter(e => e === b).length
    ).pop()
    
    console.log(mostRedundant)
    
    return arr.filter(x => x !== mostRedundant).length
} // Working just fine. Identifying the most redundant element was interesting, though I'm skeptical about the whole thing's time execution.