console.log("Hello World!");
console.log(__dirname);
console.log(__filename);
console.log(console);

global.a = 100;

console.log(global);

console.log(a);

var module1 = require('./module1.js');

console.log(module1);
console.log(module);

console.log(module1.name);
console.log(module1.age);

var calc = require('./calc.js');

console.log(calc.divide(10, 2));
