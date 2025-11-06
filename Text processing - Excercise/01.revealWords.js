function revealWords(wordsStr, text){
   let wordsToFill = wordsStr.split(', ');

        for (let word of wordsToFill){
            let starsCount = '*'.repeat(word.length);
            text = text.replace(starsCount, word);
        }
               
    console.log(text);        
}

revealWords('great', 
    'softuni is ***** place for learning new programming languages'
);