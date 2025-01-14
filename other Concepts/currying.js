//currying - isme ek function ko ek ek krke arguments diyeh jaate hai aur har bar ek naya function return hota hai

function multiply(a)
{
    return function(b)
    {
        return function(c)
        {
            return a*b*c;
        }
    }
}

console.log(multiply(2)(3)(4))

