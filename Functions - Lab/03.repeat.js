function repeat (value, count){
    let result = " ";
    for (let i = 0; i < count; i++){
        result += value;
    }
    
    return result;

}

let result = repeat("abc", 3);

console.log(result);