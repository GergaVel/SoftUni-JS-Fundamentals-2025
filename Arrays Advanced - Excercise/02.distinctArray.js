function distinctArr (arr){
    let result = [];

    for (let num of arr){
        if (!result.includes(num)){ //it has to return true.if current number is not included in the original arr, please add it to the new arr
            result.push(num);
        }
    }
    console.log(result.join(' '));
    
}

distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);