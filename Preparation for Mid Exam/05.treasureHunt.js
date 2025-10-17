function treasureHunt(input) { // try solving it with while loop and switch case
    let initialLoot = input.shift().split('|');

    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        
        if (line === 'Yohoho!') break;

        let [command, ...params] = line.split(' ');

        if (command === 'Loot') {
           
            for (let item of params) {
                if (!initialLoot.includes(item)) {
                    initialLoot.unshift(item);
                }
            }

        } else if (command === 'Drop') {
            
            let index = Number(params[0]);
            if (index < 0 || index >= initialLoot.length) continue;

            let removed = initialLoot.splice(index, 1)[0];
            initialLoot.push(removed);

        } else if (command === 'Steal') {

            let count = Number(params[0]);
            let stolen = initialLoot.splice(-count);
            console.log(stolen.join(', '));
        }
    }

    if (initialLoot.length === 0) {

        console.log("Failed treasure hunt.");

    } else {
        
        let sum = initialLoot.reduce((a, b) => a + b.length, 0);
        console.log(`Average treasure gain: ${(sum / initialLoot.length).toFixed(2)} pirate credits.`);
    }
}

treasureHunt([
    "Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"
]);
