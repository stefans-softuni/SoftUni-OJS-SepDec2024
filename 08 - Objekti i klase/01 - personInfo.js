function solve(fname, lname, a) {
    let obj = {};
    obj.firstName = fname;
    obj.lastName = lname;
    obj.age = a;
    return obj;
}

console.log(solve("Peter", "Pan", "20"));