//so we have an array full of different types of info and we need to chop it into different arrays one by one. We do this by .shift() to a new array

function arrManipulations(input) {
    let numbers = input //input stays without the extracted element
        .shift() //to extract the first element
        .split(' ') // to separate the elements in that element with ' ';
        .map(Number);// to convert to numbers

    for (let command of input){
        let commandParts = command.split(' '); // to extract each command

        let commandName = commandParts.shift(); // separates the command from the number we do something
        
        commandParts = commandParts.map(Number); // what ever is left in the arr, transform it to a number
        
            if (commandName === 'Add'){
                let value = commandParts.pop(); //to take the number that seen as the last element of commandParts and push it to the original arr

                numbers.push(value);
            } else if (commandName === 'Remove'){
                let value = commandParts.pop();
                
                numbers = numbers.filter(num => num !== value); // go through the arr and filter all numbers that at !== value
            } else if (commandName === 'RemoveAt'){
                let index = commandParts.pop();
                
                numbers.splice(index, 1); //to find the number and delete only that num
            } else if (commandName === 'Insert'){
                let number = commandParts[0];
                let index = commandParts[1];

                numbers.splice(index, 0, number); //on this index, I want you to add (that's why a 0), this number
            }
    }

    console.log(numbers.join(' '));
    

}

arrManipulations(['4 19 2 53 6 43',
'Add 3', 
'Remove 2',
'RemoveAt 1',
'Insert 8 3']); 