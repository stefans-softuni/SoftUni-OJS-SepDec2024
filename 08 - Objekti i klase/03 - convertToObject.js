function solve(text) {
    let obj = JSON.parse(text);
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');