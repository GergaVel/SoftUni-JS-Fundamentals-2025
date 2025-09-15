// My version
function login(input){

    let username = input[0];
    let reversed = username.split('').reverse().join('');

        
    let index = 1; 
    let command = input[index]
   
    let failsCount = 0;

while(command !== reversed) {
    let currentAttempt = command;
    
    failsCount++;

    if (failsCount === 4){
      console.log(`User ${username} blocked!`);
        break;
}

console.log(`Incorrect password. Try again.`);
    
  
index++;
command = input[index];
    
}

if (command === reversed){
    console.log(`User ${username} logged in.`);    
}


}

login(['Acer', 'login', 'go', 'let me in', 'recA']);

