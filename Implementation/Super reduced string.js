function superReducedString(s) {
    let sortedS = s.split("").sort().join("")
    let trimmed = sortedS.replace((/([a-z])\1/g), "")
    return trimmed.length === 0 ? `Empty String` : trimmed
} // 5 test cases failed.

/*
About RegEx /([a-z])\1/g :
1st Capturing Group ([a-z])
Match a single character present in the list below [a-z]
a-z matches a single character in the range between a (index 97) and z (index 122) (case sensitive)
\1 matches the same text as most recently matched by the 1st capturing group
Global pattern flags
g modifier: global. All matches (don't return after first match)
*/

function superReducedString(s) {
    for (let i = 0; i < 50; i++) {
        if (s.match(/([a-z])\1/)) s.replace((/([a-z])\1/), "")
        else break
    }
    return s.length === 0 ? `Empty String` : s
} // I could go with 50 due to the following constraint: 1 <= length of s <= 100.

function superReducedString(s) {
    while (s.match(/([a-z])\1/)) s = s.replace((/([a-z])\1/), "")
    return s.length === 0 ? `Empty String` : s
} // Worked as well.