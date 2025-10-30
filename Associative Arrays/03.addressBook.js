function solve(data) {
    let addressBook = {};

    for (let entry of data){
        let parsedData = entry.split(':');

        [firstName, address] = parsedData;

        addressBook[firstName] = address; //no if-else because we are re-writing anyways
    }

    let addressBookEntries = Object.entries(addressBook); //we get array of arrays
   
    addressBookEntries.sort((first, second) => {
        let firstKey = first[0];
        let secondKey = second [0];

        return firstKey.localeCompare(secondKey);
    });

    for (let [firstName, address] of addressBookEntries){ // or just key & value
        console.log(`${firstName} -> ${address}`);
        
    }    
}

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);