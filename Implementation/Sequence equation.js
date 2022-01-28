function permutationEquation(p) {
    let arrayOfP = []
    for (let i = 1; i < p.length + 1; i++) {
        arrayOfP.push(p.indexOf(p.indexOf(i) + 1) + 1)
        console.log(p.indexOf(i) + 1)
    }
    return arrayOfP
}