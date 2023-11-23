function doubleValues(arr){
    const res = [];
    arr.map((it) => res.push(it*2));
    return res;
}
 
console.log(doubleValues([1,2,3,4,5]));
console.log(doubleValues([0,-2,13,0.5,100]));