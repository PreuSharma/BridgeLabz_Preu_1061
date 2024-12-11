//11. Calculate the average of the numbers in an array of numbers
let arr=[1,2,3,4,5,6,7,8,9,10]
let sum=arr.reduce((acc,num)=>(acc+num),0)
let average=sum/arr.length;
console.log(average)
