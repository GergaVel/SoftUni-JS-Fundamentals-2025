function storeCatalog(productsArr) {
  // Step 1: Parse each line into an object
  let products = [];

  for (let line of productsArr) {
    let [name, price] = line.split(' : ');
    products.push({ name, price: Number(price) });
  }

  // Step 2: Sort alphabetically by name
  products.sort((a, b) => a.name.localeCompare(b.name));

  // Step 3: Print grouped by first letter
  let currentLetter = '';

  for (let product of products) {
    let firstLetter = product.name[0];

    if (firstLetter !== currentLetter) {
      console.log(firstLetter);
      currentLetter = firstLetter;
    }

    console.log(`  ${product.name}: ${product.price}`);
  }
}
