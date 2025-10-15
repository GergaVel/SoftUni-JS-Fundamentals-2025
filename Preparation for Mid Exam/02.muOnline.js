function muOnline(str){
    let health = 100;
    let bitcoins = 0;
    let bestRoom = 1;

    let rooms = str.split('|'); 

    for (let room of  rooms){ 
        let partsOfRoom = room.split(' '); 
        let command = partsOfRoom[0];
        let value = Number(partsOfRoom[1]); 

        if (command === 'potion'){
            let healthToAdd = value; 

            if (health + healthToAdd > 100){
                healthToAdd = 100 - health; 
            } //let healed = Math.min(100 - health, healthToAdd);

            health += healthToAdd;
            console.log(`You healed for ${healthToAdd} hp.`);
            console.log(`Current health: ${health} hp.`);          
        } else if (command === 'chest') {
            let bitcoinsFound = value; 
            bitcoins += bitcoinsFound;
            console.log(`You found ${bitcoinsFound} bitcoins.`);
        } else {
            let monster = command;
            let attack = value;

            health -= attack;
            
            if (health > 0){
                console.log(`You slayed ${monster}.`);                
            } else {
                console.log(`You died! Killed by ${monster}.`);     
                console.log(`Best room: ${bestRoom}`); //i + 1 - is also working well! like this you don't need a bestRoom counter
                break;      //or return;                        
            }
        }

        bestRoom++;
    }   

    if (health > 0){
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`)
    }
}


muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
