function count(text, searchedWord) {
    text.replaceAll(',', ' ');
    text.replaceAll('.', ' ');
    text.replaceAll('!', ' ');
    text.replaceAll('?', ' ');
    text.replaceAll(':', ' ');
    text.replaceAll(';', ' ');

    let count = 0;

    let allWords = text.split(' ');

    for (let word of allWords){
        if (word === searchedWord){
            count++;
        }
    }
    console.log(count);
}

count('This is a word and it also is a sentence', 'is');