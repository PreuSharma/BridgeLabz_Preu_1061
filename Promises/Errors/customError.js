////for all the built-in errors , the error object has two main properties: 

// try{
//     Abc   //error variable is not defined
// }
// catch(error)
// {
//     console.log(error.name); 
//     console.log(error.message);   
// }


//how to throw custom errors
//we can throw our own errors using the throw syntax 

try{
    throw new ReferenceError("i am the error")
}
catch(error)
{
    console.log(error.name); 
    console.log(error.message);   
}


