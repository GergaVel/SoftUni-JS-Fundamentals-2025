function furniture(arr) {
    let pattern = />>(?<name>[A-Z][A-Za-z]*)<<(?<price>\d+(\.\d+)?)!(?<qty>\d+)/;
    let furniture = []; //every time we find a match, we can push it in this arr
    let totalPrice = 0;

    let command = arr.shift();

    while (command !== 'Purchase'){
        // we need to compare now, if we have a match, we add the info to the vriables
        let match = command.match(pattern);  //if there is a match it returns an arr, if not it returns null!!!

        if (match) {
            let {name, price, qty} = match.groups;
            furniture.push(name);
            totalPrice += Number(price) * Number(qty); 
        }

        command = arr.shift();
    }

    console.log("Bought furniture:");

    if (furniture.length > 0){
        furniture.forEach(f => console.log(f)); // == for (let f of furniture) {console.log(f)}
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);   
}

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);