// Stringovi nisu nizovi, ali su stringovi objekti!
// To znaci da imaju svojstva i metode


// Svojstvo length: Vraca duzinu stringa
let s1 = "Novembar ";
console.log(s1.length);


// Metoda charAt()
console.log(s1.charAt(2));  // v
console.log(s1.charAt(-2));  // NE MOZE!
let c1 = s1.charAt(100);     // charAt() vraca prazan string ukoliko karakter sa datim indeksom ne postoji
console.log(c1, typeof c1);  // "", string


// Operator [] - u sustini isto kao charAt(), sa razlikom kod pristupa nepostojecem karakteru
c1 = s1[100];
console.log(c1, typeof c1);  // undefined, undefined


// Metoda charCodeAt(): Vraca kod karaktera na datom mestu
console.log(s1.charCodeAt(2));   // 118


// Metoda at(): Od novije JS verzije, isto kao i charAt(), samo mogu i negativni indeksi
console.log(s1.at(2));   // v
console.log(s1.at(-2));  // r (Drugi karakter sa desne strane)


// Metoda concat(): Za konkatenaciju stringova  (concat() isto sto i +, znaci ne menja operande)
let s2 = "Decembar";
let s3 = s1.concat(s2);
console.log(s1, s2, s3);


// Metoda includes(): Proverava da li string sadrzi dati podstring (vraca true/false)
let str1 = "U okviru SoftUni-a ucimo JavaScript i Java programske jezike";
let b1 = str1.includes("Java");  // true
console.log(b1);
if (str1.includes("Java")) {
    console.log("String sadrzi rec 'Java'");
}
if (str1.includes("java")) {
    console.log("String sadrzi rec 'java'");
}


// Metoda indexOf(): Vraca indeks PRVOG pojavljivanja podstringa, ili -1 ako podstring ne postoji (vraca broj)
console.log(str1.indexOf("Java"));      // 25
if (str1.indexOf("Java") !== -1) {   
    console.log("String sadrzi rec 'Java'");
}
console.log(str1.indexOf("U"));
if (str1.indexOf("U") !== -1) {
    console.log("String sadrzi rec 'U'");
}


// Metoda lastIndexOf(): Vraca indeks POSLEDNJEG pojavljivanja podstringa, ili -1 ako podstring ne postoji (vraca broj)
console.log(str1.lastIndexOf("Java"));  // 38
if (str1.lastIndexOf("Java") !== -1) {   
    console.log("String sadrzi rec 'Java'");
}


// Za ekstrakciju podstringova, postoje 3 metode:
// 1) slice(start, end = null)
// 2) substring(start, end = null)
// 3) substr(start, length)


// Metoda slice(): izvlaci podstring (od indeksa start do indeksa end, ne ukljucujuci end) i vraca kao rezultat
// Parametri mogu da budu negativne vrednosti
let str2 = "Danas je Novembar";
let str3 = str2.slice(9, 13);  
console.log(str3);  // "Nove"
console.log(str2.slice(9));  // "Novembar"
console.log(str2.slice(-8)); // "Novembar"
console.log(str2.slice(-8, -4));  // "Nove"


// Metoda substring(): Isto kao i slice(), samo negativne vrednosti parametra tretira kao 0
console.log(str2.substring(9, 13));  // "Nove"
console.log(str2.substring(-5, 5));  // "Danas"
console.log(str2.substring(9));  // "Novembar"


// Metoda substr(): Isto kao i slice(), samo je drugi parametar duzina izvucenog podstringa
// DEPRECATED! (ne preporucuje se koriscenje)
console.log(str2.substr(9, 4));   // "Nove"
console.log(str2.substr(9));    // "Novembar"
console.log(str2.substr(-8));    // "Novembar"
console.log(str2.substr(-8, -4));    // ""


// Metoda replace(search, replacement): Menja seach podstring u replacement
// Ne menja originalni string!
str1 = "U okviru SoftUni-a ucimo JavaScript i Java programske jezike";
let str4 = str1.replace("Java", "Python");
console.log(str1);
console.log(str4);


// Metoda replaceAll(search, replacement): Menja SVA POJAVLJIVANJA search podstringa u replacement
// Ne menja originalni string!
// Dostupna u novoj verziji JS-a
let str5 = str1.replaceAll("Java", "Python");
console.log(str5);


// Metoda repeat(): Vraca string sa zadatim brojem kopija datog stringa
console.log("Novembar".repeat(3));


// Metoda split(separator): Konvertuje string u niz podstringova razdvojenih separatorom
// (Vise puta radjeno do sada)


// Metoda trim(): Krati visak razmaka sa pocetka i kraja stringa
// Metoda trimStart(): Isto, samo sa pocetka
// Metoda trimEnd(): Isto, samo sa kraja
console.log("     Danas   je Novembar          ".trim());


// Metoda padStart(length, str): Dodaje str na pocetak sve dok duzina stringa ne postane length
// Metoda padEnd(length, str): Dodaje str na kraj sve dok duzina stringa ne postane length
console.log("Mart".padStart(10, "_"));
console.log("April".padEnd(10, "*"));


// Metoda startsWith(str): Proverava da li string pocinje sa str (vraca bool)
// Metoda endsWith(str): Proverava da li se string zavrsava sa str (vraca bool)
console.log("Novembar".startsWith("Nov"));  // true