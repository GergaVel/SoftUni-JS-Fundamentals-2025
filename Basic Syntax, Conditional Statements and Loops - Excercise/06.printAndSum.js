/*function printAndSum (start,end) {
    let allNumbersString = "";
    let printedNumbers = start;
    let currentNumber = start;
    let sum = 0;

    while (printedNumbers <= end){
        allNumbersString += currentNumber + " ";
        sum += currentNumber;
        printedNumbers++;
        currentNumber++
    }
    console.log(allNumbersString);
    console.log(`Sum: ${sum}`);
}

printAndSum(50,60)*/

function printAndSum (start,end){
    let allNumbersString = "";
    let sum = 0;

    for(let i = start; i <= end; i++) {
        allNumbersString += i + " ";
        sum += i;
    }
    console.log(allNumbersString);
    console.log(`Sum: ${sum}`);
}

printAndSum(50,60)