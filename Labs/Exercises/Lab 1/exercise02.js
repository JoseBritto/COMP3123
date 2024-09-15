function max(num1, num2, num3) {
    if(num2 > num1){
        if(num3 > num2)
            return num3;
        else
            return num2;
    }
    if(num3 > num1){
        return num3;
    }
    return num1;
}

console.log(" -- Exercise 02 -- ");
console.log("Output 1: " + max (1,0,1));
console.log("Output 2: " + max (0,-10,-20));
console.log("Output 3: " + max (1000,510,440));
console.log();