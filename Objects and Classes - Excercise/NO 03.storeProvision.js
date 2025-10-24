function storeProvision(arr1, arr2) {
    let name = '';
    let qty = 0;
    
    for (let i = 0; i < arr1.length; i++){
       
        if (i % 2 === 0){
            name = arr1[i];
        } else {
            qty = Number(arr1[i]);
        }
         
        
        
        
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2' ],

    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]);