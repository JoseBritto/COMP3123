var sub = function (a, b) {
    return a- b;
}

var add = function (a, b) {
    return a + b;
}

// Callback function
var makecall = function (a, b, add_function, sub_function) {
    if (a > b)
        return sub_function(a, b);
    else
        return add_function(a, b);
    
}

var r = makecall(5, 3, add, sub);
console.log(r);

var print = function () {
    console.log("Hello-1");
}

setInterval(print, 1000);

setInterval(() => {
    console.log("Hello-2");
}, 2000);