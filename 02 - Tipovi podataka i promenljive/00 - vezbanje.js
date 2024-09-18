console.log(y);  // promenljiva y postoji jer je var hoistingovao, pa je ona dostupna, ali njena vrednost ovde je UNDEFINED
// console.log(z);  // ovo ne moze jer let ne radi hoisting (ne moze da se koristi promenljiva PRE deklaracije)

function testVar() {
    console.log(x); 
    if (5 == 5) {
        var x = 2;   // var - oblast vazenja (scope) je unutar funkcije!
    }
    var x;
    console.log(x);
}
// var takodje radi hoisting (pomera deklaraciju promenljive na sam pocetak funkcije)
/*
function testVar() {
    var x;    // x = undefined
    console.log(x); // undefined
    if (5 == 5) {
        x = 2;   // dodela vrednosti
    }
    console.log(x);  // 2
}
*/

testVar();
// console.log(x);   // ovde ne mozemo da pristupimo promenljivoj x iz funkcije!



function testLet() {
    // console.log(x);  // ovo ne moze jer let NE RADI hoisting!
    if (5 == 5) {
        let x = 2;  // let - oblast vazenja (scope) je unutar bloka!
        console.log(x);
    }
    // console.log(x);   // ovde ne mozemo da pristupimo promenljivoj x!
    for (let x = 1; x <= 5; x++) {
        console.log(x);
    }
}

testLet();

var y = "Globalna promenljiva y";
let z = "Globalna promenljiva z";
console.log(y);
console.log(z);