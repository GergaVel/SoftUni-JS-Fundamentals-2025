function censoredText(sentance, word){
    
    let replacement = '*'.repeat(word.length);
    let result = sentance.replaceAll(word, replacement);

    console.log(result);
    
}

censoredText('A small sentence with some words','small')