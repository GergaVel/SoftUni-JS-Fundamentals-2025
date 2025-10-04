function ladybugs(arr) {
    let fieldSize = arr[0];
    let ladybugIdxs = arr[1].split(' ').map(Number);

    // create the field
    let field = Array(fieldSize).fill(0);
    for (let i = 0; i < fieldSize; i++) {
        if (ladybugIdxs.includes(i)) {
            field[i] = 1;
        }
    }

    for (let j = 2; j < arr.length; j++) {
        let tokens = arr[j].split(' ');
        let bugIndex = Number(tokens[0]); // ✅ singular
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        if (bugIndex < 0 || bugIndex >= field.length) continue; // invalid index
        if (field[bugIndex] === 0) continue; // no ladybug there

        field[bugIndex] = 0; // lift off

        if (direction === 'left') {
            let newIdx = bugIndex - flyLength;
            while (newIdx >= 0 && field[newIdx] === 1) {
                newIdx -= flyLength;
            }
            if (newIdx >= 0) {
                field[newIdx] = 1;
            }
        } else {
            let newIdx = bugIndex + flyLength;
            while (newIdx < field.length && field[newIdx] === 1) {
                newIdx += flyLength;
            }
            if (newIdx < field.length) {
                field[newIdx] = 1;
            }
        }
    }

    console.log(field.join(' '));
}
