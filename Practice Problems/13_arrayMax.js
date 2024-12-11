//13. Find the maximum number in an array of numbers
let arr=[2,6,3,1,9,55,8,10]
let max=Number.MIN_VALUE;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
console.log(max)