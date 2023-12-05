function throttle(fun, delay){
    let prevTime = 0;

    return (...args)=>{
        let currTime = new Date().getTime();
        if(currTime-prevTime> delay){
            prevTime = currTime;
            return fun(...args);
        }
        else{
            console.log("Function not called");
        }
    }
}

const throttleFunction = throttle(() =>{
    console.log("Function called");
}, 1000);

throttleFunction();
throttleFunction();
