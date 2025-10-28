function solve(data){
    let meetings = {};


    for (let entry of data){
        let parsedData = entry.split(' ');
        
        [weekDay,firstName] = parsedData;

        if (meetings.hasOwnProperty(weekDay)){
            console.log(`Conflict on ${weekDay}!`);            
        } else {
            meetings[weekDay] = firstName;    
            console.log(`Scheduled for ${weekDay}`);
                    
        }
    }

    for (let weekDay in meetings){ //weekDay = key; for every weekDay, print this message
        console.log(`${weekDay} -> ${meetings[weekDay]}`);        
    }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);