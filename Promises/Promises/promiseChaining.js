//multiple then Block

let promise1=new Promise((res,rej)=>
{
    let success=true;
    if(success)
    {
        res("Promise Fulfilled");
    }
    else{
        rej("Promise rejected")
    }
});

promise1.then((message)=>{
    console.log("First message : "+message)
    return "Second message hai yeh "
}).then((message)=>{
    console.log("Second message : "+ message)
    return "Third message hai yeh"
}).then((message)=>{
    console.log("Third message : "+message)
}).catch((error)=>
{
    console.error(error)
}).finally((message)=>
{
    console.log("Mai toh finally hu mai toh chaluga he ");
    
})























////Multiple Catch Block

// let promise = new Promise((resolve, reject) => {
//     reject("Initial failure");
// });

// promise
//     .catch((error) => {
//         console.error("First catch: ", error);
//         throw new Error("Error propagated to next catch");
//     })
//     .catch((error) => {
//         console.error("Second catch: ", error.message);
//     });