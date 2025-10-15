function computerStore(arr) {
   let customerType = arr.pop();
   let noTaxTotal = 0;  

        for (let price of arr) {
            price = Number(price);
            if (price <= 0) {
                console.log("Invalid price!");
                continue; 
            }
            noTaxTotal += price;
        }

        if (noTaxTotal === 0) {
            console.log("Invalid order!");
            return;
        }
  

   let taxOnly = noTaxTotal * 0.20;
   let finalPrice = noTaxTotal + taxOnly;

   if (customerType === 'special'){
        finalPrice *= 0.90;
   } 

console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${noTaxTotal.toFixed(2)}$
Taxes: ${taxOnly.toFixed(2)}$
-----------
Total price: ${finalPrice.toFixed(2)}$`);
}


computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]);