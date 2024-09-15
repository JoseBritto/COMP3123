var array = [1, 2, 3, 4];

var calculateSum = array.reduce((a, c) => a += c, 0);
var calculateProduct = array.reduce((a, c) => a *= c, 1);

console.log(calculateSum);
console.log(calculateProduct);