function solve(arr, k) {
    let n = arr.length;
    k = k % n;

    for (let i = 1; i <= k; i++) {
        // rotation(arr);
        rotation2(arr);
    }
    console.log(arr.join(" "));

    function rotation(arr) {
        // rucni prolazak kroz elemente niza
        let temp = arr[0];
        for (let i = 1; i < arr.length; i++) {
            arr[i - 1] = arr[i];
        }
        arr[arr.length - 1] = temp;
    }

    function rotation2(arr) {
        arr.push(arr[0]);
        arr.shift();
    }
}

solve([2, 4, 15, 31], 5);

//  [2, 4, 15, 31, 2]