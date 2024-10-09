function solve(arr) {
    let elemOddPositions = arr.filter((x, i) => i % 2 == 1);
    let doubleValues = elemOddPositions.map(x => x * 2);
    let result = doubleValues.reverse();
    console.log(result.join(" "));
}

solve([10, 15, 20, 25]);