 function towns(arr) {

    for (let data of arr){
       let parts = data.split('|');
       let name = parts.shift();
       let [longitude, latitude] = parts.map(x => Number(x).toFixed(2))
            
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