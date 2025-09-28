function substraction(arr) {
    let sumOdd = 0;
    let sumEven = 0;

    for (let number of arr) {
        number = Number(number);

        if (number % 2 === 0) {
            sumEven += number;
        } else {
            sumOdd += number;
        }
    }

    console.log(sumEven - sumOdd);
}


substraction([1, 2, 3, 4, 5, 6]);
