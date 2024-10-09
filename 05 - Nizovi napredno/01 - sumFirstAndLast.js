function solve(arr) {
    let lastElem = Number(arr.pop());   // arr = [], lastElem = 50
    let firstElem;
    if (arr.length > 0) {
        firstElem = Number(arr.shift());
    } else {
        firstElem = lastElem;
    }
    console.log(firstElem + lastElem);
}

solve(['50']);
solve(['5', '10']);
solve(['20', '30', '40']);

function solve2(arr) {
    let firstElem = Number(arr[0]);
    let lastElem = Number(arr[arr.length - 1]);
    console.log(firstElem + lastElem);
}