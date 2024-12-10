const myFunction = function namedFunction() {
    var a=12;
    console.log(a);
};
myFunction()

/*a Named Function Expression (NFE) is a function expression that has a name. 
It’s typically used when you want to give a name to the function within an expression, 
which can help in debugging (by showing the function’s name in stack traces) and 
referencing the function inside itself. */

//example
let factorial=function calfactorial(n)
{
    if(n<=1)
    {
        return 1;
    }
    return n*calfactorial(n-1);
};
console.log(factorial(5))