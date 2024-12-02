let students = []; 

function addStudent(name,grade) {
    students.push({name:name,grade:grade});
}

function passOrFail() {
    students.forEach(function(student) {
        if (student.grade>40) {
            console.log(`${student.name} has passed with grade: ${student.grade}`);
        } else {
            console.log(`${student.name} has failed with grade: ${student.grade}`);
        }
    });
}

function passStudents() {
    let passingCount = students.filter(function(student) {
        return student.grade>40;
    }).length;

    console.log(`Total passing students: ${passingCount}`);
}

addStudent("Alice", 75);
addStudent("Bob", 35);
addStudent("Charlie", 50);
addStudent("David", 20);
addStudent("Eva", 90);

passOrFail(); 
passStudents();
