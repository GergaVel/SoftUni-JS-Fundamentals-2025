/*function reversedString(word) {
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    console.log(reversedWord);
}

reversedString('Information'); */

//Shorter version:

function reversedString (word){
    let chars = word.split("");
    chars.reverse()
    let reversedWord = chars.join("");
    console.log(reversedWord);

}

reversedString('Information');

//Even shorter: let reversedWord = word.split("").reverse().join("");