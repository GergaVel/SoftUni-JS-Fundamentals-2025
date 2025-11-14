function buildAWall(sectionHeights) {
    let concreteQtys = [];

    while (sectionHeights.some(h => h <30)){
        let dailyConcrete = 0; // to reset in case we have a new day

        for (let index in sectionHeights){
            if (sectionHeights[index] < 30){
                sectionHeights[index]++;
                dailyConcrete += 195;
            }
        }
    
        concreteQtys.push(dailyConcrete);
    }
        console.log(concreteQtys.join(', '));

        let totalConcrete = concreteQtys.reduce((a,b) => a + b, 0);        
      
        console.log(`${totalConcrete * 1900} pesos`);         
}

buildAWall([21, 25, 28]);