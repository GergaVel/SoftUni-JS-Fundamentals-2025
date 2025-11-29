function pirates(arr){
    let citiesData = {}; 

    //stage 1: target cities

    let command = arr.shift();

    while (command !== 'Sail'){
        let [city, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);

        if (city in citiesData){
            citiesData[city].population += population;
            citiesData[city].gold += gold;
        } else {
            citiesData[city] = {population, gold};
        }
        command = arr.shift();
    }

    // stage 2: attack
    command = arr.shift('');

    while (command !== 'End'){
        let [action, city, ...params] = command.split('=>'); 

        if (action === 'Plunder'){
            let people = Number(params[0]);
            let gold = Number(params[1]);

            citiesData[city].population -= people;
            citiesData[city].gold -= gold;

            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (citiesData[city].population ===0 || citiesData[city].gold === 0){
                console.log(`${city} has been wiped off the map!`);                    
                delete citiesData[city];    
            }
            
        } else if (action === 'Prosper'){
            let gold = Number(params[0]);

            if (gold < 0){
                console.log(`Gold added cannot be a negative number!`);
            } else {
                citiesData[city].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${citiesData[city].gold} gold.`);          
            }
        }

        command = arr.shift();
    }

    let entries = Object.entries(citiesData);

    if (entries.length > 0){
         console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);

            for (let [cityName, cityStats] of entries){
                console.log(`${cityName} -> Population: ${cityStats.population} citizens, Gold: ${cityStats.gold} kg`);
            }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!"); 
    }
}

pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);

