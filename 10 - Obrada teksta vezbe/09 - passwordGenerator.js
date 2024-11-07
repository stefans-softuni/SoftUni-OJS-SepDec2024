function solve(input) {
    let text = input[0] + input[1];
    let keyword = input[2].toUpperCase();
    let k = 0;
    let result = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') {
            result += keyword[k];
            k++;
            if (k >= keyword.length) {
                k = 0;
            }
        } else {
            result += text[i];
        }
    }

    let password = result.split("").reverse().join("");
    console.log(`Your generated password is ${password}`);
}

solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
);