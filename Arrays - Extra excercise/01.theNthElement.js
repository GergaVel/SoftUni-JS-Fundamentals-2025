function theNthElement(arr){
    let step = Number(arr[arr.length - 1]);  // take last element as a number
    arr.pop();   // remove the last element since it's not part of the sequence
    
    let result = []; //always better to save new info in a new arr
    for(let i = 0; i < arr.length; i += step){
        result.push(arr[i]);
    }

    console.log(result.join(' '));
}

theNthElement(['5', '20', '31', '4', '20', '2']);
