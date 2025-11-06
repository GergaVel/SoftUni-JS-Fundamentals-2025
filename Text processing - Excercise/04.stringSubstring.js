function substring(word, text) {
    text = text.toLowerCase().split(' '); //instead of new variable
        if (text.includes(word)){
            console.log(word);        
        } else {
            console.log(`${word} not found!`);        
        }    
}

//without turning text into an array, we can get error: example with java and javascript. It makes javascrip a single word

substring('python','JavaScript is the best programming language')