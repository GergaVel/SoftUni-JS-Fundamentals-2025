function carWash(arr){
    let cleanValue = 0;

    function applyCommand(command) {
        if (command === 'soap'){
            cleanValue += 10;
        } else if (command === 'water'){
            cleanValue *= 1.20;
        } else if (command === 'vacuum cleaner'){
            cleanValue *= 1.25;
        } else if (command === 'mud'){
            cleanValue *= 0.90;
        }
    }

    for (command of arr){
        applyCommand(command);
    }

    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water'])