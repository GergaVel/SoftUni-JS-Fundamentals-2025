function spice(sourceYield){
    let days = 0;
    let spiceExtracted = 0;

    while (sourceYield >= 100){
        days++;
        spiceExtracted += sourceYield;
        sourceYield -= 10;

        if(spiceExtracted >= 26) {
            spiceExtracted -= 26;
        }

    }

    if(spiceExtracted >= 26) {
        spiceExtracted -= 26;
    }

    console.log(days);
    console.log(spiceExtracted);
    
    
}

spice(111);