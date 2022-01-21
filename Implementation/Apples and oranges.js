function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesHarvest = 0, orangesHarvest = 0
    for (let apple of apples) {
        if (apple + a >= s && apple + a <= t) applesHarvest++
    }
    for (let orange of oranges) {
        if (orange + b >= s && orange + b <= t) orangesHarvest++
    }
    console.log(applesHarvest)
    console.log(orangesHarvest)
}