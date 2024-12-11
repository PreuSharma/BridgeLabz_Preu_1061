//15. Create a function that will find the nth Fibonacci number using recursion
let n=10;
function Fibonacci(n)
{
    if(n==0)
    {
        return 0;
    }
    if(n==1 || n==2)
    {
        return 1;
    }
    return Fibonacci(n-1)+Fibonacci(n-2);
    
}
for(let i=0;i<n;i++)
{
    console.log(Fibonacci(i));
}