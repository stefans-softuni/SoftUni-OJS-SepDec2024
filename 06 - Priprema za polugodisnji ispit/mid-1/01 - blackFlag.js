function solve(arr) {
    let days = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);

    let total = 0;
    for (let i = 1; i <= days; i++) {
        total += dailyPlunder;
        if (i % 3 == 0) {
            total += dailyPlunder / 2;
        }
        if (i % 5 == 0) {
            total *= 0.7;
        }
    }

    if (total >= expectedPlunder) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        let percentage = total * 100 / expectedPlunder;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

solve(["5", "40", "100"]);    
solve(["10", "20", "380"]);    