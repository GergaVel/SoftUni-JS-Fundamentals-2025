function passwordValidator(password){

    let isCorrectLength = checkIsCorrectLength();
    let isAlphanumeric = checkIsAlphanumeric();
    let has2Digits = checkHas2Digits();

    if (isCorrectLength && isAlphanumeric && has2Digits){
        console.log("Password is valid");
        
    }

    function checkIsCorrectLength(){ //you can leave () empty becasue this function has access to the parameters
        if (password.length >= 6 && password.length <=10){
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");            
            return false;
        }
    }

    function checkIsAlphanumeric(){ // a bit more complicated - ascii codes involved + loops etc. Instead of doing this, we use regexp (filter/pattern)
        let pattern = /^\w+$/;            //we make a sjabloon btween /.../. \w+ - 1 or more alphanumeric symbols. ^(carrot) - beginnng, $ - ending position
       
        if (pattern.test(password)){ //.test method checks if the input has \w+ symbols
            return true;
        } else {
            console.log("Password must consist only of letters and digits");           
            return false;
        }
    }

    function checkHas2Digits(){ // here we need again ascii codes otherwise, so let's use regexp again
        let pattern = /\d{2,}/; // d=digit; {minimum,maximum}; if you put just 2 it says: we need just 2 digits

        if(pattern.test(password)){
            return true;
        } else {
            console.log("Password must have at least 2 digits");            
        }

    }

}

passwordValidator('logIn');