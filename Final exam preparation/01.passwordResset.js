function passwordReset (input){
    let password = input.shift();

    for (let line of input){
        let [command, ...params] = line.split(' ');
        
        if (command === 'Done'){
            console.log(`Your password is: ${password}`);
                break;
        }

        if (command === 'TakeOdd'){
            let newPass = '';
            for (let i = 0; i < password.length; i++){
                if (i % 2 === 1){
                    newPass += password[i];
                }               
            }

            password = newPass;
            console.log(password);
            
            

        } else if (command === 'Cut'){
            let index = Number(params[0]);
            let length = Number(params[1]);

            password = password.substring(0, index) +
                       password.substring(index + length);

            console.log(password); 

        } else if (command === 'Substitute'){
            let substring = params[0];
            let substitute = params[1];

            if (password.includes(substring)){ //cooler option than a while loop!!
               password = password.split(substring).join(substitute); //and not password = password.replace(substring, substitute) - this only changes one
               console.log(password);
                
            } else {
                console.log(`Nothing to replace!`);          
            }
        }        
    }
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);