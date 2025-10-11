function processOddNums(arr){
    let result = arr
        .filter((number, index) => index % 2 === 1)
        .map(num => num * 2)
        .reverse();

        console.log(result.join(' '));      
}

processOddNums([10, 15, 20, 25]);