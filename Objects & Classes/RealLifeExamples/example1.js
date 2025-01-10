// Created 5students and stored there marks in different subjects

let student1={
    name:"abc",
    age:21,
    university:"chitkara",
    marksInEnglish:90,
    marksInScience:90
}

let student2={
    name:"def",
    age:21,
    university:"chitkara",
    marksInEnglish:80,
    marksInScience:95
}

let student3={
    name:"ghi",
    age:21,
    university:"chitkara",
    marksInEnglish:70,
    marksInScience:90
}

let student4={
    name:"abc",
    age:21,
    university:"chitkara",
    marksInEnglish:82,
    marksInScience:50
}

let student5={
    name:"abc",
    age:21,
    university:"chitkara",
    marksInEnglish:88,
    marksInScience:82
}

//calculate percentage and add the property to student object

function calculatePercentage(students){
    for(let studentMarks of students)
    {
        let totalMarks=studentMarks.marksInEnglish+studentMarks.marksInScience;
        let percentage=(totalMarks/200)*100;
        studentMarks.percentage=`${percentage} %`;
    }
}

let arr=[student1,student2,student3,student4,student5];
calculatePercentage(arr);

console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
console.log(student5)

