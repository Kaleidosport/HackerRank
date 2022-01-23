function catAndMouse(x, y, z) {
    console.log(z - x)
    console.log(z - y)
    return Math.abs(z - x) < Math.abs(z - y) ? `Cat A` : Math.abs(z - x) > Math.abs(z - y) ? `Cat B` : `Mouse C`  
}