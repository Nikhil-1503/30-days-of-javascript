function getDuplicate(str){
    var freq = {};
    for(let i=0; i<str.length; i++)
        freq[str[i]] = (freq[str[i]] || 0) + 1;
    
    for(let i=0; i<str.length; i++)
        if(freq[str[i]] == 1)
            return str[i];
    
    return 'No repeated value';
}

console.log(getDuplicate('abacddbec'));
console.log(getDuplicate('javascript'));
console.log(getDuplicate('abacddbc'));