function dayOfProgrammer(year) {
    if (year > 1918) {
        return year % 4 !== 0 ? `13.09.${year}` : `12.09.${year}`
    }
    if (year < 1918) {
        return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? `13.09.${year}` : `12.09.${year}`
    }
    else if (year === 1918) return `22.09.1918`
}

// 10 tests cases failed

function dayOfProgrammer(year) {
    if (year > 1918) {
        return year % 4 === 0 ? ((year % 100 === 0) ? (year % 400 === 0 ? `12.09.${year}` : `13.09.${year}`) : `12.09.${year}`) : `13.09.${year}`
    }
    if (year < 1918) {
        return year % 4 !== 0 ? `13.09.${year}` : `12.09.${year}`
    }
    else if (year === 1918) return `26.09.1918`
}

// Yatta! Btw, this guy blew it all out: https://alleyful.github.io/2019/07/20/algorithm/hackerrank/18_DayOfTheProgrammer/

function dayOfProgrammer(year) {
    if (year > 1918) {
        return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? `12.09.${year}` : `13.09.${year}`
    }
    if (year < 1918) {
        return year % 4 !== 0 ? `13.09.${year}` : `12.09.${year}`
    }
    else if (year === 1918) return `26.09.1918`
} // Working as well!