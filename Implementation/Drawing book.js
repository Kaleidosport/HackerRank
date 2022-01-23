function pageCount(n, p) {
    let fromFront = ~~(p / 2)
    let fromBack = ~~(n / 2 - fromFront)
    return fromFront < fromBack ? fromFront : fromBack
    // Or fromBack ^ ((fromFront ^ fromBack) & -(fromFront < fromBack))
    // Or Math.min(fromFront, fromBack)
}