function emojiDetector(text) {
    let let emojiRegex = /(::|\*\*)([A-Z][a-z]{2,})\1/g;  

}

emojiDetector([
    "In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
]);


// again we need a count
//for loop of each letter = ascii 