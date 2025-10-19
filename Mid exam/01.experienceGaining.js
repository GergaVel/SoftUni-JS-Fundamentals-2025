function experienceGaining(arr) {

    let experienceNeeded = arr.shift();
    let battlesCount = arr.shift();
    let totalExperience = 0;

    for (let i = 0; i < battlesCount; i++){
        let currentBattle = i + 1;
        let gaindedExperience = arr[i];

        if (currentBattle % 3 === 0){
            gaindedExperience *= 1.15;
        }

        if (currentBattle % 5 === 0){
            gaindedExperience *= 0.90;
        }

        if (currentBattle % 15 === 0){
            gaindedExperience *=  1.05;
        }

        totalExperience += gaindedExperience;

        if (totalExperience >= experienceNeeded){
            console.log(`Player successfully collected his needed experience for ${currentBattle} battles.`);   
            return;  
        }      
    }

    let differance = experienceNeeded - totalExperience;
    console.log(`Player was not able to collect the needed experience, ${differance.toFixed(2)} more needed.`);
}

experienceGaining([500, 5, 50, 100, 200, 100, 20]);