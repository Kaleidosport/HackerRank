function utopianTree(n) {
    let height = 1
    if (n === 0) return 1
    else {
        for (let i = 1; i <= n; i++) {
        height = i % 2 === 1 ? height * 2 : height + 1
        console.log(`At ${i}, height = ${height}.`)
        }
        return height
    }
}