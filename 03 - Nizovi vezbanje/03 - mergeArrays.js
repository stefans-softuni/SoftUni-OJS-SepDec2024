function solve(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 == 0) {
            let num1 = Number(arr1[i]);
            let num2 = Number(arr2[i]);
            newArr.push(num1 + num2);
        } else {
            newArr.push(arr1[i] + arr2[i]);
        }
    }
    console.log(newArr.join(" - "));
}

solve(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);