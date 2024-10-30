function solve(arr) {
    let storage = {};

    for (let elem of arr) {
        let [product, qty] = elem.split(" ");
        qty = Number(qty);
        if (!storage.hasOwnProperty(product)) {
            storage[product] = qty;
        } else {
            let oldQty = storage[product];
            storage[product] = oldQty + qty;
        }
    }

    let entries = Object.entries(storage);
    for (let [product, qty] of entries) {
        console.log(`${product} -> ${qty}`);
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
    );