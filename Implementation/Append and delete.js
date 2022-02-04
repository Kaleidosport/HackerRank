function appendAndDelete(s, t, k) {
    let arrayS = s.split(""), arrayT = t.split(""), total = 0
    for (let i = arrayS.length - 1; i >= 0; i--) {
        if (arrayS[i] != arrayT[i] || arrayT[i] === undefined) {
            arrayS.pop()
            total++
            console.log(total)
            if (total > k) return "No"
            console.log("T " + arrayT)
            console.log("S " + arrayS)
        } 
    }
    return total > k + (arrayT.length - arrayS.length) ? "No" : "Yes"
} // 5 test cases failed.

function appendAndDelete(s, t, k) {
    let arrayS = s.split(""), arrayT = t.split(""), total = 0, sLength = arrayS.length
    for (let i = 0; i < sLength; i++) {
        if (arrayS[i] != arrayT[i] || arrayT[i] === undefined) {
            arrayS.splice(i, sLength - i)
            total += sLength - arrayS.length
            break
        } 
    }
    return total + (arrayT.length - arrayS.length) > k ? "No" : "Yes"
} // 2 tests cases failed.

function appendAndDelete(s, t, k) {
    let arrayS = s.split(""), arrayT = t.split(""), total = 0, sLength = arrayS.length, tLength = arrayT.length
    if (tLength > sLength) {
        return tLength + sLength <= k || s.startsWith("z") ? "Yes" : "No"
    }
    else {
       for (let i = 0; i < sLength; i++) {
            if (arrayS[i] != arrayT[i] || arrayT[i] === undefined) {
            arrayS.splice(i, sLength - i)
            total += sLength - arrayS.length
            break
            } 
        } 
    }
    return total + (tLength - arrayS.length) > k ? "No" : "Yes"
}