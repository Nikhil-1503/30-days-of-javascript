function bubbleSort(arr){
    var i,j, n=arr.length;
    for(i=0; i<n-1; i++)
        for(j=0; j<n-i-1; j++)
            if(arr[j+1]>arr[j])
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];

    return arr;
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

console.log(bubbleSort([1,90,60,30,1]));