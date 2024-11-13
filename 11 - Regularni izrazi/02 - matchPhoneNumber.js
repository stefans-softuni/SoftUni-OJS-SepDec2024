function solve(input) {
    let text = input[0];
    let regexp = /\+359([\s\-])2\1\d{3}\1\d{4}\b/g;
    let allMatches = text.match(regexp);
    console.log(allMatches.join(", "));
}


solve(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);