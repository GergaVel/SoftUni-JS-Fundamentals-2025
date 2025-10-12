function searchANum (arr1, arr2) {
    // let toTakeOut = arr2.shift();
    // let toDelete= arr2.shift();
    // let toFind = arr2.shift();
    // ==> easier way to destruct an arr:
    let [toTakeOut, toDelete, toFind] = arr2; //that's so cool!!

   // let count = 0;    
    
    let slicedArr = arr1.splice(0, toTakeOut); // makes a copy
    slicedArr.splice(0,toDelete); // deletes

    // for (let num of slicedArr){
    //     if (num === toFind){
    //         count++;
    //     }
    // }
    // easier, cooler way:
    let fiteredArr = slicedArr.filter(el => el === toFind);
    console.log(`Number ${toFind} occurs ${fiteredArr.length} times.`);    
}

searchANum([5, 2, 3, 4, 1, 6], [5, 2, 3]); 


// shorter, cooler version:

function searchANum (arr1, arr2) {
    
    let [toTakeOut, toDelete, toFind] = arr2; 
    
    let slicedArr = arr1.splice(0, toTakeOut);
    slicedArr.splice(0,toDelete);

  
    let fiteredArr = slicedArr.filter(el => el === toFind);
    console.log(`Number ${toFind} occurs ${fiteredArr.length} times.`);    
}

searchANum([5, 2, 3, 4, 1, 6], [5, 2, 3]); 

