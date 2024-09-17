// console.log(25 / 4);  // 25 = 6 * 4 + 1    (6 je kolicnik, 1 je ostatak)
// console.log(25 % 4);  // 1 = ostatak

// 14 sati = 2 sata popodne    (14 = 1 * 12 + 2)   (14 % 12 = 2)
// 15 % 12 = 3   =>  15 sati = 3 sata popodne
// 24 % 12 = 0   =>  24 sata = 0 sata (ponoc)

// m % n -> kao rezultat dobijamo ceo broj iz opsega { 0, 1, 2, ..., n - 1 }

function solve(n) {
    while (n >= 1) {
        console.log(n);
        n--;
    }
}

solve(9);   

// Step Over [F10] - predji preko poziva (ne ulazi u f-ju)
// Step Into [F11] - udji u poziv f-je
// Toogle Breakpoint [F9] - sa jednog na drugi breakpoint