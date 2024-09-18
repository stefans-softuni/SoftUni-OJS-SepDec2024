function solve(num) {   // num je broj
    // let str = `${num}`;   // (moze i ovako konverzija number to string)
    let str = num.toString();

    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum = sum + Number(str[i]);
    }

    let sumStr = sum.toString();
    if (sumStr.includes('9')) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

solve(153);
solve(1233);