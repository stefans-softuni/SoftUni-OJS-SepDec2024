function solve(text) {
    let idxHalf = text.length / 2;
    let firstHalf = text.substring(0, idxHalf);
    let secondHalf = text.substring(idxHalf);
    let firstWord = firstHalf.split("").reverse().join("");
    let secondWord = secondHalf.split("").reverse().join("");
    console.log(firstWord);
    console.log(secondWord);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');