function theImitationGame(input) {
    let message = input.shift();

    for (let line of input){
        let [command, ...params] = line.split('|');

    
        if (command === 'Decode'){
            console.log(`The decrypted message is: ${message}`);  
            break;
        } 
        
        if (command === 'Move'){
            let lettersCount = Number(params[0]);
            message = message.substring(lettersCount) +
                      message.substring(0, lettersCount);        
 
        } else if (command === 'Insert'){
            let index = Number(params[0]);
            let value = params[1];

            message = message.substring(0, index) + 
                            value +
                            message.substring(index);
            
        } else if (command === 'ChangeAll'){
            let substring = params[0];
            let replacement = params[1];

            // while (message.indexOf(substring) >= 0){
            //     message = message.replace(substring, replacement)
            // }          

            while (message.includes(substring)) { 
                 message = message.replace(substring, replacement);
            }
        }                
    }
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);