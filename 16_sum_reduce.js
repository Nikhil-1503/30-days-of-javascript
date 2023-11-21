function sumArray(arr) {
    const initial = 0;
    return arr.reduce((acc, curr) => acc+curr, initial);
}

console.log(sumArray([1,2,3,4,5]));
console.log(sumArray([-1,2,0,40,5]));