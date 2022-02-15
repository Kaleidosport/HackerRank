function fairRations(B) {
    let sharedLoaves = 0, total = B.reduce((p, c) => p + c, 0), oddInB = B.filter(x => x % 2).length

    if (total % 2 === 0 && oddInB % 2 === 0) {
        for (let i = 0; i < B.length; i++) {
            if (B[i] % 2 !== 0) {
                B[i] += 1
                B[i + 1] += 1
                sharedLoaves += 2
            }
        }
    } else {
        return `NO`
    }
    return sharedLoaves
} // Worked as a charm. Something noteworthy tho...

function fairRations(B) {
    let sharedLoaves = 0, total = B.reduce((p, c) => p + c, 0), oddInB = B.filter(x => x % 2).length

    if (oddInB % 2 === 0) {
        for (let i = 0; i < B.length; i++) {
            if (B[i] % 2 !== 0) {
                B[i] += 1
                B[i + 1] += 1
                sharedLoaves += 2
            }
        }
    } else {
        return `NO`
    }
    return sharedLoaves
} // Worked as well, but much slower.

function fairRations(B) {
    let sharedLoaves = 0, total = B.reduce((p, c) => p + c, 0), oddInB = B.filter(x => x % 2).length

    if (total % 2 === 0) {
        for (let i = 0; i < B.length; i++) {
            if (B[i] % 2 !== 0) {
                B[i] += 1
                B[i + 1] += 1
                sharedLoaves += 2
            }
        }
    } else {
        return `NO`
    }
    return sharedLoaves
} // Works as well and seems like the fastest one by a considerable margin. So, go with reduce().