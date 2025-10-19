function theLift(arr) {
    let queue = Number(arr.shift());    
    let maxCapacity = 4;
    let wagons = arr.shift().split(' ').map(Number);

    for (let i = 0; i < wagons.length; i++) {
        let freeSpace = maxCapacity - wagons[i];
        let peopleToAdd = Math.min(freeSpace,queue);

        wagons[i] += peopleToAdd;
        queue -= peopleToAdd;

        if (queue === 0) break;
    }

    let hasEmptySpots = false;
   
    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] < maxCapacity) {
            hasEmptySpots = true;
            break; 
        }
    }

   
    let allFull = true;
    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] < maxCapacity) {
            allFull = false;
            break;
        }
    }

   
    if (queue === 0 && hasEmptySpots) {
        console.log("The lift has empty spots!");
    } else if (queue > 0 && allFull) {
        console.log(`There isn't enough space! ${queue} people in a queue!`);
    }

    console.log(wagons.join(' '));
}             


theLift(['25', '0 2 0']);