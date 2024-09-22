var http = require("http");
console.log("Lab 03 -  NodeJs");
const Employees  = require("./Employee.js");

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Welcome to Lab Exercise 03</h1>');
            res.end();
            return;
        }

        if (req.url === '/employee') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(Employees));
            res.end();
            return;
        }

        if (req.url === '/employee/names') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(Employees.map(x => `${x.firstName} ${x.lastName}`).sort()));
            res.end();
            return;
        }

        if (req.url === '/employee/totalsalary') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(
                { total_salary:  Employees.reduce((a, c) => a + c.Salary, 0) } 
            ));
            res.end();
            return;
        }
        res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})