function jumpingOnClouds(c) {
    let jumps = 0, distance = 0

    while (distance < c.length) {
        if (c[distance + 2] === 0) {
            jumps++
            distance += 2
        }
        else if (c[distance + 1] === 0) {
            jumps++
            distance++
        }
        else distance ++
    }
    return jumps
}