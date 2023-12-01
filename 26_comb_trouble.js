function calculateTotal(arr){
    return arr.filter((n)=>n%2!==0).map((i)=>i*i).reduce((acc,curr)=>acc+curr,0);
}

console.log(calculateTotal([1,2,3,4,5,6]));
console.log(calculateTotal([1,3,5,7,9]));
console.log(calculateTotal([2,4,6,8,10]));