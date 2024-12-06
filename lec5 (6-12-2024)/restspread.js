//rest operator

function abc(... arr)
{
    console.log(arr);
}
abc(1,2,3,4,5);

//spread operator
let arr1=[1,2,3,4];
let arr2=[...arr1,5,6]
console.log(arr2);