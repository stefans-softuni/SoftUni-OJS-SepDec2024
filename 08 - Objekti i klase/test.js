let x = 5;  // Number
let y = x;  // x = 5, y = 5

console.log(x + " " + y);

x = 7;

console.log(x + " " + y);

let arr1 = [3, 4, 5];  // Array
// arr1 --->   [3, 4, 5]
let arr2 = arr1;

console.log(arr1, arr2);

arr1[0] = 9;

console.log(arr1, arr2);

let obj1 = { name: "Pera", age: 20 };
let obj2 = obj1;
console.log(obj1, obj2);

obj1.name = "Mika";
console.log(obj1, obj2);

let osoba1 = {ime: "Pera", prezime: "Peric", godine: 49};
// .....
// .....
// .....
let osoba20 = {ime: "Mika", prezime: "Mikic"};