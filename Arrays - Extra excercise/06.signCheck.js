function signCheck(firstNumber, secondNumber, thirdNumber){
    let totalNegativeNumbers = 0;
    
    if (firstNumber < 0){
        totalNegativeNumbers++;
    }

    if (secondNumber < 0) {
        totalNegativeNumbers++;
    }

    if (thirdNumber < 0){
        totalNegativeNumbers++;
    }

    if (totalNegativeNumbers === 1 || totalNegativeNumbers === 3){
        return 'Negative';
    } else {
        return 'Positive';
    }
}

let result = signCheck (5, 12, -15);
console.log(result);

