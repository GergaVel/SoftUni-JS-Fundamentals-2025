//all of these are valid!
//a
function personalInfo(firstName, lastName, age) {
    let person = {
       firstName: firstName,
       lastName: lastName,
       age: age
    }; 

    return person;
}

personalInfo("Peter", "Pan", "20");

//b
function personalInfo(firstName, lastName, age) {
    let person = {};
       person.firstName = firstName;
       person.lastName = lastName;
       person.age = age;

    return person;
}

personalInfo("Peter", "Pan", "20");

//c
function personalInfo(firstName, lastName, age) {
    return {
       firstName,
       lastName,
       age
    };

}

personalInfo("Peter", "Pan", "20");