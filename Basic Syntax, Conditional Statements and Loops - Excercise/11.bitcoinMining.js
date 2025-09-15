function bitcoinMining(arr){
    let bitcoinsBought = 0;
    let firstBitcoinDay = 0;
    let money = 0;
    let dayCount = 0;

    for (let gold of arr){
        dayCount++;
        if (dayCount % 3 === 0){
            gold *= 0.70;
        }

        money += gold * 67.51;

        while(money >= 11949.16){ //can also be if but then we just buy 1 bitcoin. Imagine you made a milion leva on one day and wanted to buy more coins
            bitcoinsBought++;
            money -= 11949.16;
                if (bitcoinsBought === 1){
                    firstBitcoinDay = dayCount;
                }              
        }
    }

        console.log(`Bought bitcoins: ${bitcoinsBought}`);
        
        if (bitcoinsBought > 0){
            console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
        }

        console.log(`Left money: ${money.toFixed(2)} lv.`)

}
bitcoinMining([100,200,300]);