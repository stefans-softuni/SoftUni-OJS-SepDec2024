// Metoda regexp.test(string): Odredjuje da li postoji poklapanje po regexp-u (true ili false)

let text = 'Today is 2024-11-13';
let regexp = /\d{4}-\d{2}-\d{2}/g;

let result = regexp.test(text);
console.log(result);


// Metoda string.match(regexp): Vraca niz svih stringova sa kojima ima poklapanja

let text2 = 'Peter: 123, Mark: 456';
let regexp2 = /([A-Z][a-z]+): (\d+)/g;

let result2 = text2.match(regexp2);
console.log(result2);
/*for (let x of result2) {
    console.log(x);
}*/

// Metoda regexp.exec(string): Vraca niz na koji ukazuje pointer, i pointer podesava na sledeci string

let s1 = regexp2.exec(text2);
while (s1 !== null) {
    let stringKojiTrazimo = s1[0];
    let prvaGrupacija = s1[1];
    let drugaGrupacija = s1[2];
    console.log(`String: ${stringKojiTrazimo}, Grupa1: ${prvaGrupacija}, Grupa2: ${drugaGrupacija}`);
    s1 = regexp2.exec(text2);
}

// Ovo moze i kompaktnije ovako da se zapise:
while ((s1 = regexp2.exec(text2)) !== null) {
    let stringKojiTrazimo = s1[0];
    let prvaGrupacija = s1[1];
    let drugaGrupacija = s1[2];
    console.log(`String: ${stringKojiTrazimo}, Grupa1: ${prvaGrupacija}, Grupa2: ${drugaGrupacija}`);
}


// Metoda string.replace(regexp, stringReplacement): menja sva poklapanja sa stringReplacement

let text3 = 'Peter: 123 Mark: 456';
let regexp3 = /\d{3}/g;
let rep = "999";

let result3 = text3.replace(regexp3, rep);
console.log(result3);


// Metoda string.split(regexp): konvertuje string u niz, a separator je dat regexp