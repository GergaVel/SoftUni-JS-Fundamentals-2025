function dictionary (arr){
    dictionary = {};

    for (let jsonStr of arr){
        let obj = JSON.parse(jsonStr); // convert it into an object
        let entries = Object.entries(obj); // returns and array: [['Coffee', 'A hot drink made\n...']]
        let [term, definition] = entries[0]; //important to rember this [0] - I didn't fully get it but still
       
        dictionary[term] = definition;                
    }
     let sorted = Object.entries(dictionary).sort((a,b) => a[0].localeCompare(b[0]));

        for (let [term, definition] of sorted){
            console.log(`Term: ${term} => Definition: ${definition}`);            
        }
}

dictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}'
]);

