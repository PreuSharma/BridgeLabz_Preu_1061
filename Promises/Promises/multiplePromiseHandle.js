//promise.all : returns when all the promises are res/rej

let promise1=new Promise((res,rej)=>
{
    setTimeout(res,1000,"first promise ")
})

let promise2=new Promise((res,rej)=>
    {
        setTimeout(res,2000,"second promise ")
    })

let promise3=new Promise((res,rej)=>
{
    setTimeout(res,4000,"third promise ")
})
        

Promise.all([promise1,promise2,promise3])
.then((message)=>
{
    console.log("First Message : "+message)
}).catch((error)=>
{
    console.error("error : "+error)
})






// //Promise.race : returns the first res/rej promises
// let promise5=new Promise((res,rej)=>
// {
//     setTimeout(res,1000,"5th promise")
// })
// let promise6=new Promise((res,rej)=>
// {
//     setTimeout(res,2000,"6th promise")
// })
// let promise7=new Promise((res,rej)=>
// {
//     setTimeout(res,4000,"7th promise")
// })

// Promise.race([promise5,promise6,promise7])
// .then((message)=>
// {
//     console.log("Final Message : "+message)
// }).catch((error)=>
// {
//     console.error("Error : "+error);
// })

















/*

Comparison of Promise Methods:

Method	                                            Description
Promise.all	              Waits for all promises to resolve. If one rejects, it fails.
Promise.race               Returns the result of the first settled promise (resolve or reject).
Promise.allSettled	      Waits for all promises to settle (resolve or reject) and gives an array of results.
Promise.any	              Returns the first fulfilled promise. If all reject, it throws AggregateError.
Promise.resolve	          Creates a promise that is immediately resolved with the given value.
Promise.reject	          Creates a promise that is immediately rejected with the given reason.

*/