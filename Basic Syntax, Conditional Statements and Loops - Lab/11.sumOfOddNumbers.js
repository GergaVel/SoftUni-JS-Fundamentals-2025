function sumOfOddNumbers (n) {

    let printedNumbers = 1;
    let currentNumber = 1;
    let sum = 0;

    while (printedNumbers <= n) {
        console.log(currentNumber);       
        sum += currentNumber;        
        printedNumbers++;
        currentNumber +=2;

    }
     console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
//sumOfOddNumbers(3);


