function migratoryBirds(arr) {
    let referral = 0, type = 0
    let sortedArr = arr.sort()
    for (let i = 0; i < sortedArr.length; i++) {
        let balance = sortedArr.filter(x => x === sortedArr[i]).length
        if (balance > referral) {
            referral = balance
            type = sortedArr[i]
        }
    }
    return type
}

// Other solution

function migratoryBirds(arr) {
    let referral = {}, type = 0
    let sortedArr = arr.sort()
    for (let i = 0; i < sortedArr.length; i++) {
        !referral[sortedArr[i]] ? referral[sortedArr[i]] = 1 : referral[sortedArr[i]] += 1
        
        if (referral[sortedArr[i]] > type) type = sortedArr[i]
        console.log("Index " + i + ": " + type + " in the lead => " + sortedArr[i] + " appeared " + referral[sortedArr[i]] + " times.")
    }
    return type
}

// One more

function migratoryBirds(arr) {
    let referral = {}, type = 0
    for (let i = 0; i < arr.length; i++) {
        !referral[arr[i]] ? referral[arr[i]] = 1 : referral[arr[i]] += 1
        
        if (referral[arr[i]] > type) type = referral[arr[i]]
        console.log("Index " + i + ": " + type + " in the lead => " + arr[i] + " appeared " + referral[arr[i]] + " times.")
    }
    console.log(referral)
    console.log(type)
    let array = Array.from(Object.keys(referral).filter(key => referral[key] === type))
    return Math.min(...array)
} // Kinda proud since I was forced to use Object.keys and Object.values (though the latter failed to prevail)

// Kinda similar but cleaner and shorter: https://code.maxinterview.com/code/migratory-bird-problem-in-javascript-88F56140A5512C2/