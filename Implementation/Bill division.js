function bonAppetit(bill, k, b) {
    bill.splice(k, 1)
    let refund = bill.reduce((x, y) => x + y)/2 === b ? `Bon Appetit` : b - bill.reduce((x, y) => x + y)/2
    console.log(refund)
}