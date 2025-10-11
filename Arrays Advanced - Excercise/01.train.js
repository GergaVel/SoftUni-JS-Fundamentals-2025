function train(input) {
    let wagons = input
        .shift()
        .split(' ')
        .map(Number);

    let maxCapacity = Number(input.shift());

    for (let command of input) {
        let tokens = command.split(' ');

        if (tokens[0] === 'Add') {
            // Add new wagon at the end
            let newWagon = Number(tokens[1]);
            wagons.push(newWagon);
        } else {
            // Try to fit passengers into existing wagons
            let passengersToAdd = Number(tokens[0]);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passengersToAdd <= maxCapacity) {
                    wagons[i] += passengersToAdd;
                    break; // stop once they fit
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);
