function addAndSubstract(num1, num2, num3){
    function sum(a, b){ //no need to  use the same names
        return a + b;
    }

    function subtract(a, b){
        return a - b;
    }

    let initialSum = sum(num1, num2); //to safe returned value from the first function (sum())
    let result = subtract(initialSum, num3);
    console.log(result);
}

addAndSubstract(23, 6, 10);