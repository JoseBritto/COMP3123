const os = require('os');
const http = require('http');
const fs = require('fs');
const path = require('path');

// console.log(os.cpus());
// console.log(os.homedir());

http.createServer((req, res) => {
    console.log(req.method + " " + req.url);
    if(req.url.includes("/echo/"))
    {
        res.write(req.url.substring(req.url.lastIndexOf('/') + 1) + '\n');
        res.end();
        return;
    }
    if(req.url == "/about"){
        console.log("ABOUT");
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Student Page</h1>');
        const stud = {
            name: 'John Doe',
            age: 12
        };
        res.write(JSON.stringify(stud));
        res.end();
        return;
    }
    res.write('Hello World\n');
    res.end();

    

}).listen(3000, () => {
    console.log('Server is running on port 3000');
});