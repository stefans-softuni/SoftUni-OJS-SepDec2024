function solve(str, char, result) {
    let replaced = str.replace('_', char);
    if (replaced === result) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}