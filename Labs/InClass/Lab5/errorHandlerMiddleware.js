
const errorHandlerMiddleware = (err, req, res, next) => {
    //console.error(err.stack);
    res.status(500).send({
        status: 500,
        message: 'Something Broke!',
        err: err.message
    });
}

module.exports = errorHandlerMiddleware;