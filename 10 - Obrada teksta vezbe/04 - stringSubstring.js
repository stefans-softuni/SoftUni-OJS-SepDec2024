// toUpperCase() i toLowerCase() metode

function solve(word, text) {
    let wordLowerCase = word.toLowerCase();
    let textLowerCase = text.toLowerCase();

    let wordExists = false;
    let allWords = textLowerCase.split(" ");
    for (let word of allWords) {
        if (word == wordLowerCase) {
            wordExists = true;
            break;
        }
    }

    if (wordExists) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

solve('javascript',
'JavaScript is the best programming language');

solve('python',
'JavaScript is the best programming language');