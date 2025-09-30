function arrayRotation(arr, rotations){

    for(let currentRotation = 1; currentRotation <= rotations; currentRotation++){
       let takenOutEl =  arr.shift();  
       arr.push(takenOutEl);       
    }
    
    console.log(arr.join(' '));
    
    
}

arrayRotation([51, 47, 32, 61, 21], 2);