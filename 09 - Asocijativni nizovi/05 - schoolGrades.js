function solve(arr) {
    // Iz niza arr dohvatamo elemente i formiramo asocijativni niz
    // Kljucevi su imena, a vrednosti su stringovi (ocene razdvojene razmakom)
    // let assocArr = { 'Lilly': '4 6 6 5', 'Tim': '5 6 6 6', 'Tammy': '2 4 3' };

    let assocArr = {};
    for (let elem of arr) {
        let tokens = elem.split(" ");  // tokens = ["Lilly", "4", "6", "6", "5"]
        let name = tokens.shift();     // name = "Lilly", tokens = ["4", "6", "6", "5"]
        let grades = tokens.join(" "); // grades = "4 6 6 5"
        if (!assocArr.hasOwnProperty(name)) {
            assocArr[name] = grades;
        } else {
            let oldGrades = assocArr[name];
            assocArr[name] = oldGrades + " " + grades;
        }
    }

    // Sortiramo ucenike po imenima (sortiranje niza po kljucevima)
    let entries = Object.entries(assocArr);
    entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    });

    // Ispis ucenika
    for (let [name, grades] of entries) {
        // Racunamo prosecnu ocenu na osnovu stringa `grades`
        let arrGrades = grades.split(" ");
        let sumGrades = 0;
        let countGrades = 0;
        for (let grade of arrGrades) {
            grade = Number(grade);
            sumGrades += grade;
            countGrades++;
        }
        let avgGrade = sumGrades / countGrades;
        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);