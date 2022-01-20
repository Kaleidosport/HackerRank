function timeConversion(s) {
    let adapt = String(parseInt(s.slice(0, 2)) + 12)
    let bousin = ""
    if (s.slice(-2) === "AM") {
        if(s.slice(0, 2) === "12") bousin = s.slice(0, -2).replace("12", "00") 
        else bousin = s.slice(0, -2)
    }
    if (s.slice(-2) === "PM") {
        if (s.slice(0, 2) === "12") bousin = s.slice(0, -2)
        else bousin = adapt + s.slice(2, -2)
    }  
    return bousin
}