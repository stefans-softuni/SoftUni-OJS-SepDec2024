function solve(arr) {
    let isFound = false;
    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0, sumRight = 0;

        // Prolazimo kroz elemente sa leve strane i dodajemo ih u sumLeft
        for (let j = 0; j < i; j++) {
            sumLeft += arr[j];
        }

        // Prolazimo kroz elemente sa desne strane i dodajemo ih u sumRight
        for (let j = i + 1; j < arr.length; j++) {
            sumRight += arr[j];
        }

        // Proveravamo ove dve sume
        if (sumLeft == sumRight) {
            isFound = true;
            console.log(i);
            break;
        }
    }
    if (!isFound) {
        console.log("no");
    }
}

solve([1, 2, 3]);  // no
solve([1, 2, 3, 3]);  // 2