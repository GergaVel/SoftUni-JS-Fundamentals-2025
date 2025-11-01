function storage(input) {
    let map = new Map();

    for (let data of input){
        let [item,qty] = data.split(' ');  
        qty = Number(qty); //parse to num
        
        if (map.has(item)){
            let currentQty = map.get(item);
            let updatedQty = currentQty + qty;

            map.set(item,updatedQty);

        } else {
            map.set(item, qty); 
        }
    }

    for (let [key,value] of map.entries()){
        console.log(`${key} -> ${value}`);        
    }
}

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);  