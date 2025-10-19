function phoneShop(arr) {
    let list = arr.shift().split(', ');

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i];

        if (line === 'End') break;

    
        let tokens = line.split(' - ');
        let command = tokens[0];
        let parameter = tokens[1];

        if (command === 'Add') {
            if (!list.includes(parameter)) {
                list.push(parameter);
            }

        } else if (command === 'Remove') {
            let index = list.indexOf(parameter);
            if (index !== -1) {
                list.splice(index, 1);
            }

        } else if (command === 'Bonus phone') {
            let [oldPhone, newPhone] = parameter.split(':');
            let index = list.indexOf(oldPhone);
            if (index !== -1) {
                list.splice(index + 1, 0, newPhone);
            }

        } else if (command === 'Last') {
            let index = list.indexOf(parameter);
            if (index !== -1) {
                list.splice(index, 1);
                list.push(parameter);
            }
        }
    }

    console.log(list.join(', '));
}

// Example test
phoneShop([
    'SamsungA50, MotorolaG5, HuaweiP10',
    'Last - SamsungA50',
    'Add - MotorolaG5',
    'End'
]);
