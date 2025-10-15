function manOWar(input) {
    let pirateShip = input.shift().split('>').map(Number); 
    let warShip = input.shift().split('>').map(Number); 
    let maxHealth = Number(input.shift());

    for (let i = 0; i < input.length; i++){
        let line = input[i];

        if (line === 'Retire') break; //short way to write it.

        let [command, ...params] = line.split(' '); // ...params is because we don;t know how many other things will follow

        if (command === 'Fire'){
            let [index, damage] = params.map(Number);

            if (index >= 0 && index < warShip.length){ //to check if the index exists and if it fits the attacked ship
                warShip[index] -= damage; 
                
                if (warShip[index] <= 0){
                    console.log("You won! The enemy ship has sunken.");
                    return; //because there is a winner                  
                }
            }

        } else if (command === 'Defend'){
            let[startIndex, endIndex, damage] = params.map(Number);

            if (startIndex >= 0 && endIndex < pirateShip.length && startIndex <= endIndex){
                
                for (let j = startIndex; j <= endIndex; j++){
                        pirateShip[j] -= damage; 
                           
                            if (pirateShip[j] <= 0){
                                console.log("You lost! The pirate ship has sunken.");
                                return;
                            }                   
                }
            }

            

        } else if (command === 'Repair'){
            let [index, health] = params.map(Number);

            if (index >= 0 && index < pirateShip.length){
                pirateShip[index] = Math.min(pirateShip[index] + health, maxHealth);                
            }


        } else if (command === 'Status'){
            let count = pirateShip.filter(x => x < maxHealth * 0.2).length; //or for loop long version
                console.log(`${count} sections need repair.`);       
        }
    }
   
    let pirateShipSum = pirateShip.reduce((a,b) => a + b, 0);  //otherwise you need a for loop!
    let warShipSum = warShip.reduce((a,b) => a + b, 0);  //cool way to sum a = 0, b = [...] => a + b (like a loop)
    
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
    
    }       


manOWar((["12>13>11>20>66",
         "12>22>33>44>55>32>18", 
         "70", 
         "Fire 2 11", 
         "Fire 8 100", 
         "Defend 3 6 11", 
         "Defend 0 3 5", 
         "Repair 1 33", 
         "Status", 
         "Retire"]));

/* 

3. now I need sthh to loop the rest of the input - while (command === "Retire"), so do I do the let command =? or is there a better way with let [...,...]; ?? command should be [0]!
4. in the loop: we need to separate the numbers from the commands maybe with tokens?
*/
