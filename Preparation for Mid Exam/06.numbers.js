function numbers(str) {
    let numbers = str.split(' ').map(Number).sort((a,b) => b -a);  //to sort them in descending order
    let sum = numbers.reduce((a,b) => a + b, 0); // to sum each of them
    let avarageNum = sum / numbers.length;
    let topNums = [];

    for (let i = 0; i < numbers.length; i++){
       let currentNum = numbers[i];
       
       if (currentNum > avarageNum){
            topNums.push(currentNum); //INSTEAD OF topNums += currentNum (it becomes a string!!)
       }

    }

    topNums = topNums.slice(0, 5);

    if (topNums.length === 0){
        console.log('No');

    } else {
        console.log(topNums.join(' '));
    }
    

}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');