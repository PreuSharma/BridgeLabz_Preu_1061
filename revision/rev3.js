//Write a function that returns a promise. The promise should chain multiple operations, 
// and proper error handling should be implemented.

function givePromise(input)
{
    return new Promise((res,rej)=>
    {
        if(typeof input==="number")
        {
            res(input)
        }
        else{
            rej("Input is not a number")
        }
    })
    .then((input)=>
    {
        console.log("Addition of number with 5")
        return input +5;
    })
    .then((input)=>
    {
        console.log("Subtraction of number with 2")
        return input-2;
    })
    .then((input)=>
    {
        console.log("Multiplication of number with 10")
        return input * 10;
    })
    .catch((error)=>
    {
        console.error("Error : "+error);
        throw error;
    });
}

givePromise(5)

    .then((result)=>
    {
        console.log("Final result : "+result)
    })
    .catch((error)=>
    {
        console.log("Error occured : "+error)
})

// givePromise("abc")
// .then((result)=>
// {
//     console.log("Final result : "+result);
// })
// .catch((error)=>
// {
//     console.log("error occured : "+error)
// })