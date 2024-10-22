class Student {
    constructor(n, a) {
        // ovde kazemo koja polja ce imati objekti klase Student
        // i koje ce vrednosti biti za ta polja
        this.name = n;
        this.age = a;
    }

    print() {
        console.log(`Student with name ${this.name} is ${this.age} years old.`);
    }
}

let s1 = new Student("Pera", 25);  // s1.name = "Pera", s1.age = 25
//console.log(s1);
s1.print();

let s2 = new Student("Zika", 18);  // s2.name = "Zika", s2.age = 18
//console.log(s2);
s2.print();