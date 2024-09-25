function solve(arr) {
    while (arr.length > 1) {
        let cond = [];
        // (0, 1), (1, 2), (2, 3), .... (n - 2, n - 1)
        for (let i = 0; i < arr.length - 1; i++) {
            cond.push(arr[i] + arr[i + 1]);
        }
        arr = cond;
    }
    console.log(arr[0]);
}

let arr = [2, 10, 3];
solve(arr);

arr = [5, 0, 4, 1, 2];
solve(arr);

arr = [1];
solve(arr);