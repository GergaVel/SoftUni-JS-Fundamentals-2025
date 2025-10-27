class Storage {
    constructor (capacity) {
        this.capacity = capacity;
        this.storage = []; //will be filled up later
        this.totalCost = 0; //because we haven't bougth anything
    }

    addProduct(productObj){
        this.storage.push(productObj); //to push it in the empty []
        this.capacity -= productObj.quantity;
        this.totalCost += productObj.price * productObj.quantity;
    }

    getProducts(){
        let productJsons = [];

        for (let productObj of this.storage){
           productJsons.push(JSON.stringify(productObj)); //we can't use return here, because the loop will stop after the first round
        }

        return productJsons.join('\n');
    }
}


let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);