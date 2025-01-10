//Promises is an object in javascript use to handle asynchronous operations
//Promises has 3state:
//1. Pending  2.Resolve   3. Reject

const promise=new Promise((resolve,reject)=>
{
    let success=true;
    if(success)
    {
        resolve("Work done successfully");
    }
    else{
        reject("Work is incomplete");
    }
});


promise
  .then(result => {
    console.log(result); // Agar success hua toh yeh chalega
  })
  .catch(error => {
    console.log(error); // Agar fail hua toh yeh chalega
  });