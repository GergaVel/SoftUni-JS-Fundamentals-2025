function lastKNumbers(n, k){//k = previous elements, n = length of arr
    let result = [1]; //starts from  the number 1 (given in the description)

    for (let i = 1; i < n; i++){ 
        let startIndex = i - k; // i = 1 (the index 1)

        if (startIndex < 0){
            startIndex = 0; //should not go out of the arr
        }

        let previousThreeNumbers = result.slice(startIndex, i); //save the cutted out elements to a new arr with beginning and and end(i not included not tot en met, alleen tot)

        let sum = 0; //restarts the sum

        for (let number of previousThreeNumbers){
            sum += number;     //depends on how many elements there are in the arr  , everytime is growing     
        }

        result[i] = sum;     //rewrites / adds the result 
        
    }

    console.log((result.join(' ')));
    
}

lastKNumbers(6,3);