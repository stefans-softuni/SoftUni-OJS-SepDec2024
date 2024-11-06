function solve(text, word) {
    let newWord = "*".repeat(word.length);
    while (text.includes(word)) {
        text = text.replace(word, newWord);
    }
    
    console.log(text);
}

solve('A small sentence with some words', 'small');