function isOdd(n) {
    return n%2 == 0;
}
function filterOutOdd(arr) {
    return arr.filter(isOdd);
}

console.log(filterOutOdd([2, 3, 9, 1, 18]));
console.log(filterOutOdd([2, 4, 6, 8, 10]));
console.log(filterOutOdd([1, 3, 5, 7, 9]));