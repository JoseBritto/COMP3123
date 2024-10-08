const express = require('express');
const empRouter = require('./emp');
const userRouter = require('./users');
const errorHandlerMiddleware = require('./errorHandlerMiddleware');
const app = express();
const SERVER_PORT= process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const loggerMiddleware  =(req, res, next) => {
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`);
    next();
}

const myMiddleware =(req, res, next) => {
    res.send("Hello");
}

//Apply the middeware
//app.use(loggerMiddleware);
app.use('/user', loggerMiddleware);

//app.use('/user', myMiddleware);// -- This will cause all requests to /user/anything to reply with 'Hello'

app.use('/user' , userRouter);
app.use('/emp',empRouter);

app.get('/error', (req, res) => {
    throw new Error('This is a forced Error');
    res.send('Welcome!!');
});

app.use(errorHandlerMiddleware); // Error middleware should be added after all endpoints. Wouldn't work otherwise


// This error wouldn't be handled by the middleware.
app.get('/error2', (req, res) => {
    throw new Error('This is a forced Error');
    res.send('Welcome!!');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
});

