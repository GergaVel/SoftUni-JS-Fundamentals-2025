function activationKeys(input) {
    let activationKey = input.shift();

    for (let line of input){
        let [command, ... params] = line.split('>>>');

        if (command === 'Generate'){
            console.log(`Your activation key is: ${activationKey}`);
                break;
        }

        if (command === 'Contains'){
            let substring = params[0];

                if (activationKey.includes(substring)){
                    console.log(`${activationKey} contains ${substring}`);                
                } else {
                    console.log(`Substring not found!`);                
                }

        } else if (command === 'Flip'){
            let subCommand = params[0];
            let startIndex = Number(params[1]);
            let endIndex = Number(params[2]);

                if (subCommand === 'Upper'){
                    activationKey = activationKey.substring(0, startIndex) + 
                                 activationKey.substring(startIndex, endIndex).toUpperCase() + 
                                 activationKey.substring(endIndex);
                } else if (subCommand === 'Lower'){
                    activationKey = activationKey.substring(0, startIndex) + 
                                 activationKey.substring(startIndex, endIndex).toLowerCase() + 
                                 activationKey.substring(endIndex);
                }

                console.log(activationKey);
                

        } else if (command === 'Slice'){
            let startIndex = Number(params[0]);
            let endIndex = Number(params[1]);

            activationKey = activationKey.substring(0, startIndex) + 
                            activationKey.substring(endIndex);
            
            console.log(activationKey);            
        }
    } 
}


activationKeys(["abcdefghijklmnopqrstuvwxyz", 
    "Slice>>>2>>>6", 
    "Flip>>>Upper>>>3>>>14", 
    "Flip>>>Lower>>>5>>>7", 
    "Contains>>>def", 
    "Contains>>>deF", 
    "Generate"
]);