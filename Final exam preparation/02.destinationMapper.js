function destinationMapper(str) {
    let pattern = /([=\/])(?<destination>[A-Z][a-zA-Z]{2,})\1/g;
    let travelPoints = 0;
    let finalDestinations = [];
    let matches = Array.from(str.matchAll(pattern));
    

    for (let match of matches){
        let destination = match.groups.destination;
        travelPoints += destination.length;        
        finalDestinations.push(destination);     
    }

   console.log(`Destinations: ${finalDestinations.join(', ')}`);
   console.log(`Travel Points: ${travelPoints}`);    
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");