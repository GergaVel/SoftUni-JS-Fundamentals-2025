function replaceRepeatingChars(str){
    let nonRepeatedChar = '';
    let previousChar = '';

    for (let currentChar of str){
        if (currentChar !== previousChar){
            nonRepeatedChar += currentChar;          
        }
        previousChar = currentChar;
    }
        console.log(nonRepeatedChar);
        
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');