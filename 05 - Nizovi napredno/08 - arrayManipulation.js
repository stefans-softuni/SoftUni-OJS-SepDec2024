function solve(arr) {
    let firstElem = arr.shift();             // '4 19 2 53 6 43'
    let arrStrings = firstElem.split(" ");   // ['4', '19', '2', '53', '6', '43']
    let arrNums = arrStrings.map(Number);    // [4, 19, 2, 53, 6, 43]

    function add(el) {
        arrNums.push(el);
    }

    function remove(num) {
        arrNums = arrNums.filter(x => x != num);
    }

    function removeAt(index) {
        arrNums.splice(index, 1);
    }

    function insert(num, index) {
        arrNums.splice(index, 0, num);
    }


    for (let commandFull of arr) {
        let commandArr = commandFull.split(" ");
        let command = commandArr[0];
        let firstNumber = Number(commandArr[1]);
        switch (command) {
            case "Add":
                add(firstNumber);
                break;
            case "Remove":
                remove(firstNumber);
                break;
            case "RemoveAt":
                removeAt(firstNumber);
                break;
            case "Insert":
                let secondNumber = Number(commandArr[2]);
                insert(firstNumber, secondNumber);
                break;
        }
    }

    console.log(arrNums.join(" "));
}

/*
14 1 9 3 15 8
Remove 1
RemoveAt 0
Add 12
RemoveAt 1
Insert 10 1
*/