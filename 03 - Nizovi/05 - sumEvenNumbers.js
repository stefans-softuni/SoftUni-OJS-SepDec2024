function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let sum = 0;
    for (let elem of arr) {
        if (elem % 2 == 0) {
            sum += elem;
        }
    }
    console.log(sum);
}

solve(['1', '2', '3', '4', '5', '6']);




/*
    for (let elem of arr) {   
        // U svakoj iteraciji se uvodi promenljiva `elem` i dobija vrednost tekuceg elementa niza
        elem = Number(elem);
        arr[i] = elem;
    }
*/