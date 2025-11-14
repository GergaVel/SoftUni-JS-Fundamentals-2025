function listOfProducts (products) {
    let result = products
        .sort() 
        .map((pr, i) => `${i + 1}.${pr}`); //index + 1

    for (product of result){
        console.log(product);        
    }

    

}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions','Apples'])