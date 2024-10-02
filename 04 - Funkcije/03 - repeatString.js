function solve(str, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}

let s1 = solve("abc", 3);
console.log(s1);

console.log(solve("String", 2));