//Accessor Methods (These don't modify the original array but return a new value)
/*
1. concat(): Merges two or more arrays and returns a new array.

2. includes(): Checks if a specific element exists in the array.

3. indexOf(): Returns the first index of a specified element, or -1 if not found.

4. lastIndexOf(): Returns the last index of a specified element, or -1 if not found.

5. join(): Joins all elements of an array into a string.

6. slice(): Returns a shallow copy of a portion of the array into a new array.

7. toString(): Converts the array to a string and returns it.
*/

let arr=[1,2,3,4,5]
let brr=[6,7,8,9]

//1.concat-array ko merge krta h
let crr=[];
crr=arr.concat(brr)
console.log(crr)


//2.includes-element h ya ni
console.log(arr.includes(4));   //return krta h true/false

//3.indexOf-index return krdega kisi element ka
console.log(arr.indexOf(3))
console.log(arr.indexOf(7))

//4.lastIndexOf-
console.log(arr.lastIndexOf(3))


//5.join()
console.log(arr.join())

//6.slice
console.log(arr.slice(1,3));

//7.toString
console.log(brr.toString())
