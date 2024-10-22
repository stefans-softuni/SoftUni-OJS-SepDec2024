function solve(fname, lname, hcolor) {
    let obj = {};
    obj.name = fname;
    obj.lastName = lname;
    obj.hairColor = hcolor;
    let text = JSON.stringify(obj);
    console.log(text);
}

solve('George', 'Jones', 'Brown');