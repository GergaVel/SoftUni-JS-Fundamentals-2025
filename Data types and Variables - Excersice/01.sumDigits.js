function sumDigits (number){
    let numberAsString = String(number);
    let sum = 0;

    for(let i = 0; i < numberAsString.length; i++){
        let currentDigit = Number(numberAsString[i]);
        sum += currentDigit;
    }

    console.log(sum);
}

sumDigits(245678);