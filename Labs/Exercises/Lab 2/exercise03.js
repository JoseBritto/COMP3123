const colors = ['red', 'green', 'blue'];

const capitalize = (input) => {
    const [char0, ...allOthers] = input;
    return "" + char0.toUpperCase() + allOthers.join("").toLowerCase();
}

const capitalizedColors = colors.map(x => capitalize(x));

console.log(capitalizedColors);