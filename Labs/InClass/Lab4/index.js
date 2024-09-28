const express = require('express')
const app = express()
const SERVER_PORT = 3000;


app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.statusCode(200);
    res.send('<h1> About Us 2</h1>');
});

app.post('/hello', (req, res) => {
    res.status(201)
    .send('Hello');
});

app.put('/hello', (req, res) => {
    res.status(203);
    res.send('Put Hello');
});

app.get('/student/', (req, res) => {
    res.status(200);
    const stud = {
        name: "John Doe",
        age: 25
    };
    res.json(stud);
})

// Query String Parameters
//http://localhost:3000/employee?fnm=pritesh&lnm=patel
app.get('/employee', (req, res) => {
    console.log(req.query)
    // res.send(req.query);
    const fnm = req.query.fnm;
    const lnm = req.query.lnm;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}`);
});


// Path Parameters
//http://localhost:3000/employee/pritesh/patel/toronto
app.get('/employee/:fnm/:lnm/:city', (req, res) => {
    console.log(req.params)
    const fnm = req.params.fnm;
    const lnm = req.params.lnm;
    const city = req.params.city;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}, City: ${city}`);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on http://localhost:${SERVER_PORT}`);
})