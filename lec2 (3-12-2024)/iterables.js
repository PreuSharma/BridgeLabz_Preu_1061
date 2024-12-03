//Iterables in JavaScript
/*Iterable wo objects hote hain jinko loop ke through traverse (iterate) kiya ja sakta hai, jaise for...of loop ya spread operator ke saath.

Key Points About Iterables:

1.Iterable Objects:
- Array, String, Map, Set, etc. iterable hote hain.
- Inke elements ko ek-ek karke access kiya ja sakta hai.

2.Symbol.iterator:
- Koi bhi object iterable tabhi hota hai jab uske paas ek Symbol.iterator method hota hai.
- Symbol.iterator ek function hai jo iterator object return karta hai.

3.Iterator Object:
- Iterator ek object hota hai jo next() method provide karta hai.
- next() method ek { value, done } object return karta hai:
  - value: Current item ki value.
  - done: true jab iterate karna complete ho jaye.

*/
//Examples of Iterables:
//1. Arrays

const arr = [1, 2, 3];
for (let item of arr) {
  console.log(item); // Output: 1, 2, 3
}
//Array is an iterable, so for...of loop can be used.

//2. Strings
const str = "Hello";
for (let char of str) {
  console.log(char); // Output: H, e, l, l, o
}
//Strings are iterable, so each character can be accessed.

//3. Sets
const set = new Set([1, 2, 3]);
for (let value of set) {
  console.log(value); // Output: 1, 2, 3
}
//Sets are iterable, and duplicate values are ignored.

//4. Maps
const map = new Map([
  ['a', 1],
  ['b', 2]
]);
for (let [key, value] of map) {
  console.log(key, value); // Output: a 1, b 2
}
//Maps are iterable, returning key-value pairs.

/*How Iterables Work Internally
1. Symbol.iterator
Every iterable object implements a special method called Symbol.iterator. This method returns an iterator.
*/

//Example:

const arr1 = [1, 2, 3];
const iterator = arr1[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
//Each call to next() gives the next value and a done status.
/*2.Non-Iterable Objects
By default, normal objects ({}) are not iterable. For example:
*/
/*
const obj1 = { a: 1, b: 2 };
for (key of obj1) {
  console.log(key); // Error: obj is not iterable
}
*/
//Objects can become iterable if we explicitly define a Symbol.iterator.

/*Creating Custom Iterables
You can make your own objects iterable by defining a Symbol.iterator.
*/

//Example:

const customIterable = {
  data: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (let value of customIterable) {
  console.log(value); // Output: 10, 20, 30
}
/*Summary
Iterable: Objects that can be iterated using for...of.
Symbol.iterator: Method that makes an object iterable.
Iterator: Object with next() method that provides { value, done }.
*/