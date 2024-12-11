// //17. Calculate the sum of digits of a positive integer number

let n=66;
let sum=0;
let rem=0;
    while(n>0)
    {
         rem=n%10;
        console.log("rem====== ",rem)
        sum+=rem;
        console.log("sum====== ",sum)

        n= Math.floor(n/10);
        console.log("n====== ",n)

    }

console.log(Math.floor(sum))




// let n=254;
// let sum=0;

// while(n!=0)
// {
//     rem=n%10;
//     sum+=rem;
//     n=n/10;
// }
// console.log(Math.floor(sum));
