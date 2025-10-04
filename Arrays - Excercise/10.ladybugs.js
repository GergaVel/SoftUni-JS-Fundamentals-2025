 // Given field size | size 3 -> [-,-,-] | size 5 -> [ -,-,-,-,-]
 // No ladybug -> 0 | ladybug -> 1
 // Given initial ladybugs indeces -> size 3, indeces '0 2' -> [1, 0, 1]
 // Commands -> { ladybug index} {direction} {fly length} -> '0 right 2' (ladybug goes 2 steps to the right)  
 //while a lb lands on another lb, it continues flying in the same direction
 // if out of field --> gone

 // ** I think just the indexes and if there is or not a lb is a bit confusing and I need to be very careful


 function ladybugs(arr){
    let filedSize = arr[0];
    let ladybugIdxs = arr[1].split(' ').map(Number); //first turns string into arr but the elements of the arr stay strings. Here comes .map(Number) to convert
 
    //we need to create the field's start state
    let field = []; 

    for(let i = 0; i < filedSize; i++) {
        //how to check if there is a lb or not?
        if (ladybugIdxs.includes(i)){
            field[i] = 1; //there is a lb on that index
        } else {
            field[i] = 0; // there is no lb on that index
        }
    }

    for (let j = 2; j < arr.length; j++){
        let command = arr[j]; //it's a string initially, so we have to break it down
        let tokens = command.split(' ');

        //rename them
        let ladybugIdxs = Number(tokens[0]); // from where does the lb starts flying?
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        if (!field[ladybugIdxs]){ // if there is no lb on the current index, nothing happens
            continue;
        } 

        field[ladybugIdxs] = 0; //from the moment the lb starts flying, this cell is empty = 0 = 'no ladybug'
        
        if (direction === 'left'){
            let newIdx = ladybugIdxs - flyLength;
           
            if (newIdx >= 0){
                while (field[newIdx] === 1){ //if there is another lb on the requested position
                    newIdx -= flyLength;
                }

                if (newIdx >= 0){
                field[newIdx] = 1; //update new position 1 in this case is just to say 'yes there is a lb'
                }
            }

        } else {
              let newIdx = ladybugIdxs + flyLength;
           
            if (newIdx < field.length){
                while (field[newIdx] === 1){                    newIdx += flyLength;
                }

                if (newIdx >= 0){
                field[newIdx] = 1;  
                }
            }

        }

    }   
    console.log(field.join(' '));
     
 }

 ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);