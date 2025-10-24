// // 1st version
// function employees(arr) {
//     let result = []; //will keep objs

//     for (let employee of arr){
//         let employeeObj = {
//             name: employee,
//             personalNumber: employee.length
//         };

//         result.push(employeeObj);
//     } 

//    // console.log(result[0].name); // you can acess any type of info
//     result.forEach((em) => {
//         console.log(`Name: ${em.name} -- Personal Number: ${em.personalNumber}`);
        
//     })
// }

// employees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal']);

// //2nd version
// function employees(arr) {
//     class Employee {
//         constructor (name, personalNumber){
//             this.name = name;
//             this.personalNumber = personalNumber;
//         }

//         data() {
//             return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`
//         }
//     }

//     for (let i = 0; i < arr.length; i++){
//         let command = arr[i];
//         let names = command;
//         let namesLength = names.length;

//         let employeeList = new Employee(names, namesLength);
//             console.log(employeeList.data());            
//         }
//     }


// employees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal']);


//3rd version
function employees(arr){
    for (let personName of arr){
        let personObj = {
            name: personName,
            personalNum: personName.length
        };
        console.log(`Name: ${personObj.name} -- Personal Number: ${personObj.personalNum}`);       
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);
