function solve(arr) {
    let sumOrg = 0, sumMod = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOrg += arr[i];
        if (arr[i] % 2 == 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        sumMod += arr[i];
    }
    console.log("[ " + arr.join(", ") + " ]");
    console.log(sumOrg);
    console.log(sumMod);
}

solve([5, 15, 23, 56, 35]);