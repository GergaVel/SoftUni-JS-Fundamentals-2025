function wordsTracker (arr){
    let wordOccurences = {};

    let wordsToTrack = arr.shift().split(' ');
    
    for (let word of wordsToTrack){ //sets all the words to 0
        wordOccurences[word] = 0;
    }

    for (let word of arr){
        if (word in wordOccurences){
            wordOccurences[word]++;
        } //no else, bc we don't care about other words
    }    

    let sorted = Object.entries(wordOccurences).sort((a, b) => b[1] - a[1]);

    for (let [word, qty] of sorted){
        console.log(`${word} - ${qty}`);        
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);

