function solve(text) {
    let allWords = text.split(" ");
    for (let word of allWords) {
        if (word.startsWith("#") && word.length >= 2) {
            let printFlag = true;
            for (let i = 1; i < word.length; i++) {
                let code = word.charCodeAt(i);
                if (!(code >= 65 && code <= 90 || code >= 97 && code <= 122)) {
                    printFlag = false;
                    break;
                }
            }
            if (printFlag) {
                console.log(word.substring(1));
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');