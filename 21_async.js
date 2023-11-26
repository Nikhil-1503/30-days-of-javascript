async function asyncFunc(arr, fn){
    for(i in arr)
        await fn(arr[i]);
}

async function awaitFunc(n){
    return new Promise(resolve =>{
        setTimeout(
          () => {
            console.log(n);
            resolve();
          }, 1000);
        });
}

const arr = [1,2,3,4,5];
asyncFunc(arr, awaitFunc);