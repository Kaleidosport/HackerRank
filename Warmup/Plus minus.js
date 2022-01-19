function plusMinus(arr) {
    // Write your code here
    let positive = arr.filter(x => x > 0).length
    let negative = arr.filter(y => y < 0).length
    let zeroes = arr.filter(z => z === 0).length
    
    return console.log((positive / arr.length).toFixed(6) + "\n" + (negative / arr.length).toFixed(6) + "\n" + (zeroes / arr.length).toFixed(6))
}