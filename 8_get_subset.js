function getSubset(arr, len){
    var res = [];
    
    function subset(sub,j){
        if(sub.length == len){
            res.push([...sub]);
            return;
        }

        for(let i=j; i<arr.length; i++){
            sub.push(arr[i]);
            subset(sub, i+1);
            sub.pop();
        }
    }

    subset([], 0);
    return res;
}

console.log(getSubset([1, 2, 3], 2));