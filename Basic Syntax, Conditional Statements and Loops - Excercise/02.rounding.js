function rounding (num,precision) {
    if (precision > 15){
        precision = 15;
    }

    let fixedNumber = num.toFixed(precision);
    let formatedNumber = parseFloat(fixedNumber);

    console.log(formatedNumber)

}


rounding(10.5,3)