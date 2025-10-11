function sorting (arr) {
 arr.sort((a,b) => a - b);

 let result = [];

 //because we take out 2 elements at the time, for loops are not going to help

    while(arr.length > 0){
        let smallestNum = arr.shift();
        let biggestNum = arr.pop();

            if (biggestNum){ //there might not be a biggestNum left, that's why we need to check
                result.push(biggestNum);
            } 

        result.push(smallestNum);
    }
    
    console.log(result.join(' '));   

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);