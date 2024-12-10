let arr=[81,2,39,4,5,68,7,8,9]
console.log("=======for loop=====")
for(let a=0;a<arr.length;a++)
{
    console.log(arr[a])
}

console.log("=======while loop======")
let i=0;
while(i<arr.length)
{
    console.log(arr[i]);
    i++;
}

console.log("=========do-while========")
let j=1;
do{
    console.log(j)
    j++;
}
while(j<=arr.length)

console.log("=========for-of=========")
for(let ij of arr)
{
    console.log(ij)
}


console.log("========ForEach========")
arr.forEach((num)=>console.log(num))

console.log("===========map==========")
let m=arr.map((num)=>num*num)
console.log(m);
console.log(arr);

console.log("===========filter=========")
let f=arr.filter((num)=>num%2==0)
console.log(f);

console.log("============reduce============")
let r=arr.reduce((acc,num)=>acc+num,0)
console.log(r)

console.log("==============for-In==========")
for(let key in arr)
{
    console.log(arr[key])
}

console.log("==========for-In (object)==========")
let obj={name:"preu",age:21}
for(let key2 in obj)
{
    console.log(key2,obj[key2])
}

console.log("============map filter--prime========")
let arr2=[1,2,3,4,5,6,7,8]
let m2=arr2.map((num)=>num*7)
console.log(m2)
let f2=m2.filter(isPrime)
console.log(f2)

function isPrime(num)
{
    if(num<=1)
    {
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++)
    {
        if(num%i===0)
        {
            return false;
        }
    }
    return true;
}




console.log("============string length =========")
let m3=arr2.map((num)=>String(num)
)
console.log(m3)
m3.forEach((d)=>console.log(d+" length: "+d.length))

// for(let d=0;d<m3.length;d++)
// {
//     console.log(m3[d].length)
// }

let brr=["preu",21,2004,"",null,{name:"preu",age:21},undefined]
let bool=brr.map(Boolean);
console.log(brr)
console.log(bool)







// let b=String(arr)
// console.log(b)
// console.log(typeof(b))
// console.log(b.length)
