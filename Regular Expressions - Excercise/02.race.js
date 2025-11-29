function race(arr) {
    let racers = arr.shift().split(", ");
    let results = {};

    for (let racer of racers) {
        results[racer] = 0;
    }

    let command = arr.shift();

    while (command !== 'end of race') {

        let letters = command.match(/[A-Za-z]/g);
        let name = "";

        let i = 0;
        while (letters && i < letters.length) {
            name += letters[i];
            i++;
        }

        let digits = command.match(/\d/g);
        let distance = 0;

        let j = 0;
        while (digits && j < digits.length) {
            distance += Number(digits[j]);
            j++;
        }

        let k = 0;
        while (k < racers.length) {
            if (racers[k] === name) {
                results[name] += distance;
                break;
            }
            k++;
        }

        command = arr.shift();
    }

    let sorted = Object.entries(results)
        .sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'
]);