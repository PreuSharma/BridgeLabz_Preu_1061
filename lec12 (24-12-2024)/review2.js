let arr=[1,44,232,72,543,954,3,6,8]
console.log(arr);

function mergesort(arr)
{
    if(arr.length<=1)
    {
        return arr;
    }
    const mid=Math.floor(arr.length/2);
    //console.log(mid)
    const left=mergesort(arr.slice(0,mid));
    //console.log(left);
    const right=mergesort(arr.slice(mid));
    //console.log(right)
    return merge(left,right)
}

function merge(left,right)
{
    let result=[];
    let i=0;
    let j=0;
    while(i<left.length && j<right.length)
    {
        if(left[i]>right[j])
        {
            console.log("i: "+i);
            result.push(left[i]);
            i++;
        }
        else{
            console.log("j: "+j)
            result.push(right[j]); 
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}


let result=mergesort(arr);
console.log(result);

let min=3;
if(min)
{
    console.log(result[min-1])
}
else{
    console.log("no number enetered")
}


let max=3;
if(max)
{
    console.log(result[result.length-max])
}
else{
    console.log("no number enetered")
}

