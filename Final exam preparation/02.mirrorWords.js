function mirrorWords (input) {
    let pattern = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;

    let match;
    let validPairsCount = 0;
    let mirrorPairs = [];

    while ((match = pattern.exec(input)) !== null) {
        validPairsCount++;

        let wordOne = match[2];
        let wordTwo = match[3];

        // reverse wordTwo
        let reversedWordTwo = wordTwo.split('').reverse().join(''); //bc .reverse won't wokr on a string
        if (wordOne === reversedWordTwo) {
            mirrorPairs.push(`${wordOne} <=> ${wordTwo}`);
        }
    }

    // Output for valid pairs
    if (validPairsCount === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${validPairsCount} word pairs found!`);
    }

    // Output for mirror words
    if (mirrorPairs.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorPairs.join(', '));
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
