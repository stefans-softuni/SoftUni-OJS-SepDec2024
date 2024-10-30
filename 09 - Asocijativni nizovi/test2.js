let piljara = {
    "banana": 200,
    "jabuka": 90,
    "pomorandza": 350
}

let entries = Object.entries(piljara);

entries.sort(([keyA, valueA], [keyB, valueB]) => {
    // za stringove: return valueA.localeCompare(valueB)
    // za brojeve:
    return valueA - valueB;
});

for (let [voce, cena] of entries) {
    console.log(`${voce} -> ${cena}`);
}