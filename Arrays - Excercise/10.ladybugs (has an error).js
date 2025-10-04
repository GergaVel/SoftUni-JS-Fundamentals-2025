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
        let ladybugIdx = Number(tokens[0]); // from where does the lb starts flying?
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        if (!field[ladybugIdx]){ // if there is no lb on the current index, nothing happens
            continue;
        } 

        field[ladybugIdx] = 0; //from the moment the lb starts flying, this cell is empty = 0 = 'no ladybug'
        
        if (direction === 'left'){
            let newIdx = ladybugIdx - flyLength;
           
            if (newIdx >= 0){
                while (field[newIdx] === 1){ //if there is another lb on the requested position
                    newIdx -= flyLength;
                }

                if (newIdx >= 0){
                field[newIdx] = 1; //update new position 1 in this case is just to say 'yes there is a lb'
                }
            }

        } else {
              let newIdx = ladybugIdx + flyLength;
           
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