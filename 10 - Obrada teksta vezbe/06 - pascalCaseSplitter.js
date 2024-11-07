function solve(text) {
    let result = "";
    result += text[0];  // Dodamo prvi karakter
    for (let i = 1; i < text.length; i++) {
        let code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            result += ", ";
        }
        result += text[i];
    }
    console.log(result);
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');