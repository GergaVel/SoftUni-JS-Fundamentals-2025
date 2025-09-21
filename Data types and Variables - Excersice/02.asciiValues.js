function asciiValues (parameterOne, parameterTwo, parameterThree){
    console.log(`${parameterThree}${parameterTwo}${parameterOne}`);
    console.log(`${parameterThree.charCodeAt(0)} ${parameterTwo.charCodeAt(0)} ${parameterOne.charCodeAt(0)}`);
}

asciiValues('a', 'b', 'c');