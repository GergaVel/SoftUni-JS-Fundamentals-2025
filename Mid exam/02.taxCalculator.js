function taxCalculator(arr) {

    let familyStartingTax = 50;
    let heavyDutyStartingTax = 80;
    let sportsStartingTax = 100;

    let totalTaxes = 0;

    
    arr = arr[0].split('>>');

    for (let i = 0; i < arr.length; i++) {
        let line = arr[i];

        let [typeOfCar, yearsOfUse, kmDriven] = line.split(' ');
        yearsOfUse = Number(yearsOfUse);
        kmDriven = Number(kmDriven);

        let tax = 0; 

        switch (typeOfCar) {
            case 'family':              
                tax = familyStartingTax - yearsOfUse * 5;
                tax += Math.floor(kmDriven / 3000) * 12;
                break;

            case 'heavyDuty':                
                tax = heavyDutyStartingTax - yearsOfUse * 8;
                tax += Math.floor(kmDriven / 9000) * 14;
                break;

            case 'sports':                
                tax = sportsStartingTax - yearsOfUse * 9;
                tax += Math.floor(kmDriven / 2000) * 18;
                break;

            default:
                console.log('Invalid car type.');
                continue; 
        }

        console.log(`A ${typeOfCar} car will pay ${tax.toFixed(2)} euros in taxes.`);
        totalTaxes += tax;
    }

    console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`);
}


taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);
