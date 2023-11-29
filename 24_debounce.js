function debounce(fun, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fun.apply(this,args);
        },delay);
    }
}

function caller(){
    console.log('Debounced');
}

const bounce = debounce(caller, 1000);
bounce('Bounced');