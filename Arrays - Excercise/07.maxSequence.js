function maxSequence(arr) {
    let bestLength = 0;        // longest sequence length
    let bestElement = arr[0];  // the number of that sequence

    for (let i = 0; i < arr.length; i++) {
        let currentLength = 1; // how long the current sequence is
      
        for (let j = i + 1; j < arr.length; j++) {    // check how many times arr[i] repeats
            if (arr[i] === arr[j]) {
                currentLength++;
            } else {
                break; // stop when sequence ends
            }
        }

        if (currentLength > bestLength) {  // update the best sequence if current one is longer
            bestLength = currentLength;
            bestElement = arr[i];
        }
    }


    let result = [];
    for (let k = 0; k < bestLength; k++) {
        result.push(bestElement);
    }

    console.log(result.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);