function solve(n, inputArr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(inputArr[i]);
    }
    let reverseArr = newArr.reverse();
    let result = reverseArr.join(" ");
    console.log(result);
}

solve(3, [10, 20, 30, 40, 50]);   // 30 20 10

function solve2(n, inputArr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr[i] = inputArr[i];
    }

    let output = "";
    for (let i = n - 1; i >= 0; i--) {
        output += `${newArr[i]} `;
    }
    console.log(output);
}