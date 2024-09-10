console.log('Hello, World!');
var obj = {
    name: 'John',
    age: 30
}

console.log(obj);

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
    result: ''
};

console.log(student.name);
console.log(typeof(student.name));
console.log(student.age);
console.log(typeof(student.age));
console.log(typeof(student.isAdmin));
console.log(typeof(student.courses));

console.log(typeof(student.wife));
console.log(typeof(student.result));
console.log(typeof(student));


function sayHello() {
    console.log('Hello, World!');
}

sayHello();

console.log(typeof(sayHello));

var sayHello = function () {
    console.log('Hello, World!');
}

//Arrow Function
var greet = () => {
    console.log('Hello, World!');
}   

const name = "Pritesh Patel"
console.log(name);
console.log(name.length);