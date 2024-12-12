//24. Create a function that will merge two arrays and return the result as a new array
let arr=[1,2,3,4,5]
let brr=[6,7,8,9,10]
let merged=[]
function merge(arr,brr)
{
    for(let i=0;i<arr.length;i++)
    {
        merged.push(arr[i])
    }
    for(let j=0;j<brr.length;j++)
    {
        merged.push(brr[j])
    }
    console.log(merged.length);
    return merged;
}
console.log(merge(arr,brr))
