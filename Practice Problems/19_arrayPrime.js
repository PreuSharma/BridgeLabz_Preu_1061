//19. Create a function that will return in an array the first “p” prime numbers greater than “n”

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


let p=10;
let n=100;

function primeNo(p,n)
{
    let count=0;
    let c=n+1;
    let arr=[];
    for(let i=c;i<=500;i++)
    {
        if(count===p)
        {
            console.log(count);
            break;
        }
        if(prime(i))
        {
            arr.push(i)
            count++;
        }
    }

    return arr;
}
console.log(primeNo(p,n))
