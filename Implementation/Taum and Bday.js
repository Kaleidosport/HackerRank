function taumBday(b, w, bc, wc, z) {
    if (z + wc < bc) return w * wc + (wc + z) * b
    else if (z + bc < wc) return b * bc + (bc + z) * w
    else return b * bc + w * wc
} // 2/15 test cases failed...

function taumBday(b, w, bc, wc, z) {
    let blackBargain = b * Math.min(bc, wc + z)
    let whiteBargain = w * Math.min(wc, bc + z)
    return blackBargain + whiteBargain
} // Same issue...

function taumBday(b, w, bc, wc, z) {
    if (BigInt(z) + BigInt(wc) < BigInt(bc)) return BigInt(w) * BigInt(wc) + (BigInt(wc) + BigInt(z)) * BigInt(b)
    else if (BigInt(z) + BigInt(bc) < BigInt(wc)) return BigInt(b) * BigInt(bc) + (BigInt(bc) + BigInt(z)) * BigInt(w)
    else return BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc)
} // Had to go with this BigInt() thing to pass both failing test cases.

function taumBday(b, w, bc, wc, z) {
    let blackBargain = BigInt(b) * BigInt(Math.min(bc, wc + z))
    let whiteBargain = BigInt(w) * BigInt(Math.min(wc, bc + z))
    return blackBargain + whiteBargain
}