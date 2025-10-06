function sumOddAndEven(num){ //from number to string to number
    let numAsString = String(num); 
    let sumEven = 0;
    let sumOdd = 0;

    for (let char of numAsString){
        let digit = Number(char);

        if (digit % 2 === 0){
            sumEven += digit;
        } else {
            sumOdd += digit;
        }
    }
    

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    
}

sumOddAndEven(1000435);

