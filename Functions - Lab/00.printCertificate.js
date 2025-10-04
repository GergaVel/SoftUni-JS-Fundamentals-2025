function printCertificate (grade, names){
    // if grade < 3 
    // function Header
    // function names
    // function grades


    if (grade < 3){
        console.log(`Student does not qualify`);
        return; // we don't need to go further        
    }

    printHeader();
    printName(names);
    printGrade(grade);

    function printHeader(){
        console.log('~~~- {@} -~~~');
        console.log('~- Certificate -~');
        console.log('~~~- ~---~ -~~~');        
    }

    function printName(names){
        console.log(`${names[0]} ${names[1]}`);        
    }

    function printGrade(grade) {
    if (grade < 3.00){
        console.log(`Fail (2)`);        
    } else if ( grade >= 3.00 && grade < 3.50){
        console.log(`Poor (${grade.toFixed(2)})`);        
    }else if (grade >= 3.50 && grade < 4.50){
        console.log(`Good (${grade.toFixed(2)})`);        
    } else if (grade >= 4.50 && grade < 5.50){
        console.log(`Very good (${grade.toFixed(2)})`);        
    } else if (grade >= 5.50) {
        console.log(`Excellent (${grade.toFixed(2)})`);        
    }
}

}

printCertificate(5.25, ['Peter', 'Carter'])