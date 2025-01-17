// //with the help of async await we can convert asynchronous code to synchronous behavioural code

// async function getData()
// {
//     setTimeout(()=>
//     {
//         console.log("i am inside set timeout block")
//     },3000)
// }

// // getData();
// let output=getData();
// console.log(output);   //async function hamesha ek promise return krta hai







//fetch API  --returns a JSON (JavaScript Object Notation) jisko hume parse krna pdhta hai to get real data 
import fetch from 'node-fetch';


async function getData2()
{ 
    //get request---async
    let response=await fetch('https://jsonplaceholder.typicode.com/posts')
    //parse json---async
    let data =await response.json();
    console.log(data);
}
getData2();


//senario
//prepare URl/ api endpoint ---sync call
//fetch data --> network call ---async call   //jab tk mera data na aaye tbh tak mai data process na kru , isiliyeh iss line ko await mark krdo
//process data ---sync call