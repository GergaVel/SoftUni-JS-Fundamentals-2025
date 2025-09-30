function mergeArrays(arr1, arr2) {
   let newArr = [];
    for(let i = 0; i < arr1.length; i++){
        if(i % 2 === 0){
            newArr[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            let concat1 = arr1[i];
            let concat2 = arr2[i];
            newArr[i] = concat1 + concat2;
        }       
    }    
      console.log(newArr.join(' - '));}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])