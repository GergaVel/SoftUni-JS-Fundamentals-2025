function smallestTwoNumbers (arr){
    let sorted = arr.sort((a,b) => a - b); //first sorts out the whole arr
    let firstTwo = sorted.slice(0,2); // chop's/ makes a copy of only the first 2

    console.log(firstTwo.join(' '));
    
    
}

smallestTwoNumbers([30, 15, 50, 5]);