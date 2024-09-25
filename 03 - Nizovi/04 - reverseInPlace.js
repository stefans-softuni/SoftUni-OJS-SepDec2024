// Funkcija za zadatak broj 4
function solve(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        // zameni mesta elementima sa indeksima `i` i `arr.length - 1 - i`
        swapElements(arr, i, arr.length - 1 - i);
    }
    console.log(arr.join(" "));

    // Funkcija menja mesta elementima sa indeksima `i` i `j` u nizu `arr`
    function swapElements(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

// Test primeri
solve(['a', 'b', 'c', 'd', 'e']);
solve(['33', '123', '0', 'dd']);