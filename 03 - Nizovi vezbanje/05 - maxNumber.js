function solve(arr) {
    let tops = [];
    for (let i = 0; i < arr.length; i++) {
        // Da li je arr[i] top element ili nije?
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            // Ako je a[i] top element, onda je a[i] > a[j], za svako j = i + 1, i + 2, ......
            // Ako a[i] NIJE top element, onda je a[i] <= a[j], za neko j = i + 1, i + 2, .....
            if (arr[j] >= arr[i]) {
                // arr[i] NIJE top element
                isTop = false;
                break;
            }
        }
        if (isTop) {
            tops.push(arr[i]);
        }
    }
    console.log(tops.join(" "));
}

solve([14, 24, 3, 19, 15, 17]);
solve([27, 19, 42, 2, 13, 45, 48]);
solve([41, 41, 34, 20]);