//30. Create a function that will add two positive numbers of indefinite size. 
// The numbers are received as strings and the result should be also provided as string.

let a="124"
let b="23"
console.log(b)
function add(a,b)
{
    let d=Number(a)
    let e=Number(b)
    let c=d+e;
    let f=String(c);
    console.log(typeof(f))
    console.log(`"${f}"`)
    return f;
}
console.log(add(a,b))