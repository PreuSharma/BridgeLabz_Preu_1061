//1. Print numbers from 1 to 10

//1--way
for(let i=1;i<=10;i++)
{
    console.log(i);
}

//2--way
let n=1;
while(n<=10)
{
    console.log(n);
    n++;
}

//3--way
let arr=[1,2,3,4,5,6,7,8,9,10]
//arr.forEach((num)=>console.log(num))
console.log(arr.join(" "))