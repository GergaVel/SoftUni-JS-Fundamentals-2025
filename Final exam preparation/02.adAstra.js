function adAstra(arr){
    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/g;
    let str = arr.shift(); // bc it's just one string not like in fancyBarcodes for exammple
    let items = [];
    let totalKcals = 0;

    // find matches: matchAll --> strongest! gives detailed info for all matches
    //               match --> gives undetailed info about them all
    //               exec --> gives detailed info but only for 1 match

   let matches = Array.from(str.matchAll(pattern)); //Array.from --> to make it visible
   
   for (let match of matches){ //match.groups --> gives objects, now we need to destruct it
        let { name, expDate, kcal } = match.groups;
        kcal = Number(kcal);
        items.push({ name, expDate, kcal });
        totalKcals += kcal;       
   }

   let days = Math.floor(totalKcals / 2000);
   console.log(`You have food to last you for: ${days} days!`);
   
   for (let item of items){
    console.log(`Item: ${item.name}, Best before: ${item.expDate}, Nutrition: ${item.kcal}`); //very IMPORTANT!! arr.key    
   }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);

    // | or # --> group it as gr 1
    // name: LC, UC, \s (white space)
    // same symbol \1 (gr1)
    // expDate: to look for a '/', we need to esc it by \
    // same symbol \1
    // kcal: \d+ (regex does not undestand numbers but symbols)
    // same symbol \1