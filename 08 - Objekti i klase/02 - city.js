function solve(obj) {
    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

function solve2(obj) {
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

solve2({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);