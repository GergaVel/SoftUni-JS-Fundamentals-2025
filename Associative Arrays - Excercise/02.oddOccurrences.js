function oddOccurences(str) {
    let wordOccurences = new Map();
    let words = str.toLowerCase().split(' '); //still while it is a string we lower the case 

    for (let word of words){
        if (wordOccurences.has(word)){
            // this won't work in a map -> wordOccurences[word];
            let currentOccurences = wordOccurences.get(word);
            wordOccurences.set(word, currentOccurences + 1);
        } else {
            wordOccurences.set(word, 1);
        }
    }

    let entries = Array.from(wordOccurences.entries()).filter(entry => entry[1] % 2 !== 0);
    let filteredWords = entries.map(entry => entry[0]);
    console.log(filteredWords.join(' ')); //instead of a for loop
}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');