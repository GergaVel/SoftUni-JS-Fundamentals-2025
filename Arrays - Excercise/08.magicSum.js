function magicSum(arr, n){
    let firstNumber = 0;
    let secondNumber = 0;
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
         firstNumber = arr[i];

            for(let j = i + 1; j < arr.length; j++){
                secondNumber = arr[j];

                sum = firstNumber + secondNumber;

                if (sum === n){
                    console.log(`${firstNumber} ${secondNumber}`);
                }
            }
    }
}

magicSum([1, 7, 6, 2, 19, 23],8)


