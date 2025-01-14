// Write a function that runs multiple promises concurrently and handles the results 
// when all of them are resolved.

function runPromise()
{
    let p=new Promise((res,rej)=>
    {
        let success=true;
        if(success)
        {
            res("resolve hogya")
        }
        else{
            rej("reject hua")
        }
    })

    console.log(p)

    let r=new Promise((res,rej)=>
        {
            let success=true;
            if(success)
            {
                res("resolve hogya 2")
            }
            else{
                rej("reject hua 2")
            }
        })
    
        
        let s=new Promise((res,rej)=>
            {
                let success=true;
                if(success)
                {
                    res("resolve hogya 3")
                }
                else{
                    rej("reject hua 3")
                }
            })
     
            
    return Promise.all([p,r,s])
    .then((result)=>
    {
        console.log("Promises saare resolved h "+result)
    })
    .catch((error)=>
    {
        console.log("error occured : "+error);
    })
}

runPromise()
