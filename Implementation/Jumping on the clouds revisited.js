function jumpingOnClouds(c, k) {
    let energy = 100, jumps = 0, l = c.length, i
    while (i !== 0 && energy > -1) {
        jumps === 0 && (i = 0)
        i = (i + k) % l
        energy -= c[i] === 0 ? 1 : 3
        jumps++
        console.log(i)
        console.log(jumps)
    }
    return energy
}