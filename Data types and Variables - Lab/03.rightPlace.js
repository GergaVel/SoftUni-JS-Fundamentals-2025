function rightPlace(word, char, matchingWord){
    let result = word.replace('_',char);

    if(result === matchingWord){
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);        
    }
}

rightPlace('Str_ng', 'I', 'Strong');