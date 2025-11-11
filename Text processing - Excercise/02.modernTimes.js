function modernTimes(text) {
    let hashtags = text
        .split(' ')
        .filter(word => word.startsWith('#') && word.length > 1);

    for (let hashtag of hashtags){
        hashtag = hashtag.substring(1); //take everything starting from idx1
        let pattern = /[]/
        
    }
        
    
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')