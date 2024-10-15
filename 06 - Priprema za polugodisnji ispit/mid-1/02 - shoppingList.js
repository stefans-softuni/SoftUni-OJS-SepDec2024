function solve(arr) {
    let firstElem = arr.shift();
    let groceries = firstElem.split("!");

    let commandLine = arr.shift();
    while (commandLine != "Go Shopping!") {
        let tokens = commandLine.split(" ");
        let command = tokens[0];
        let firstParam = tokens[1];
        let secondParam = tokens[2];

        if (command == "Urgent") {
            // add the item at the start of the list.  If the item already exists, skip this command
            if (!groceries.includes(firstParam)) {
                groceries.unshift(firstParam);
            }
        } else if (command == "Unnecessary") {
            // remove the item with the given name, only if it exists in the list. Otherwise, skip this command
            if (groceries.includes(firstParam)) {
                let indexOfItem = groceries.indexOf(firstParam);   // vraca indeks pojavljivanja vrednosti firstParam
                groceries.splice(indexOfItem, 1);
            }
        } else if (command == "Correct") {
            // if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
            if (groceries.includes(firstParam)) {
                let indexOfItem = groceries.indexOf(firstParam);   // vraca indeks pojavljivanja vrednosti firstParam
                groceries.splice(indexOfItem, 1, secondParam);
            }
        } else if (command == "Rearrange") {
            // if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command
            if (groceries.includes(firstParam)) {
                let indexOfItem = groceries.indexOf(firstParam);   // vraca indeks pojavljivanja vrednosti firstParam
                groceries.splice(indexOfItem, 1);
                groceries.push(firstParam);
            }
        }

        commandLine = arr.shift();
    }

    console.log(groceries.join(", "));
}

solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);
    
solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);    