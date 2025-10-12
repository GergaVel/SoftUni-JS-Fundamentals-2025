function bombNumbers(nums, bomb) {
   
    let bombNumber = Number(bomb.shift());     
    let bombPower = Number(bomb.shift()); 
    
    while (nums.includes(bombNumber)) { //loop until no bomb is left
        let index = nums.indexOf(bombNumber); //finds the first bomb (in this case (2))
        let start = Math.max(0, index - bombPower); // never returns a negative num. If the bomb is too close to the start it doesn't allow a negative num
        let deleteCount = bombPower * 2 + 1;

        nums.splice(start, deleteCount);
    }
    let sum = 0;

    for (let i = 0; i < nums.length; i++){
        let currentNumber = Number(nums[i]);
        sum += currentNumber;
    }

    console.log(sum);  

}

bombNumbers(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);