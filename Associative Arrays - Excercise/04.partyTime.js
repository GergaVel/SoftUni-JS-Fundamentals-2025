function party(arr) {
    let partyIndex = arr.indexOf("PARTY");

    let before = arr.slice(0, partyIndex);
    let after = arr.slice(partyIndex + 1);

    let vip = [];
    let regular = [];

    for (let guest of before) {
        if (guest[0] >= '0' && guest[0] <= '9') {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }

    for (let guest of after) {
        let i = vip.indexOf(guest);
        if (i !== -1) {
            vip.splice(i, 1);
            continue;
        }

        let j = regular.indexOf(guest);
        if (j !== -1) {
            regular.splice(j, 1);
        }
    }
    console.log(vip.length + regular.length);
    console.log(vip.join("\n"));
    console.log(regular.join("\n"));
}


party(['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE', 
        'SVQXQCbc', 
        'tSzE5t0p', 
        'PARTY', 
        '9NoBUajQ', 
        'Ce8vwPmE', 
        'SVQXQCbc' 
         ]);