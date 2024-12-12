//18. Print the first 100 prime numbers
function prime(n)
{
    let not_Prime=false;
    if(n==0 ||n==1)
    {
        return false;
    }
    for(let i=2;i<Math.sqrt(n);i++)
    {
        if(n%i==0)
        {
            return false;
        }
    }
    return true;
}

let count=0;
for(let i=1;i<=600;i++)
{
    if(count === 100)
        {
            console.log(count);
            break;
        } 
    if(prime(i)===true)
        {
            console.log(`${i} is prime = ${prime(i)}`);
            count++;
        }      
}
