//optional Chaining

//there is an exam conducted we need to give entry to only those student who have recieved their hallticket 
 
let student1={name:"Ajay",university:"chitkara", hallTicket:"HT110"}
let student2={name:"Aniket", university:"chandigarh"}
let student3={name:"Abhay", university:"chitkara"}
let student4={name:"Rohit", university:"chitkara",hallTicket:"HT113"}
let student5={name:"Riddhi", university:"chitkara", hallTicket:"HT114"}
let student6={name:"Riya", university:"chitkara"}
let student7={name:"Mehak", university:"chitkara",hallTicket:"HT116"}


let arr=[student1,student2,student3,student4,student5,student6,student7]

arr.forEach(student=>{
    if(student.hallTicket?.length > 0) 
    {
      console.log(`${student.name}: Exam Entry Allowed`);
    } 
    else{
      console.log(`${student.name}: Exam Entry Not Allowed`);
    }
});


