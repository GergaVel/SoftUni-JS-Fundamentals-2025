function townInfo(town, population, area) {
    let hasError = false;
    
    if (town.length < 3) {
        console.log("Town name must be at least 3 characters!");
        hasError = true;
    } 
    
    if (population < 0) {
            console.log("Population must be a positive number!");
            hasError = true;
    } 
    
    if (area < 0) {
            console.log("Area must be a positive number!");
            hasError = true
    } 
    
    if (!hasError){
        console.log(`Town ${town} has population of ${population} and area ${area} square km.`);        
    }
       
}

townInfo('Sofia', 1286383, 492);
//townInfo('KA', 3600, -50);
//townInfo('LA', 1481353, 492);