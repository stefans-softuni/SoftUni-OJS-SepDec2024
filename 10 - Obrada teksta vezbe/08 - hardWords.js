function solve(input) {
    let text = input[0];
    let allWords = input[1];

    // Moramo da sortiramo niz allWords opadajuce po duzini reci (od najduzih do najkracih)
    allWords.sort((a, b) => { return b.length - a.length; });

    for (let word of allWords) {
        let n = word.length;
        let template = "_".repeat(n);
        text = text.replace(template, word);
    }
    console.log(text);
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
    );