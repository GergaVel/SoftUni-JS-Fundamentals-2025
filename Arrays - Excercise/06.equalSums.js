function equalSum (arr){
   

    for(i = 0; i < arr.length; i++){
        let sumToLeft = 0;
        let sumToRight = 0;

        for (let j = 0; j < i; j++){ //elements to the left
            sumToLeft += arr[j];
        }

        for (let j = i + 1; j < arr.length; j++){ //elements to the right.
            sumToRight += arr[j];
        }

        if (sumToLeft === sumToRight){
            console.log(i);
            return;
        }
    } 
        console.log('no'); // in case we did not find any match
}

equalSum([1,2,3,3]);