function matchFullName(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g; //the \b makes sure threre is anything else before the word but a letter!
    let result = input.matchAll(pattern);

    let output = [];

    for (let match of result){
        output.push(match[0]);
    }
    console.log(output.join(' '));
    
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");