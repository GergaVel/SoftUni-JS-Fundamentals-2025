function substring(word, text) {
    text = text.toLowerCase(); //instead of new variable
        if (text.includes(word)){
            console.log(word);        
        } else {
            console.log(`${word} not found!`);        
        }    
}

substring('python','JavaScript is the best programming language')