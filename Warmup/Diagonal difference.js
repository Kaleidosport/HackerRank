/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix

is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal =
. The right to left diagonal = . Their absolute difference is . 
*/

function diagonalDifference(arr) {    
    let diagonal1 = 0, diagonal2 = 0, n = arr.length
    for (let i = 0; i < n; i++) {     
        for (let j = 0; j < n; j++) {
            if (i === j) diagonal1 += arr[i][j]
            if (i + j === n - 1) diagonal2 += arr[i][j]     
        }  
    }
    return Math.abs(diagonal1 - diagonal2)
} 