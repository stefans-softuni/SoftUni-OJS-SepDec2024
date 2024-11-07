function solve(words, text) {
    let allWords = words.split(", ");
    for (let word of allWords) {
        let n = word.length;
        let template = "*".repeat(n);
        text = text.replace(template, word);
    }
    console.log(text);
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');