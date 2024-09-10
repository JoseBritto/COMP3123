async function callAnotherAsync() {
    try {
        let result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await result.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }

}
callAnotherAsync();