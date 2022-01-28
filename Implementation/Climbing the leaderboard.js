function climbingLeaderboard(ranked, player) {
    let scores = []
    for (let score of ranked) {
        if (scores.length === 0 || !scores.includes(score)) scores.push(score)
        else continue
    }
    console.log(scores)
    let spot = scores.length + 1
    console.log(`At first, player starts at ${spot}th spot.`)
    let progress = []
    for (let score of player) {
        while (score >= scores[scores.length - 1] && spot > 0) {
            spot--
            scores.pop() // Don't try to play it like a smartass with a scores.splice(0, scores.length - 1) here.
            console.log(spot + "nd with a score of " + score + ".")
        }
        progress = [...progress, spot]
        console.log(`Then, with a score of ${score}, he or she climbs as follows: ${progress}.`)
    }
    return progress
} // This one worked just fine, but timed out on 4 test cases...

function climbingLeaderboard(ranked, player) {
    let scores = []
    
    for (let score of ranked) {
        scores.length === 0 || scores[scores.length - 1] !== score ? scores.push(score) : ""
    } // Sadly, the above was much faster than the former method using includes().
    
    let spot = scores.length + 1
    let progress = []
    for (let score of player) {
        while (score >= scores[scores.length - 1] && spot > 0) { // A tad bit faster with scores[spot - 2] instead of [scores.length - 1].
            spot--
            scores.pop()
        }
        progress.push(spot) // Faster than with spread operators.
    }
    return progress
}