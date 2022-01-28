function circularArrayRotation(a, k, queries) {
    let circular = []
    for (let i = 0; i < k; i++) {
        a = [...a.slice(-1), ...a]
        a.pop()
    }
    
    for (let query of queries) {
        circular.push(a[query])
    }
    return circular
} // Worked but timed-out...

function circularArrayRotation(a, k, queries) {
    let circular = []
    for (let i = 0; i < k; i++) {
        a.unshift(a.slice(-1))
        a.pop()
    }
    
    for (let query of queries) {
        circular.push(a[query])
    }
    return circular
}