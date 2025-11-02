function wordsTracker(arr) {
    let wordOccurences = {};

    let wordsToTrack = arr.shift().split(' ');
   
    for (let word of wordsToTrack){
        wordOccurences[word] = 0; //i get into the key and add value
    } 

    for (let word of arr){
        if (word in wordOccurences){ // .hasOwnProperty is also an option
            wordOccurences[word]++;
        }  //no else because we don't need the info
    }

    let sorted = Object.entries(wordOccurences).sort((a, b) => b[1] - a[1]);
    
    for(let [key, value] of sorted){
        console.log(`${key} - ${value}`);        
    }
    
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);