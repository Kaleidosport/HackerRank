function formingMagicSquare(s) {
    let min = 72
    let magical = [
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]]
    ]
    
    for (let i = 0; i < 8; i++) {
        let cost = Math.abs(magical[i][0][0] - s[0][0]) + Math.abs(magical[i][0][1] - s[0][1]) + Math.abs(magical[i][0][2] - s[0][2]) 
        + Math.abs(magical[i][1][0] - s[1][0]) + Math.abs(magical[i][1][1] - s[1][1]) + Math.abs(magical[i][1][2] - s[1][2]) 
        + Math.abs(magical[i][2][0] - s[2][0]) + Math.abs(magical[i][2][1] - s[2][1]) + Math.abs(magical[i][2][2] - s[2][2])
        console.log(Math.abs(magical[i][0][0] - s[0][0]))
        
        if (cost < min) min = cost
        console.log(`At ${i}, min = ${min} & cost = ${cost}.`)
    }
    return min
} // Tough one, had to "cheat" a little by finding the combinations to insert in magical... :^(