function rotateArray(arr) {
    let rotations = Number(arr.pop()); // last element is the rotation count
    rotations = rotations % arr.length; // optimize rotations

    for (let i = 0; i < rotations; i++) {
        let takenOutEl = arr.pop();   // take last element
        arr.unshift(takenOutEl);      // put it in front
    }

    console.log(arr.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
