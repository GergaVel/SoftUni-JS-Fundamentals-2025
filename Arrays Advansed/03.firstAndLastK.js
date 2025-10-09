function firstAndLastK(input){
    //let k = input[0];
    //input = input.slice(1);

    let k = input.shift();
    
    let firstNumbers = input.slice(0, k);
    let lastNumbers = input.slice(input.length - k);

    console.log(firstNumbers.join(' '));
    console.log(lastNumbers.join(' '));    
}

firstAndLastK([2,7,8,9]);
firstAndLastK([3,6,7,8,9]);