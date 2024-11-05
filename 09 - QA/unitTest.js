const { describe, it } = require("node:test");
const { sum } = require("./test.js");
const assert = require("assert");

describe("Testiranje funkcije sume elemenata niza sum(arr)", function() {
    /*it("Da li je sum([1, 2]) == 3", function() {
        assert.equal(sum([1, 2]), 3);
    });*/
    
    // Automatski test: [1] = 1,  [1, 2] = 3,  [1, 2, 3] = 6,  [1, 2, 3, 4] = 10,  [1, 2, 3, 4, 5] = 15
    function test(n) {
        let niz = [];
        for (let i = 1; i <= n; i++) {
            niz.push(i);
        }
        let result = n * (n + 1) / 2;
        it(`Da li je sum([1,..., ${n}]) == ${result}`, function() {
            assert.equal(sum(niz), result);
        });
    }

    for (let i = 1; i <= 5; i++) {
        test(i);
    }
});
// Za ovaj nacin, u konzoli treba pozvati komandu mocha --ui .\unitTest.js

/*
suite("Testiranje funkcije sume elemenata niza sum(arr)", function() {
    test("Provera da li je sum([1, 2]) == 3", function() {
        assert.equal(sum([1, 2]), 3);
    });
    test("Provera da li je sum([5, -1, 2]) == 6", function() {
        assert.equal(sum([5, -1, 2]), 6);
    });
    test("Provera da li je sum([]) == 0", function() {
        assert.equal(sum([]), 0);
    });
});

// Za ovaj nacin, u konzoli treba pozvati komandu mocha --ui tdd .\unitTest.js
*/