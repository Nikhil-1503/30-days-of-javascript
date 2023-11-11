function reverseNum(num){
    var rev=0;
    while(num>0){
        rev=rev*10+num%10;
        num=Math.floor(num/10);
    }
    return rev;
}

num=32243
console.log(reverseNum(num));