function amazingNumbers(number){
    let numberAsString = String(number);
    let sum = 0;

    for(let i = 0; i < numberAsString.length; i++){
        let currentDigit = numberAsString[i];
        sum += Number(currentDigit);     
    }
    
    let sumToString = String(sum);
    let isAmazing = sumToString.includes('9');

    if (isAmazing){
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`);
    }    
}

amazingNumbers(1233);
amazingNumbers(999);
