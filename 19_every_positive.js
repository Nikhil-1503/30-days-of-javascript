function isPositive(n) {
    return n > 0;
}
function allPositive(arr) {
    return arr.every(isPositive);
}

console.log(allPositive([2, 3, 9, 1, 18]));
console.log(allPositive([-1, 3, 5, 7, 9]));