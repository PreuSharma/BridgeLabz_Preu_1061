//Find the Largest Sum Contiguous Subarray
//Given an integer array, find the contiguous subarray that has the largest sum and return that sum.


let arr=[-2,-3,4,-1,-2,1,5,-3];
console.log(maxSubArraySum(arr)); 

function maxSubArraySum(arr) 
{
    if(arr.length===0) 
    {
        return 0;
    } 
    let maxSoFar=arr[0];
    let currentMax=arr[0];

    for(let i=1;i<arr.length;i++) 
    {
        currentMax=Math.max(arr[i],currentMax+arr[i]);
        maxSoFar=Math.max(maxSoFar,currentMax);
    }

    return maxSoFar;
}

