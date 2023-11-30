function fetchData(url){
    return fetch(url)
    .then(e=>{
        if(!e.ok)
            console.log('Cannot get data from ',url);
        return e.json();
    });
}

function getData(){
    const url1 = 'https://official-joke-api.appspot.com/random_joke';
    const url2 = 'https://catfact.ninja/fact';

    return fetchData(url1)
    .then(output1=>{
        return fetchData(url2)
        .then(output2=>{
            return {output1, output2};
        });
    });
}

getData()
.then(result=>{
    console.log('Combined output - ',result);
})
.catch(e=>{console.log('Error:',e)});