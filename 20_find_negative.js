function isNegative(n) {
    return n < 0;
}
function findFirstNegative(arr) {
    return arr.find(isNegative);
}

console.log(findFirstNegative([2, -3, 9, 1, 18]));
console.log(findFirstNegative([1, 3, -5, -7, 9]));
console.log(findFirstNegative([1, 3, 5, 7, 9]));