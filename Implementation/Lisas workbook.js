function workbook(n, k, arr) {
    let specialProblems = 0, pages = 0

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < arr[i] + 1; j++) {
           if (k === 1 || j % k === 1) pages++
           if (j === pages) specialProblems++ 
           console.log(arr[i], j, pages, specialProblems)
        }
    }
    return specialProblems
}