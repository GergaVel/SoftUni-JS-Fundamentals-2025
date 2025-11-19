function secretChat(input){
    let message = input.shift();

    for (let line of input){
        let [command, ...params] = line.split(':|:');
        
        if (command === 'Reveal'){
            console.log(`You have a new text message: ${message}`);            
            break;
        }

        if (command === 'InsertSpace'){
            let index = Number(params[0]);
            message = message.substring(0, index) +
                      " " +
                      message.substring(index);    
                      
        console.log(message);        

        } else if (command === 'Reverse'){
          let substring = params[0];
            
            if (message.includes(substring)) {

                let index = message.indexOf(substring);

                let before = message.substring(0, index);
                let after = message.substring(index + substring.length);

                message = before + after; //now it's gone

                let reversed = substring.split('').reverse().join('');

                message = message + reversed;

                console.log(message);

            } else {
                console.log("error");
            }

        } else if (command === 'ChangeAll'){
            let substring = params[0];
            let replacement = params[1];

            while (message.includes(substring)){
                message = message.replace(substring, replacement);
            }
            console.log(message);            
        }
    }   
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);