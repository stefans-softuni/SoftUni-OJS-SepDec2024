function solve(arr) {
    let arrNumbers = arr.shift().split(" ").map(Number);
    // Posle shift(): '23 -2 321 87 42 90 -123'
    // Posle split(): ['23', '-2', '321', '87', '42', '90', '-123']
    // Posle map():   [23, -2, 321, 87, 42, 90, -123]

    let commandLine = arr.shift();
    while (commandLine != "end") {
        let tokens = commandLine.split(" ");
        let command = tokens[0];
        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);

        if (command == "swap") {
            // takes two elements and swap their places
            let temp = arrNumbers[index1];
            arrNumbers[index1] = arrNumbers[index2];
            arrNumbers[index2] = temp;
        } else if (command == "multiply") {
            // takes element at the 1st index and multiply it with the element at 2nd index. Save the product at the 1st index.
            arrNumbers[index1] *= arrNumbers[index2];
        } else if (command == "decrease") {
            // decreases all elements in the array with 1
            arrNumbers = arrNumbers.map(x => x - 1);
        }

        commandLine = arr.shift();
    }

    console.log(arrNumbers.join(", "));
}

solve( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  );