function movies(arr) {
    let movies = [];

    for (let command of arr){
        if (command.includes('addMovie')){
            //we need another way to split the string than .split('')
            let tokens = command.split('addMovie '); //splits everything after the word inc an empty idx
            let movieName = tokens[1]; //[0] is mepty

            let movieObj = {name: movieName};
            movies.push(movieObj);

        } else if (command.includes('directedBy')){             
            let [movieName, directorName] = command.split(' directedBy '); //don;t forget the whitespace

            let movie = movies.find(movieObj => movieObj.name === movieName); //returns the whole object
           
            if (movie){ //if the movie is found
                movie.director = directorName;
            }

        } else if (command.includes('onDate')){
            let [movieName, date] = command.split(' onDate '); //don;t forget the whitespace

            let movie = movies.find(movieObj => movieObj.name === movieName); //returns the whole object
           
            if (movie){ //if the movie is found
                movie.date = date;
            }            
        }
    }

    for (let movieObj of movies){ //we take each movie, if it includes the full info
        if (movieObj.name && movieObj.director && movieObj.date){
            console.log(JSON.stringify(movieObj));            
        }
    }

}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])