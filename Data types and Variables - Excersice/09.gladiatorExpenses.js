function gladiator(lostFights, priceHelmet, priceSword, priceShield, priceArmor) {
    let countHelmets = 0;
    let countSwords = 0;
    let countShields = 0;
    let countArmors = 0;

    for (let fight = 1; fight <= lostFights; fight++) {
        let brokenHelmets = false;
        let brokenSwords = false;

        if (fight % 2 === 0) {
            countHelmets++;
            brokenHelmets = true;
        }

        if (fight % 3 === 0) {
            countSwords++;
            brokenSwords = true;
        }

        if (brokenHelmets && brokenSwords) {
            countShields++;
            if (countShields % 2 === 0) {
                countArmors++;
            }
        }

    }

    let totalCost = (countHelmets * priceHelmet) + (countSwords * priceSword) +
        (countShields * priceShield) + (countArmors * priceArmor);

    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}

gladiator(7, 2, 3, 4, 5);