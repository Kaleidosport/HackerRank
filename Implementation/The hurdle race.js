function hurdleRace(k, height) {
    let trimmedH = height.filter(h => h > k)
    if (trimmedH.length === 0) return 0
    else {
        let uniqueTH = [...new Set(trimmedH)] // Tip: think of other ways to remove duplicates.
        console.log(uniqueTH)
        return Math.max(...uniqueTH) - k // Better than using reduce(), see https://alleyful.github.io/2019/07/31/algorithm/hackerrank/27_TheHurdleRace/ for instance.
    }
}

// Idea: use new Set() to extract distinct integers.

console.log(hurdleRace(53, [52, 99, 93, 84, 50, 64, 61, 87, 89, 97, 64, 69, 61, 90, 82, 53, 50, 63, 82, 87, 76, 78, 75, 55, 80, 68, 75, 83, 69, 81, 95, 89, 60, 59, 90, 100, 90, 64, 53, 60, 88, 93, 62, 50, 75, 77, 60, 93, 55, 79, 52, 47, 65, 74, 62, 60, 96, 49, 73, 92, 79, 54, 100, 81, 63, 58, 75, 80, 89, 94, 52, 85, 57, 72, 97, 81, 97, 66, 84, 77, 83, 94, 85, 68, 99, 54, 64, 83, 67, 84, 81, 65, 59, 89, 68, 91, 60, 79, 74, 57]))

// Much better thinking and performance:

function hurdleRace(k, height) {
    return Math.max(...height) <= k ? 0 : Math.max(...height) - k
}