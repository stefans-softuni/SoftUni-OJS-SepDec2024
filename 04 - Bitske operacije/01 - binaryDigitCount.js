function solve(n, b) {
    let count = 0;
    while (n > 0) {
        let bit = n % 2;
        if (bit == b) {
            count++;
        }
        n = Math.floor(n / 2);
    }
    console.log(count);
}

solve(20, 0);   // 3
solve(15, 1);   // 4