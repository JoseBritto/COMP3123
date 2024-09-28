const express = require('express')
const app = express()
const SERVER_PORT = 3000;


app.get('/hello', function (req, res) {
  res.send('Hello Express JS');
});


app.get('/user', (req, res) => {
    
    let fnm = req.query.firstname;
    let lnm = req.query.lastname;
    
    if(!fnm) {
        fnm = 'Pritesh';
    }
    if(!lnm) {
        lnm = 'Patel';
    }

    const user = {
        firstname: fnm,
        lastname: lnm
    };

    res.json(user);
});


app.post('/user/:firstname/:lastname', (req, res) => {
    const user = {
        firstname: req.params.firstname,
        lastname: req.params.lastname
    };
    res.json(user);
});


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on http://localhost:${SERVER_PORT}`);
});