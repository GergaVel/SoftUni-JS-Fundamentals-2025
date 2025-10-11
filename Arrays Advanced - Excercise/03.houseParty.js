function houseParty (arr){
    let guests = [];

    for (let command of arr){ // to extract each command
        let tokens = command.split(' '); //splits each word or inout by interval, we get each word as an element of the new arr tokens
        let name = tokens.shift(); //or tokens[0]; differance - with shift it gets extracted from the original element and it's gone while with [0] it just shows us the requested element
        
        if (tokens.includes('not')){
            if (guests.includes(name)){ // we need to find the index first
                let idx = guests.indexOf(name);
                guests.splice(idx,1);//1 is to remove 1 element on the given idx
            } else {
                console.log(`${name} is not in the list!`);
            }

        } else {
            if (guests.includes(name)){ //if the guest is already on the list
                console.log(`${name} is already in the list!`);                
            } else { // if this person is not on the list, add them
                guests.push(name);           
            }
        }
    }

    console.log(guests.join('\n'));
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);

    