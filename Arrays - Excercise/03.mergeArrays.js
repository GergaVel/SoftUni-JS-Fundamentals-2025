function mergeArrays(arr1, arr2) {
   let newArr = [];
    for(let i = 0; i < arr1.length; i++){
        if(i % 2 === 0){
            newArr[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            let el1 = arr1[i];
            let el2 = arr2[i];
            newArr[i] = el1 + el2;
        }       
    }    
      console.log(newArr.join(' - '));}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])