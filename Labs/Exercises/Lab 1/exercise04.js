function angle_Type(angle) {
    if (angle < 90)
        return "Acute angle";
    if (angle > 90 && angle < 180)
        return "Obtuse angle";
    if (angle === 90)
        return "Right angle";
    if (angle === 180)
        return "Straight angle";
}

console.log(" -- Exercise 04 --");
console.log("Output 1: " + angle_Type(47));
console.log("Output 2: " + angle_Type(90));
console.log("Output 3: " + angle_Type(145));
console.log("Output 4: " + angle_Type(180));
console.log();