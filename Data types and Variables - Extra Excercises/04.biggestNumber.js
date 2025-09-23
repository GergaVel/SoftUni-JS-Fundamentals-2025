function biggestNumber (a, b, c){

    let max = a;

    if (b > max) {
        max = b;
    } 
    
    if ( c > max){
        max = c;
    }

    console.log(max);
    
}

//biggestNumber(-2, 7, 3);
biggestNumber(130, 5, 99);