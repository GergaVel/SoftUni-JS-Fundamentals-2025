function vacation (count, type, day) {
    let singlePrice = 0;

    switch(type){
        case "Students":              
            switch(day){ 
                case "Friday": singlePrice = 8.45; break;
                case "Saturday": singlePrice = 9.80; break;
                case "Sunday": singlePrice = 10.46; break;
            } 
            break;

        case "Business":
             switch(day){ 
                case "Friday": singlePrice = 10.9; break;
                case "Saturday": singlePrice = 15.60; break;
                case "Sunday": singlePrice = 16; break;
            } 
            break;

        case "Regular":
             switch(day){ 
                case "Friday": singlePrice = 15; break;
                case "Saturday": singlePrice = 20; break;
                case "Sunday": singlePrice = 22.5; break;
            } 
            break;
    } 

    let totalPrice = count * singlePrice;

    if (type === "Students" && count >= 30){
        totalPrice *= 0.85;
    } else if (type === "Business" && count >= 100){
        totalPrice = (count-10) * singlePrice;
    } else if (type === "Regular" && (count >= 10 && count <= 20)){
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}


//vacation(30, "Students", "Sunday");
 vacation(40, "Regular", "Saturday");