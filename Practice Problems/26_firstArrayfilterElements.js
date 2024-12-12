//26. Create a function that will receive two arrays and will return an array with elements
// that are in the first array but not in the second.

let arr=[1,2,3,4,5]
let brr=[3,5,6,7,8]
function abcd(arr,brr)
{
    let finalArr=[];
    finalArr=arr.filter((item)=>!brr.includes(item))
    
    return finalArr;
}
console.log(abcd(arr,brr))

