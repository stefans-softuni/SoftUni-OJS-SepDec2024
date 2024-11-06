function solve(str, word) {
    let allWords = str.split(" ");
    let count = 0;
    for (let singleWord of allWords) {
        if (singleWord == word) {
            count++;
        }
    }
    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');