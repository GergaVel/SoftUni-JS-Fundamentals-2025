function storeProvision(currentStock, orderedProducts) {
    let products = {};

    // 1. Add the current stock
    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let qty = Number(currentStock[i + 1]);
        products[product] = qty;
    }

    // 2. Add the ordered stock (update if exists)
    for (let i = 0; i < orderedProducts.length; i += 2) {
        let product = orderedProducts[i];
        let qty = Number(orderedProducts[i + 1]);

        if (product in products) {
            products[product] += qty;       // increase quantity
        } else {
            products[product] = qty;        // new product
        }
    }

    // 3. Print results
    for (let [product, qty] of Object.entries(products)) {
        console.log(`${product} -> ${qty}`);
    }
}


storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2' ],

    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]);