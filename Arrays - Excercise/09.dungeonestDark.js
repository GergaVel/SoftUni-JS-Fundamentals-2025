function dungeonestDark(str){
    let health = 100;
    let coins = 0;
    let bestRoom = 1;

    //since we have a string as input, we need to turn it into an arr (oposite of join(' '))
    let rooms = str.split('|'); // so you give from where to split actually. In this case | because the rooms are being separated by |
                                //['rat 10', 'bat 20', 'potion 10', 'rat 10', 'chest 100', 'boss 70', 'chest 1000']

    for (let room of  rooms){ //room by room 
        let partsOfRoom = room.split(' '); // partsOfRoom becomes another array part 1:command, 2:value
        let command = partsOfRoom[0];
        let value = Number(partsOfRoom[1]); // a bit vague but we will see only later what this number might mean

        if (command === 'potion'){
            let healthToAdd = value; // here we know what happens and we add it to a new variable
          
            if (health + healthToAdd > 100){
                healthToAdd = 100 - health; //to not let it exceed 100
            }

            health += healthToAdd;
            console.log(`You healed for ${healthToAdd} hp.`);
            console.log(`Current health: ${health} hp.`);          
        } else if (command === 'chest') {
            let coinsFound = value; // actually we are kinda 'renaming' the value variable
            coins += coinsFound;
            console.log(`You found ${coinsFound} coins.`);
        } else {
            let monster = command;
            let attack = value;

            health -= attack;
            
            if (health > 0){
                console.log(`You slayed ${monster}.`);                
            } else {
                console.log(`You died! Killed by ${monster}.`);     
                console.log(`Best room: ${bestRoom}`);
                break;                           
            }
        }

        bestRoom++;
    }   

    if (health > 0){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`)
    }
}


dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
