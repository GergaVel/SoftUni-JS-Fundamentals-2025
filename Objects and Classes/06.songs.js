function songs(songsDataArr){
    class Songs {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = songsDataArr[0];

    let allSongs = [];

    for (let i = 1; i <= numberOfSongs; i++){
        let parsedData = songsDataArr[i].split('_');
        
        // let type = parsedData[0];
        // let songName = parsedData[1];
        // let songTime = parsedData[2];
        let [type, songName, songTime] = parsedData; //deconstruct arr JS

        let song = new Songs (type, songName, songTime); //I create a song

        allSongs.push(song); // I add it to the []
    }
        let searchTerm = songsDataArr.pop(); //to extract the last el

        if (searchTerm !== 'all'){
            allSongs = allSongs
                .filter(s => s.typeList === searchTerm);
        }

        let songNames = allSongs.map(s => s.name);

        for (let songName of songNames) { //to print only part of the data
            console.log(songName);             
        }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);