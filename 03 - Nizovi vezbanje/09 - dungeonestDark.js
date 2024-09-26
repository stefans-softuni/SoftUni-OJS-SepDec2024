function solve(arr) {
    let dungen = arr[0].split("|");   // dungen je niz soba (niz stringova oblika "item/monster number")
    let healt = 100;
    let coins = 0;
    let survived = true;

    for (let i = 0; i < dungen.length; i++) {
        let rev = dungen[i].split(" ");
        let itemOrMonster = rev[0];
        let number = Number(rev[1]);

        if (itemOrMonster == "potion") {
            healt += number;
            if (healt > 100) {
                number = number - (healt - 100);
                healt = 100;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${healt} hp.`);
        } else if (itemOrMonster == "chest") {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            healt -= number;
            if (healt > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            } else {
                survived = false;
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }

    if (survived) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${healt}`);
    }
}

// solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);