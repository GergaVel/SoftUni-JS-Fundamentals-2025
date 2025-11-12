function minerTask(arr) {
    let resourceQtys = {};

    for (let i = 0; i < arr.length; i += 2){ //normal for loop because we need to work with 2 elements at a time
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        if (resource in resourceQtys) {
            resourceQtys[resource] += qty; // if the key already exists, add to it this value
        } else {
            resourceQtys[resource] = qty; // if the key does not exist, create it
        } 
    }

    let entries = Object.entries(resourceQtys); // returns array with arrays [[], [], []]; 
    
    for (let [resource, qty] of entries){
        console.log(`${resource} -> ${qty}`);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]); 