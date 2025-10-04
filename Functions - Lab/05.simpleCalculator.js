  function calculate(numOne, numTwo,operator){
    let operation;

    if (operator === 'multiply'){
        operation = (x, y) => x * y;
    } else if (operator === 'divide'){
        operation = (x, y) => x / y;
    } else if (operator === 'add'){
        operation = (x, y) => x + y;
    } else if (operator === 'subtract'){
        operation = (x, y) => x - y;
    }

    return operation(numOne, numTwo);
  }

  let result = calculate(5,5, 'multiply');
  console.log(result);
  