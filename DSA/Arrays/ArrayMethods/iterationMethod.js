//3. Iteration Methods (These are used to loop through an array)
/*
1. forEach(): Executes a provided function once for each array element.

2. map(): Creates a new array with the results of calling a provided function on every element in the array.

3. filter(): Creates a new array with all elements that pass the test implemented by the provided function.

4. reduce(): Executes a reducer function (from left to right) on each element in the array to reduce it to a single value.

5. reduceRight(): Executes a reducer function (from right to left) on each element in the array to reduce it to a single value.

6. some(): Tests whether at least one element in the array passes the provided test.

7. every(): Tests whether all elements in the array pass the provided test.

8. find(): Returns the first element that satisfies the provided testing function.

9. findIndex(): Returns the index of the first element that satisfies the provided testing function.

10. flat(): Creates a new array with all sub-array elements concatenated into it.

11. flatMap(): First maps each element using a mapping function, then flattens the result into a new array.

*/


let arr=[1,2,3,4,5,6,7,8]
//1.forEach
console.log("========ForEach========")
arr.forEach((num)=>console.log(num))

//2.map
console.log("===========map==========")
let m=arr.map((num)=>num*num)
console.log(m);
console.log(arr);

//3.filter
console.log("===========filter=========")
let f=arr.filter((num)=>num%2==0)
console.log(f);

//4.reduce
console.log("============reduce============")
let r=arr.reduce((acc,num)=>acc+num,0)
console.log(r)