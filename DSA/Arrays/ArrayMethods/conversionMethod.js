//Conversion Methods (These help convert arrays to other data structures or representations)
/*
Array.from(): Creates a new array from an iterable or array-like object.

Array.isArray(): Checks whether a value is an array.

toLocaleString(): Returns a localized string representation of the array.
*/

//1.Array.from()
const str="hello";
const array=Array.from(str);
console.log(array); 

//2.Array.isArray()
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray("hello"));  // Output: false
console.log(Array.isArray({}));       // Output: false

//3.tolacaleString()
const array = [1, "hello", new Date()];
console.log(array.toLocaleString());
// Output (varies based on your locale): "1,hello,12/13/2024, 9:25:17 AM"


