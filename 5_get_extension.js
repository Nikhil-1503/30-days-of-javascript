function getExtension(file){
    return file.substr(file.lastIndexOf('.') + 1);
}

console.log(getExtension('index.html'));
console.log(getExtension('style.css'));
console.log(getExtension('app.js'));
console.log(getExtension('item.txt'));