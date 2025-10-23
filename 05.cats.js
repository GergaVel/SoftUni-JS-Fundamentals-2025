function cats(catDataArr){
    class Cat {
        constructor(name, age){ //this.name and this.age are properties that belong to each individual cat.
            this.name = name;
            this.age = age;
        }

        meow(){
            return`${this.name}, age ${this.age} says Meow`;
        }
    }
    
    for (let catData of catDataArr){ //This loop goes through each element of the catDataArr array one by one.
        let parsedData = catData.split(' '); //to separate name from age from the arr

        let catName = parsedData[0]; 
        let catAge = parsedData[1];

        let cat = new Cat (catName, catAge); //create the cat, The constructor runs automatically whenever you create a new Cat object.
        console.log(cat.meow());

    }
}

cats(['Mellow 2', 'Tom 5']); 