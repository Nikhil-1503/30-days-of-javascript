function rangeInclusive(a, b){
    if((a>=50 && a<=99) || (b>=50 && b<=99))
        return true;
    else 
        return false;
}

console.log(rangeInclusive(50, 1));
console.log(rangeInclusive(55, 65));
console.log(rangeInclusive(40, 99));
console.log(rangeInclusive(10, 9));
