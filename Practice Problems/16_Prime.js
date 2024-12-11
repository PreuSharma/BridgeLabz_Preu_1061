//16. Create a function that will return a Boolean specifying if a number is prime

let n=30
not_Prime=false;

if(n==0 ||n==1)
{
    not_Prime=true;
}

for(let i=2;i<Math.sqrt(n);i++)
{
   if(n%i==0)
    {
        not_Prime=true;
        break;
    }
}

if(!not_Prime)
{    
    console.log(`${n} is prime`)
}
else{
    console.log(`${n} is not prime`)
}