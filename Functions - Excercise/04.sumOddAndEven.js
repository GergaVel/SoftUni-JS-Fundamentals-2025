function sumOddAndEven(num){ //from number to string in an array to number
    let arrOfNum = num.toString().split(''); 
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arrOfNum.length; i++){
        let currentNumber = Number(arrOfNum[i]);
        if (currentNumber % 2 === 0){
            sumEven += currentNumber;
        } else {
            sumOdd += currentNumber
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    
}

sumOddAndEven(1000435);

