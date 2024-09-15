function right(input) {
    if(input.length <= 3)
        return input;
    return input.substring(input.length - 3) + input.substring(0, input.length - 3);
}

console.log(" -- Exercise 03 --")
console.log("Output 1: " + right("Python"));
console.log("Output 2: " + right("JavaScript"));
console.log("Output 3: " + right("Hi"));
console.log();