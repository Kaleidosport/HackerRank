function chocolateFeast(n, c, m) {
    let bars = 0, wrappers = 0, razzia = 0
    bars = n % c === 0 ? n / c : parseInt(n / c)
    
    while (bars > 0) {
        razzia += bars
        wrappers += bars
        bars = 0
        
        if (wrappers >= m) {
            bars += wrappers % m === 0 ? wrappers / m : parseInt(wrappers / m)
            wrappers = wrappers % m
        }
    }

    return razzia
}
