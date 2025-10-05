function charInRange(char1, char2){
    let code1 = char1.charCodeAt(); // to take the ascii number
    let code2 = char2.charCodeAt();

    let minCode = Math.min(code1, code2); // checks the 2 codes and choses the smallest
    let maxCode = Math.max(code1,code2); 

    let result = [];

    for (let currentCode = minCode + 1; currentCode < maxCode; currentCode++){
        let currentChar = String.fromCharCode(currentCode); // to convert back to char
        result.push(currentChar);
    }

    console.log(result.join(' '));
    
}

charInRange('a','d');