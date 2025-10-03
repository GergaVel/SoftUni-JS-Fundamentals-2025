function addAndRemove(arr) {
    let result = [];
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command === 'add') {
            result.push(count);
        } else if (command === 'remove') {
            result.pop();
        }
        count++;
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join(' '));
    }
}

addAndRemove(['add', 'add', 'add', 'add']); // 1 2 3 4
addAndRemove(['remove', 'remove']); // Empty
