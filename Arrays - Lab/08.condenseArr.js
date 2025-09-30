function condenseArr(numbers){

    if (numbers.length === 1){
        console.log((numbers[0]));
        return;         // do I even have to loop? If not, return and stop the program/don't go further
    }        
        
        let result = [];

    while(true){ //because I don't know how many times will I be looping

            for (let i = 0; i < numbers.length -1; i++){  // -1 because I don't need the last element
                let firstValue = numbers[i]; //current element
                let secondValue = numbers[i + 1]; // next element

                let sum = firstValue + secondValue;
               
                result.push(sum); //add the result
            }

            if (result.length === 1){
                 break; // because I need to give a condition when to stop the infinite loop
            }

            numbers = result; //to rewrite on the arr numbers and start looping again
            result = [];
    }

    console.log(result[0]); //I loop till I have just one element and print it
}

condenseArr([2,10,3]);