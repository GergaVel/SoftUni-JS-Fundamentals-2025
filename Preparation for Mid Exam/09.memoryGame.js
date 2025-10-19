function memoryGame(arr) {
    let sequence = arr.shift().split(' ');   

    for (let i = 0; i < arr.length; i++){
        let line = arr[i];
        
       if (line === 'end') {
            console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
            return;
        }

        let [idx1, idx2] = line.split(' ').map(Number);
        
        if (
            idx1 === idx2 || 
            (idx1 < 0 || idx1 >= sequence.length) || 
            (idx2 < 0 || idx2 >= sequence.length)
        ) {
            let middleIndex = Math.floor(sequence.length / 2);
            let penaltyElement = `-${i + 1}a`;
                sequence.splice(middleIndex, 0, penaltyElement, penaltyElement);
                console.log('Invalid input! Adding additional elements to the board');
                continue; 
            }

       if (sequence[idx1] === sequence[idx2]) {
            let matchingEl = sequence[idx1];

            if (idx1 > idx2) {
                sequence.splice(idx1, 1);
                sequence.splice(idx2, 1);
            } else {
                sequence.splice(idx2, 1);
                sequence.splice(idx1, 1);
            }

            console.log(`Congrats! You have found matching elements - ${matchingEl}!`);
        
         if (sequence.length === 0) {
                console.log(`You have won in ${i + 1} turns!`);
                return;
            }

        } else {
            console.log('Try again!');
        }         
    }
}
    

    

memoryGame([ "1 1 2 2 3 3 4 4 5 5", 
             "1 0", 
             "-1 0", 
             "1 0", 
             "1 0", 
             "1 0", 
             "end"]);