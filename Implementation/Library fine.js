function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 > y2) {
        return 10000
    } else {
        if (m1 > m2) {
            return 500 * (m1 - m2)
        } else {
            if (d1 > d2) {
                return 15 * (d1 - d2)
            } else {
                return 0
            }
        }
    }
} // 3 test cases failed.

function libraryFine(d1, m1, y1, d2, m2, y2) {
    return y1 > y2 ? 10000 : y1 === y2 && m1 > m2 ? 500 * (m1 - m2) : y1 === y2 && m1 === m2 && d1 > d2 ? 15 * (d1 - d2) : 0
} // Nice.

