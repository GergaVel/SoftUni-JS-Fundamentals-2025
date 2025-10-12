function arrayManipulator(nums, commands) {
    for (let command of commands){
        let tokens = command.split(' ');
        let action = tokens.shift();
        
        if (action === 'add'){
            //<index> <element>
            let index = Number(tokens.shift());
            let el = Number(tokens.shift());

            nums.splice(index, 0, el);

        } else if (action === 'addMany'){
             //<index><element 1> <element 2> … <element n>
            let index = Number(tokens.shift());
            let elements = tokens.map(Number);

            nums.splice(index, 0, ...elements);            
           
        } else if (action === 'contains'){
            //<element>
            let el = Number(tokens.shift());
            let index = nums.indexOf(el);
            console.log(index);           

        } else if (action === 'remove'){
            //<index>
            let index = Number(tokens.shift());
            nums.splice(index, 1);

        } else if (action === 'shift'){
            //<positions>
            let rotations = Number(tokens.shift());

            for (let rotation = 1; rotation <= rotations; rotation++){//starting from 1st rotation not 0
                let firstNumber = nums.shift();
                nums.push(firstNumber);
            }            

        } else if (action === 'sumsPairs'){
            //[]
           let sums = [];

            for (let i = 0; i < nums.length; i += 2){
                let num1 = Number(nums[i]);
                let num2 = Number(nums[i + 1]);

                
                if (num2){
                    sums.push(num1 + num2);
                } else {
                    sums.push(num1);
                }
            }

            nums = sums;
        } else if (action === 'print'){
            //[]
            console.log(`[ ${nums.join(', ')} ]`);           

        }       
    }
}

arrayManipulator(
    [1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);


