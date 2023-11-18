function memoize(func) {
    const cache = {};
    
    return function(...args) {
      const key = JSON.stringify(args);
      if (!cache[key])
        cache[key] = func(...args);
      
      return cache[key];
    };
  }

function factorial(num){
    return (num === 0)?1:(num* factorial(num - 1));
}

const factMemoized = memoize(factorial);

console.log(factMemoized(4));
console.log(factMemoized(6));
console.log(factMemoized(9));