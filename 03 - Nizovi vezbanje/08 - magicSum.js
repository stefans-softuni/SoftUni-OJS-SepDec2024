function solve(arr, k) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if (sum == k) {
                console.log(arr[i] + " " + arr[j]);
            }
        }
    }
}

solve([1, 7, 6, 2, 19, 23],
    8
    );