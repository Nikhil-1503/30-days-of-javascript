function fiftyFifty(num1, num2){
    if((num1 == 50) || (num2 == 50) || (num1+num2)==50)
        return true;
    return false;
}

console.log(fiftyFifty(1, 50));
console.log(fiftyFifty(50, 20));
console.log(fiftyFifty(25, 70));
console.log(fiftyFifty(20, 30));