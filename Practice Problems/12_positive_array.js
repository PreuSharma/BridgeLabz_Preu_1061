//12. Create a function that receives an array of numbers as argument and
// returns an array containing only the positive numbers

let arr=[-1,-2,-56,0,1,2,3,4,-8]
function positiveno(brr)
{
    let positiveNoArr=brr.filter((num)=>num>0)
    return positiveNoArr;
}
console.log(positiveno(arr));
