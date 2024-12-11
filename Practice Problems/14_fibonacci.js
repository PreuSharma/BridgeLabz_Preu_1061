//14. Print the first 10 Fibonacci numbers without recursion

let a=0;
let b=1;
let c=a+b;
console.log(a);
console.log(b);
console.log(c);
for(let i=4;i<=10;i++)
{
    temp=c;
    c=c+b;
    console.log(c);
    b=temp;
}
