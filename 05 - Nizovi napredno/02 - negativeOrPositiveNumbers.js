function solve(arr) {
    let result = [];
    for (let elem of arr) {
        let num = Number(elem);
        if (num >= 0) {
            result.push(num);
        } else {
            result.unshift(num);
        }
    }
    console.log(result.join("\n"));
}

solve(['7', '-2', '8', '9']);