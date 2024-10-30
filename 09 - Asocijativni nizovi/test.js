/* let assocArr = {};
assocArr["pera"] = 178;
assocArr["milena"] = 164;
assocArr["aca"] = 183; */

let assocArr = {
    "pera": 178,
    "milena": 164,
    "aca": 183
};

// Kod asocijativnih nizova, kljucevi moraju da budu stringovi

for (let key in assocArr) {
    console.log(`${key}  ${assocArr[key]}`);
}

assocArr["milena"] = 171;

for (let key in assocArr) {
    console.log(`${key}  ${assocArr[key]}`);
}

// Ova petlja ne moze! (asocijativni nizovi nisu iterabilni)
/*
for (let x of assocArr) {
    console.log(x);
}
*/
// Umesto toga, ide ovako:
let ent = Object.entries(assocArr);
for (let x of ent) {
    let key = x[0];
    let value = x[1];
    console.log(`${key} -> ${value}`);
}

// Isto to, samo na drugi nacin:
for (let [key, value] of ent) {
    console.log(`${key} -> ${value}`);
}