function convertToObj(jsonData){
    let data = JSON.parse(jsonData);

    for (let [key,value] of Object.entries(data)){
        console.log(`${key}: ${value}`);        
    }

}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');