function howManyGames(p, d, m, s) {
    let boughtGames = 0
    for (let i = 0; s >= 0; i++) {
        boughtGames += s - p > -1 ? 1 : 0
        s -= p
        p = p - d > m ? p - d : m
    }
    return boughtGames
} // Yay. \ô/