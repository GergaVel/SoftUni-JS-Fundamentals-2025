//long version
function sumFisrtAndLast(arr){
    let first = arr[0];
    let last = arr[arr.length - 1];

    let firstNumber = Number(first);
    let lastNumber = Number(last);

    console.log(firstNumber + lastNumber);    
}

sumFisrtAndLast(['20', '30', '40']);

//shorter version

function sumFisrtAndLast(arr){
  arr = arr.map(Number) // changes the original arr into numbers. You can also save the new input into a let result = ...;

  let first = arr.shift(); // extracts 1st el
  let last = arr.pop(); // extracts last el

  console.log(first + last);
}

sumFisrtAndLast(['20', '30', '40']);