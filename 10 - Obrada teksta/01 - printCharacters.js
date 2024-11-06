function solve(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);  // Iako stringovi nisu nizovi, moze se pristupati pojedinacnim karakterima preko indeksa
        // console.log(str.at(i));
        // console.log(str.charAt(i));
    }
}

function solve2(str) {
    for (let ch of str) {
        console.log(ch);   // Iako stringovi nisu nizovi, moze se koristiti for-of petlja za iteraciju po karakterima
    }
}

solve('AWord');
solve2('AWord');