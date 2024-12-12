//33. Calculate the sum of numbers received in a comma delimited string

let a="1,2,3,45,2"
let no=a.split(",")
let sum=no.reduce((acc,num)=>acc+Number(num),0)  //type convert
console.log(sum)
