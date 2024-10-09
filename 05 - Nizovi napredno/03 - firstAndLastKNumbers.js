function solve(arr) {
    let k = arr.shift();
    let n = arr.length;
    let firstKElem = arr.slice(0, k);  // Prvih k elemenata ima indekse 0, 1, 2, ..., k - 1
    // let lastKElem = arr.slice(n - k, n);    // Poslednjih k elemenata ima indekse n - k, ..., n - 2, n - 1
    let lastKElem = arr.slice(-k);

    console.log(firstKElem.join(" "));
    console.log(lastKElem.join(" "));
}

solve([3, 6, 7, 8, 9]);