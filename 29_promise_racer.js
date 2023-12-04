function raceWithTimeout(arr, timeout){
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Timeout"));
        }, timeout)
    });
    return Promise.race([...arr, timeoutPromise]); 
}

const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve("Promise 1 resolved"), 2000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve("Promise 2 resolved"), 500));

raceWithTimeout([promise1, promise2], 1500)
.then(result => console.log(result))
.catch(e=>console.error(e));