function capital(word){
    var capitalWord = word.split(" ");
    for(let i=0; i<capitalWord.length; i++)
        capitalWord[i] = capitalWord[i][0].toUpperCase() + capitalWord[i].substr(1);
    
    return capitalWord.join(" ");
}

word = 'the quick brown fox';
console.log(capital(word));