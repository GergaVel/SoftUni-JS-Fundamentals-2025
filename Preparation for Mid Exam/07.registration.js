
function registration(arr) {
    let username = arr.shift(); //a string from now on

    for (let i = 0; i < arr.length; i++){
        let line = arr[i];

        if (line === 'Registration') break; 
        let [command, ...params] = line.split(' ');

        if (command === 'Letters'){
            let toLower = username.toLowerCase();
            let toUpper = username.toUpperCase();
            switch(params[0]){
                
                case 'Lower': 
                    username = username.toLowerCase();
                    console.log(username); 
                        break;
                case 'Upper': 
                    username = username.toUpperCase();
                    console.log(username); 
                        break;
            }                

        } else if (command === 'Reverse'){
            let start = Number(params[0]);
            let end = Number(params[1]);

            if (start < 0 || start >= username.length) continue; 
            if (end < 0 || end >= username.length) continue;

            let cut = username.slice(start,end + 1); //to include the 3rd one
            let reversed = cut.split('').reverse().join(''); 
            console.log(reversed);
               

        } else if (command === 'Substring'){
            let substring = params[0];

            if (username.includes(substring)){
                username = username.split(substring).join('');
                console.log(username);
            } else {
                console.log(`The username ${username} doesn't contain ${substring}.`);                
            }

        } else if (command === 'Replace'){
            let char = params[0];
            username = username.split(char).join('-');
            console.log(username);
            

        } else if (command === 'IsValid'){
            let char = params[0];

            if (username.includes(char)){
                console.log(`Valid username.`);                
            } else {
                console.log(`${char} must be contained in your username.`);                
            }            
        }
    }
}

//registration(['John', 'Letters Lower', 'Substring SA', 'IsValid @', 'Registration']);
registration(['ThisIsSoftUni', 'Reverse 1 3', 'Replace S', 'Substring hi', 'Registration']);