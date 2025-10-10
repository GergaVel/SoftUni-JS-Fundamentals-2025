function negativeORPositive(arr){
    arr = arr.map(Number);

    let result = [];

    for (let number of arr){
        if (number < 0){
            result.unshift(number);
        } else {
            result.push(number);
        }
    }

    for (let number of result){ // or you can use console.log(result.join('\n')); to print on new row instead of for loop 
        console.log(number);        
    }
}

negativeORPositive(['7', '-2', '8', '9']);