/*function calculator(firstNumber, operator, secondNumber){
    if(operator === '+'){
        console.log((firstNumber + secondNumber).toFixed(2));        
    } else if (operator === '-'){
        console.log((firstNumber - secondNumber).toFixed(2));
    } else if (operator === '/'){
        console.log((firstNumber / secondNumber).toFixed(2));
    } else if (operator === '*'){
        console.log((firstNumber * secondNumber).toFixed(2));        
    } 

}

calculator(5, '+', 10);*/

function calculator(firstNumber, operator, secondNumber){
    let result = 0;
    if(operator === '+'){
        result = firstNumber + secondNumber;        
    } else if (operator === '-'){
        result = firstNumber - secondNumber;
    } else if (operator === '/'){
        result = firstNumber / secondNumber;
    } else if (operator === '*'){
        result = firstNumber * secondNumber;       
    } 

    console.log(result.toFixed(2));
}

calculator(5, '+', 10);