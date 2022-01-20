function miniMaxSum(arr) {
    let min = arr.sort().slice(0, -1).reduce((a, b) => a + b)
    let max = arr.sort().slice(1, arr.length).reduce((a, b) => a + b)
    console.log(min, max)
}