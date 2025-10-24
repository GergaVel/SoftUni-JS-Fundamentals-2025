 function towns(arr) {
    for (let townStr of arr){
       let [name, latitude, longitude] = townStr.split('|');
       latitude = Number(latitude).toFixed(2);
       longitude = Number(longitude).toFixed(2);
            
            let cities = {
                town: name,
                latitude: latitude,
                longitude: longitude
            };

        console.log(cities);        
    }
 }

 towns(['Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625']);