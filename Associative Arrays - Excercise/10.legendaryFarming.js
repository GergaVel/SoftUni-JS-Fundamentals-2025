function legendaryFarming(str) {
    let keyMaterialsQty = {
        shards: 0,
        motes: 0,
        fragments: 0
    };
    let junkMaterialsQty = {};
    let materialLegendaries = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath'
    };

    let arr = str.split(' ');

    for (let i = 0; i < arr.length; i +=2){
        let qty = Number(arr[i]);
        let material = arr[i + 1].toLowerCase();

        if (material in keyMaterialsQty){
            keyMaterialsQty[material] += qty;
            
            if(keyMaterialsQty[material] >= 250){
                let legendaryBought = materialLegendaries[material]; //instead of if-else's
                    console.log(`${legendaryBought} obtained!`);
                keyMaterialsQty[material] -= 250;
                break;
            }

        } else {

             if (material in junkMaterialsQty) {
                junkMaterialsQty[material] += qty;
             } else {
                junkMaterialsQty[material] = qty;
             }

        }
    }

    let keyEntries = Object.entries(keyMaterialsQty).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let [key, value] of keyEntries){
        console.log(`${key}: ${value}`);
    }

    let junkEntries = Object.entries(junkMaterialsQty).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of junkEntries){
        console.log(`${key}: ${value}`);        
    }
    
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'); 