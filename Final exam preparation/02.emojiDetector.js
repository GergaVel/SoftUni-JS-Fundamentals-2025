function emojiDetector(text) {
    let pattern = /(::|\*\*)(?<word>[A-Z][a-z]{2,})\1/g;  
    let str = text.shift();

    let digits = str.match(/\d/g); //to search all digits --> gives back a arr
    let coolTreshhold = digits
                        .map(Number)
                        .reduce((a,b) => a * b, 1);

    console.log(`Cool threshold: ${coolTreshhold}`);
    
    let matches = Array.from(str.matchAll(pattern));
    console.log(`${matches.length} emojis found in the text. The cool ones are:`);
    

    for (let match of matches) {
        let emojiWord = match.groups.word;       
        let coolness = 0;

        for (let symbol of emojiWord){
            let ascii = symbol.charCodeAt();
            coolness += ascii;
        } 

        if (coolness >= coolTreshhold){
        console.log(match[0]);       
    }
    }   
}

emojiDetector([
    "In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
]);


// again we need a count
//for loop of each letter = ascii 