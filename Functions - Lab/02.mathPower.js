function mathPower (x,y){
    let result = 1; //if it is 0 it will remain always 0

    for (let i = 0; i < y; i++){
        result *= x;
    }

    console.log(result);
}

mathPower(2,8); 