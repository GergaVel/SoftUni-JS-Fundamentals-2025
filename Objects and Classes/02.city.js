function city(input) {
    let keys = Object.keys(input);

    for (let key of keys){
        let value = input[key];

        console.log(`${key} -> ${value}`);        
    }
}

city({name: "Sofia",
      area: 492,
      population: 1238438,
      country: "Bulgaria", 
      postCode: "1000"});   

//shorter
function city(input) {
    let entries = Object.entries(input);

    for (let [key, value] of entries){
        console.log(`${key} -> ${value}`);        
    }
}

city({name: "Sofia",
      area: 492,
      population: 1238438,
      country: "Bulgaria", 
      postCode: "1000"});   