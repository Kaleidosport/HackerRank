function cutTheSticks(arr) {
    while (arr.length > 0) {
        console.log(arr.length)
        arr = arr.sort().map(x => x - arr[0]).filter(y => y > 0)
    }
} // The output is right, but HackerRank forces the user to return an array.

function cutTheSticks(arr) {
    let results = []
    arr.sort((a, b) => a - b) // This was key since arr.sort() only matched up 4 test cases.
    while (arr.length > 0) {
        results.push(arr.length)
        arr.filter(y => y > arr[0])
    }
    return results
}