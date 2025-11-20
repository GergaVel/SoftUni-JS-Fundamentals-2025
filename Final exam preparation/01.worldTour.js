function worldTour(input) {
    let destinations = input.shift();

    for (let line of input) {
        let [command, ...params] = line.split(':');

        if (command === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${destinations}`);
            break;
        }

        if (command === 'Add Stop') {
            let index = Number(params[0]);
            let string = params[1];

            if (index >= 0 && index < destinations.length) {
                destinations =
                    destinations.substring(0, index) +
                    string +
                    destinations.substring(index);
            }

            console.log(destinations);   // ← always prints

        } else if (command === 'Remove Stop') {
            let startIdx = Number(params[0]);
            let endIdx = Number(params[1]);

            if (startIdx >= 0 &&
                endIdx >= 0 &&
                startIdx < destinations.length &&
                endIdx < destinations.length &&
                startIdx <= endIdx) {

                destinations =
                    destinations.substring(0, startIdx) +
                    destinations.substring(endIdx + 1);
            }

            console.log(destinations);  // ← always prints

        } else if (command === 'Switch') {
            let oldString = params[0];
            let newString = params[1];

            if (destinations.includes(oldString)) {
                destinations = destinations.split(oldString).join(newString);
            }

            console.log(destinations);  // ← always prints
        }
    }
}


worldTour(['Hawai::Cyprys-Greece', 
    'Add Stop:7:Rome', 
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);


// version with a side function to help check if an eindex is valid
function worldTour(input) {
    let destinations = input.shift();

    const isValid = (i) => i >= 0 && i < destinations.length;

    for (let line of input) {
        let [command, ...params] = line.split(':');

        if (command === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${destinations}`);
            break;
        } 
        
        if (command === 'Add Stop') {
            let index = Number(params[0]);
            let str = params[1];

            if (isValid(index)) {
                destinations =
                    destinations.slice(0, index) +
                    str +
                    destinations.slice(index);
            }

            console.log(destinations);
        } 
        
        else if (command === 'Remove Stop') {
            let start = Number(params[0]);
            let end = Number(params[1]);

            if (isValid(start) && isValid(end)) {
                destinations =
                    destinations.slice(0, start) +
                    destinations.slice(end + 1);
            }

            console.log(destinations);
        } 
        
        else if (command === 'Switch') {
            let oldStr = params[0];
            let newStr = params[1];

            destinations = destinations.split(oldStr).join(newStr);

            console.log(destinations);
        }
    }
}

worldTour(['Hawai::Cyprys-Greece', 
    'Add Stop:7:Rome', 
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);
