function repeatedString(s, n) {
    return !s.match(/[b-z]/) ? n : s.indexOf("a") !== -1 ? Math.round(s.match(/[a]/g).length * n / s.length) : 0
} // Lazy attempt. 7/23 test cases failed.

function repeatedString(s, n) {
    let remainder = n % s, aLength = s.match(/[a]/g).length, sLength = s.length
    return !s.match(/[b-z]/) ? n : s.indexOf("a") !== -1 ? Math.round(aLength * n / sLength) + s.substring(0, remainder) : 0
} // Nope, even worse.

function repeatedString(s, n) {
    let remainder = n % s.length, aLength = s.split("").filter(x => x === "a").length, sLength = s.length
    return !s.match(/[b-z]/) ? n : Math.floor(n / sLength) * aLength + s.substring(0, remainder).split("").filter(x => x === "a").length
} // Worked as a charm. Keys: aLength outside Math.floor(), as well as s.split("").filter() method since it's faster than match(). 