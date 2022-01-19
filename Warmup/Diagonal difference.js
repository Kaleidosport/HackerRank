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
    // Write your code here
    return Math.abs((arr[0][0] + arr[1][1] + arr[2][2]) - (arr[0][2] + arr[1][1] + arr[2][0]))
}