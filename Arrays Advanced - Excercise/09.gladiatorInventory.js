function gladiatorInventory(arr) {
    let inventory = arr
        .shift()
        .split(' ');

    for (let command of arr){
        let tokens = command.split(' ');
        let action = tokens.shift();
        let equipment = tokens.shift();
    
        
        if (action === 'Buy' && !inventory.includes(equipment)){
           
            inventory.push(equipment);

        } else if (action === 'Trash' && inventory.includes(equipment)){
           
            let index = inventory.indexOf(equipment);
            inventory.splice(index,1);

        } else if (action === 'Repair' && inventory.includes(equipment)){
           
            let index = inventory.indexOf(equipment);
            let repairedEquipment = inventory.splice(index,1)[0];// [0] to make it a string and not to extract it in a new arr
            inventory.push(repairedEquipment);

        } else if (action === 'Upgrade'){ //here we don't use .includes(equipment), because we need to process equipment first
           
            let [item, upgrade] = equipment.split('-');
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    inventory.splice(index + 1, 0, `${item}:${upgrade}`);
                }
        }
    }

        console.log(inventory.join(' '));

    } 
    
    


gladiatorInventory(
    ['SWORD Shield Spear',
     'Buy Bag',
     'Trash Shield','Repair Spear',
     'Upgrade SWORD-Steel']);


