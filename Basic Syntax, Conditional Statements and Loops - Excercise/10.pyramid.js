function pyramid(base, increment) {
    let stepsMade = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    for (let i = base; i > 0; i -= 2) {
        stepsMade++;

        // If we're at the very top -> gold only
        if (i === 1 || i === 2) {
            gold += (i * i) * increment;
            break; // stop here, pyramid is finished
        }

        // Core stone
        stone += ((i - 2) * (i - 2)) * increment;

        // Outer layer: marble or lapis
        if (stepsMade % 5 === 0) {
            lapis += ((i * 4) - 4) * increment;
        } else {
            marble += ((i * 4) - 4) * increment;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(stepsMade * increment)}`);
}

pyramid(11, 0.75);
