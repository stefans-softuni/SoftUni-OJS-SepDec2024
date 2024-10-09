function solve(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let lastKElem = result.slice(-k);
        let sum = 0;
        for (let elem of lastKElem) {
            sum += elem;
        }
        result.push(sum);
    }
    console.log(result.join(" "));
}

solve(6, 3);
solve(8, 2);  // Fibonacijev niz