function viralAdvertising(n) {
    let spread = 5, liked = 0, reach = 0
    for (let i = 0; i < n; i++) {
        liked = Math.floor(spread / 2)
        spread = liked * 3
        reach += liked
    }    
    return reach
}