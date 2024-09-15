const capitalize = (input) => {
    const [char0, ...allOthers] = input;
    return "" + char0.toUpperCase() + allOthers.join("").toLowerCase();
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));
