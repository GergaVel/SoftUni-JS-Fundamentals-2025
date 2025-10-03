function nonDecreasingSubset(arr) {
    let result = [];
    let biggest = arr[0];

    result.push(biggest); // always keep the first element

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        if (current >= biggest) {
            result.push(current);   // keep the number
            biggest = current;      // update biggest
        }
    }

    console.log(result.join(' '));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);


//using the .filter() method
/* function nonDecreasingSubset(arr) {
    let biggest = arr[0];

    let result = arr.filter(num => {
        if (num >= biggest) {
            biggest = num;   // update biggest
            return true;     // keep it
        }
        return false;        // filter out
    });

    console.log(result.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// → 1 3 8 10 12 24
*/