function add(a, b) {
    return a+ b;
}

function multiply(a, b){
    return a *b;
}

const divide = (a, b) => multiply(a, 1/b);

const subtract = (a, b) => add(a, -b);


module.exports = {
    add,
    multiply,
    divide,
    subtract,
}