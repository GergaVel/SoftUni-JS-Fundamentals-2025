function fancyBarcodes(input){
    let barcodesCount = Number(input.shift());
    let barcodeRegex = /@#+[A-Z][a-zA-Z0-9]{4,}[A-Z]@#+/;
    let digitRegex = /\d/g;

    for (let barcode of input){
        if (barcodeRegex.test(barcode)){
            let allDigitMatches = barcode.match(digitRegex);
            let result = 'Product group: ';

            if (allDigitMatches !== null){
                result += allDigitMatches.join('');
                console.log(result);
                
            } else {
                result += '00';
                console.log(result);                
            }

        } else {
            console.log(`Invalid barcode`);            
        }
    }    
}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);