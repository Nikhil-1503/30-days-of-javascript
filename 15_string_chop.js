function string_chop(str, n=0){
    let arr = [];
    if(n==0){
        arr.push(str);
        return arr;
    }
    for(let i=0; i<str.length; i+=n)
        arr.push(str.slice(i,i+n));

    return arr;
}

console.log(string_chop('Scaler'));
console.log(string_chop('Scaler',2));
console.log(string_chop('Scaler',3));
console.log(string_chop('Scalers',2));
