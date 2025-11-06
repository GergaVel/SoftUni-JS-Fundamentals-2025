function cutAndReverse(str) {
    let midIndex = str.length / 2;
    let leftHalf = str.slice(0, midIndex).split('').reverse().join('');   //slice() or substring()
    let rightHalf = str.substring(midIndex).split('').reverse().join('');; // we don't need to give end idx
    
    // we can't directly revese a string --> we need an array

    //let leftHalfRevesed = leftHalf.split('').reverse().join('');
    //let rightHalfReversed = rightHalf.split('').reverse().join('');

    console.log(leftHalf);
    console.log(rightHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');