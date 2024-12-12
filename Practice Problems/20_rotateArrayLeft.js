//20. Rotate an array to the left 1 position
let arr=[1,2,3];
let d=4;
console.log(arr);
for(let i=1;i<=d;i++)
{
    let p=arr.shift();
    arr.push(p);
}
console.log(arr);