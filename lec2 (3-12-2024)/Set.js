//Set
/*Kya hai?
- A collection of unique values (duplicate values nahi hote).
- Values kisi bhi type ke ho sakte hain (primitive ya objects).

Syntax:
const mySet = new Set();


Features:
- Duplicate values ko remove karta hai.
- Ordered (insertion order maintain karta hai).
- Iteratable hota hai (loop kar sakte ho).

Methods:
Method	                               Description
add(value)	                           Naya value add karega.
delete(value)	                       Specific value ko remove karega.
has(value)	                           Check karega value present hai ya nahi.
clear()	                               Set ko empty karega.
size	                               Total elements count karega.

*/
//Example:
const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // Output: Set(4) { 1, 2, 3, 4 }

mySet.add(5);
console.log(mySet.has(3)); // true

mySet.delete(2);
console.log(mySet); // Output: Set(4) { 1, 3, 4, 5 }