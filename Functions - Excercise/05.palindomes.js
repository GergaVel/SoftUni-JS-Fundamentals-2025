function palindormesCheck(arr){
    for(let num of arr){
        console.log(isPalindrome(num)); //I go from element to element and each of them get's checked in the second function. 
        
    }
    function isPalindrome(num) {
        let numAsString = String(num); //we need to convert num to a string
        let reversednumAsString = numAsString.split('').reverse().join(''); //here we need an array because we can't reverse a string

        return numAsString === reversednumAsString; //we don;t need to check with if/else because retun gives us back true/faulse as default
    }

}

palindormesCheck([123,323,421,121]);