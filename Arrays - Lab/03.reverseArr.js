function reverseArr (n,arr){
    let newArr = [];

    for(let i = 0; i < n; i++){
        let odlArrValue = arr[i];
        newArr[i] = odlArrValue; // to rewrite the new value on the right position.
    }

    let reversed = newArr.reverse();

    console.log(reversed.join(' ')); // otherwise it prints them as a arr [...]
}

reverseArr(4, [-1, 20, 99, 5]);