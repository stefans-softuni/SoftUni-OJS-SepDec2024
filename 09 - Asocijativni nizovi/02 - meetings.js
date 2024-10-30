function solve(arr) {
    let meetings = {};

    for (let elem of arr) {
        let [day, name] = elem.split(" ");
        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    let ent = Object.entries(meetings);
    for (let [key, value] of ent) {
        console.log(`${key} -> ${value}`);
    }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   );

// assocArr.hasOwnProperty(key), ili
// Object.hasOwn(assocArr, key)