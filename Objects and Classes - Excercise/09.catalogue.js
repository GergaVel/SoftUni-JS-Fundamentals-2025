function storeCatalog(productsArr) {
    let catalogue = {};

    // Parse input into object
    for (let line of productsArr) {
        let [productName, price] = line.split(' : ');
        price = Number(price);
        catalogue[productName] = price;
    }

    // Sort by product name
    let sorted = Object.entries(catalogue)
        .sort((a, b) => a[0].localeCompare(b[0]));

    let currentLetter = '';

    for (let [name, price] of sorted) {
        let firstLetter = name[0];

        // If it's a new group letter
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            console.log(currentLetter);
        }

        // Print product inside the group
        console.log(`  ${name}: ${price}`);
    }
}
storeCatalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);