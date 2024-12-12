//25. Create a function that will receive two arrays of numbers as arguments and 
//return an array composed of all the numbers that are either in the first array or second array 
//but not in both

let arr=[1,2,3,4,5]
let brr=[4,5,6,7,8,9,10]
function mergedArray(arr,brr)
{
   
  const a= arr.filter((item)=>!brr.includes(item))
  const b= brr.filter((item)=>!arr.includes(item))
  let merged=[...a,...b];
    return merged;
}

console.log(mergedArray(arr,brr))