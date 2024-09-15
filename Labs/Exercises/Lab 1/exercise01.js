function captitalize_each_word(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.substring(1);
    }
    return words.join(' ');
}

const sentence = "the quick brown fox";
console.log(" -- Exercise 01 -- ")
console.log(`Input: ${sentence}`);
console.log(`Output: ${captitalize_each_word(sentence)}`);
console.log();