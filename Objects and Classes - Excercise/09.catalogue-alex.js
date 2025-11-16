function storeCatalog(productsArr) {
     let products = [];

     for (let product of productsArr){
        let [name, price] = product.split(':');
        price = Number(price);

        products.push({name: name, price: price}); //{name, price} - is also correct since the names are all the same
    }

    let sordedProducts = products.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = '';

    for (product of sordedProducts){
        let firstLetter = product.name[0];

         if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            console.log(currentLetter);
        }

        // Print product inside the group
        console.log(`   ${product.name}: ${product.price}`);
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