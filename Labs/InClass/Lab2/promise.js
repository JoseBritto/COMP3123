function makePromise(a) {        
    let p1 = new Promise((resolve, reject) => {
        if( a== 10){
            var r = {
                status: true,
                message: 'Success'
            }
            resolve(r);
        } else {
            reject('Failure-1')
        }
    });
    return p1;
}

makePromise(10).then((result) => {
    console.log(result.message);
}, (error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
});

var api = fetch('https://jsonplaceholder.typicode.com/todos/1');
api.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('Error: ' + error);
})
