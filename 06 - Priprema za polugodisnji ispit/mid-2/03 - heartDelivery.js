function solve(arr) {
    let arrHearts = arr.shift().split("@").map(Number);
    let commandLine = arr.shift();

    let currentPosition = 0;
    while (commandLine != "Love!") {
        let tokens = commandLine.split(" ");
        let jump = Number(tokens[1]);
        currentPosition += jump;
        if (currentPosition >= arrHearts.length) {
            currentPosition = 0;
        }

        if (arrHearts[currentPosition] == 0) {
            console.log(`Place ${currentPosition} already had Valentine's day.`);
        } else {
            arrHearts[currentPosition] -= 2;
            if (arrHearts[currentPosition] == 0) {
                console.log(`Place ${currentPosition} has Valentine's day.`);
            }
        }

        commandLine = arr.shift();
    }

    console.log(`Cupid's last position was ${currentPosition}.`);
    let arrTmp = arrHearts.filter(x => x > 0);
    if (arrTmp.length == 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${arrTmp.length} places.`);
    }
}

solve(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);    