function closureOuter(){
    let count=0;
    function closureInner(){
        return count++;
    }
    return closureInner;
}

let count1 = closureOuter(0);

console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());