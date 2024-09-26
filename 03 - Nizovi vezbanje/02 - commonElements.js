function solve(arr1, arr2) {
    for (let val1 of arr1) {
        for (let val2 of arr2) {
            if (val1 === val2) {
                console.log(val1);
                break;
            }
        }
    }
}

solve(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);

function solve2(arr1, arr2) {
    for (let val1 of arr1) {
        if (arr2.includes(val1)) {
            console.log(val1);
        }
    }
}