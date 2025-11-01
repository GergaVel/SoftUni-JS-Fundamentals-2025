function schoolGrades(input){
    let map = new Map();

    for (let data of input){
        let [studentName, ...grades] = data.split(' '); 
        grades = grades.map(Number); //array of numbers
         
        if (map.has(studentName)){
            let currentGrades = map.get(studentName);
           currentGrades =  currentGrades.concat(grades);
            // for (let grage of grades){
            //     currentGrades.push(grade);
            // }
            
            map.set(studentName, currentGrades);

        } else { 

            map.set(studentName, grades);
        }        
    }
    
   let sorted = Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));

    for (let [name, grades] of sorted) {
        let average = grades.reduce((a, b) => a + b, 0) / grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
} 

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);


