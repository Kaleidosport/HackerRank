function queensAttack(n, k, r_q, c_q, obstacles) {
    let position = [r_q, c_q], moves = 0
    console.log(position, k, obstacles)

    if (n === 1) return 0

    if (k === 0) {
        moves += 2 * (n - 1) // (n - 1) horizontal moves + (n - 1) vertical moves
        for (let i = 1; position[0] <= n || position[1] <= n; i++) {
            position[0] += 1
            position[1] += 1
            console.log(position) // Moves to the upper-right part of the board.
            moves++
        }
        for (let j = 1; position[0] <= n || position[1] >= 1; j++) {
            position[0] -= 1
            position[1] += 1
            console.log(position) // Moves to the upper-left part of the board.
            moves++
        }
        for (let l = 1; position[0] >= 1 || position[1] <= n; l++) {
            position[0] += 1
            position[1] -= 1
            console.log(position) // Moves to the lower-right part of the board.
            moves++
        }
        for (let m = 1; position[0] >= 1 || position[1] >= 1; m++) {
            position[0] -= 1
            position[1] -= 1
            console.log(position) // Moves to the lower-left part of the board.
            moves++
        }
    }
    return moves
}