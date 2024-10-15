function solve(arr) {
    // 1) Uzme se prvi element niza (string) i konvertuje se u niz brojeva (mete)
    let targetsString = arr.shift();
    let arrTargets = targetsString.split(" ").map(Number);  
    // Bez map(Number): arrTargets = ["52", "74", "23", "44", "96", "110"]
    // Nakon map(Number): arrTargets = [52, 74, 23, 44, 96, 110]

    // 2) Ucitavaju se komande i menja se niz po uputstvima
    let commandLine = arr.shift();
    while (commandLine != "End") {
        let tokens = commandLine.split(" ");
        let command = tokens[0];
        let firstNum = Number(tokens[1]);
        let secondNum = Number(tokens[2]);

        if (command == "Shoot") {
            // Shoot the target at the index if it exists by reducing its value by the given power (integer value). 
            let index = firstNum;
            let power = secondNum;
            if (index >= 0 && index < arrTargets.length) {
                arrTargets[index] -= power;
                // Remove the target if it is shot. A target is considered shot when its value reaches 0.
                if (arrTargets[index] <= 0) {
                    arrTargets.splice(index, 1);
                }
            }
        } else if (command == "Add") {
            // Insert a target with the received value at the received index if it exists. 
            // If not, print: "Invalid placement!"
            let index = firstNum;
            let value = secondNum;
            if (index >= 0 && index < arrTargets.length) {
                arrTargets.splice(index, 0, value);
            } else {
                console.log(`Invalid placement!`);
            }
        } else if (command == "Strike") {
            // Remove the target at the given index and the ones before and after it depending on the radius.
            // If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.
            let index = firstNum;
            let radius = secondNum;
            if (index - radius >= 0 && index + radius < arrTargets.length) {
                arrTargets.splice(index - radius, 2 * radius + 1);
            } else {
                console.log(`Strike missed!`);
            }
        }

        commandLine = arr.shift();
    }

    console.log(arrTargets.join("|"));
}

solve(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
    
solve(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);    