function countingValleys(steps, path) {
    let distanceFromSeaLevel = 0, valleys = 0, hikingPath = [...path]
    for (let step of hikingPath) {
        if (distanceFromSeaLevel === 0 && step === "D") valleys++
        if (step === "D") distanceFromSeaLevel--
        if (step === "U") distanceFromSeaLevel++        
    }
    return valleys
}