function buildAWall(input) {
    let sections = input.map(Number);  
    let dailyConcrete = [];

    let finalHeight = 30;
    let concretePerFoot = 195;
    let pricePerYard = 1900;

    while (true) {
        let concreteToday = 0;
        let allDone = true;

        for (let i = 0; i < sections.length; i++) {
            if (sections[i] < finalHeight) {
                sections[i]++;                   // grow +1 foot today
                concreteToday += concretePerFoot;
                allDone = false;                 // at least one section still working 
            } //basically in the beginning of the loop allDone = true; stays true when all sections are complete. We never reach the false part and it jumps to if(true)...
        }

        if (allDone) {
            break;   // stop looping when everyone reached 30
        }

        dailyConcrete.push(concreteToday);
    }

    console.log(dailyConcrete.join(', '));

    let totalConcrete = dailyConcrete.reduce((a, b) => a + b, 0);
    let totalCost = totalConcrete * pricePerYard;

    console.log(totalCost + ' pesos');
}


buildAWall([21, 25, 28]);