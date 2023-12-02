function* generatorFun(start, end){
    for(let i=start;i<=end;i++)
        yield i;
}

const fun = generatorFun(1,10);
for(let i of fun)
    console.log(i);  