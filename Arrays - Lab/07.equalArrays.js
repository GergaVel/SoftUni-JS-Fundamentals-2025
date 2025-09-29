function equalArrays (arr1, arr2){
    let arraysAreEqual = true;
    let sum = 0;
    let diffIndex = -1;

    for(let i = 0; i < arr1.length && arr2.length; i++){
        let firstValue = arr1[i];
        let secondValue = arr2[i];

        if (firstValue === secondValue){
            sum += Number(firstValue);
        } else {
            arraysAreEqual = false;
            diffIndex = i;
            break;
        }
    }

    if (arraysAreEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);        
    } else {
        console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);        
    }
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'],['1','2','4','4','5']);