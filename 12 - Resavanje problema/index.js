function palindromeLen(letters, leftIndex, rightIndex) {
    while (leftIndex >= 0 && rightIndex < letters.length && letters[leftIndex] == letters[rightIndex]) { 
        leftIndex--;
        rightIndex++;
    }
    return rightIndex - leftIndex - 1;
}

function solve(letters) {
    let maxLen = 0;

    // 1) Prolazimo kroz sve karaktere i formiramo palindrome oko tih centralnih tacaka (detektuje palindrome neparnih duzina)
    for (let c = 0; c < letters.length; c++) {
        let len = palindromeLen(letters, c, c);
        if (len > maxLen) {
            maxLen = len;
        }
    }

    // 2) Prolazimo kroz sve susedne parove karaktera i formiramo palindrome oko tih centralnih parova (detektuje palindrome parnih duzina)
    for (let c = 0; c < letters.length - 1; c++) {
        let len = palindromeLen(letters, c, c + 1);
        if (len > maxLen) {
            maxLen = len;
        }
    }

    console.log(maxLen);
}

let input = "xabba0";
let letters = input.split("");
solve(letters);