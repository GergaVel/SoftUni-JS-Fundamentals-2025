function maxNumber(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) { 
        let currentNum = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] >= currentNum) {
                isTop = false;
                break;
            }
        }

        if (isTop) {
            result.push(currentNum);
        }
    }

    console.log(result.join(' '));
}

maxNumber([1, 4, 3, 2]); // prints "4 3 2"
