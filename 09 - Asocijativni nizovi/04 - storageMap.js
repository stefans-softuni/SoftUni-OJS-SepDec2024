function solve(arr) {
    let storage = new Map();

    for (let elem of arr) {
        let [product, qty] = elem.split(" ");
        qty = Number(qty);
        if (storage.get(product) === undefined) {
            storage.set(product, qty);
        } else {
            let oldQty = storage.get(product);
            storage.set(product, oldQty + qty);
        }
    }

    for (let elem of storage) {
        console.log(`${elem[0]} -> ${elem[1]}`);
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
    );



// Map vs. Associate Array
// Map (kljucevi mogu da budu bilo koje vrednosti)
// Associate Array (kljucevi su iskljucivo stringovi)

// Map (su iterabilne)
// Associate Array (nisu iterabilni)
