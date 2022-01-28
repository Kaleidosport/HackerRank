function designerPdfViewer(h, word) {
    let balance = [], wl = word.length
    for (let i = 0; i < wl; i++) {
        let charCode = word.charCodeAt(i) - 97
        balance.push(h[charCode])
    }
    return Math.max(...balance) * wl
}