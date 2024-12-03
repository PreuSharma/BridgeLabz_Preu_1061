//Map
/*Kya hai?
A collection of key-value pairs, jisme keys aur values kisi bhi type ke ho sakte hain.

Syntax:
const myMap = new Map();


Features:
- Duplicate keys allowed nahi hote.
- Keys kisi bhi type ke ho sakte hain (e.g., objects, functions).

Methods:

Method	                             Description
set(key, value)	                     Key-value pair add ya update karega.
get(key)	                         Specific key ka value return karega.
has(key)	                         Check karega key present hai ya nahi.
delete(key)	                         Specific key ko remove karega.
clear()	                             Map ko empty karega.
size	                             Total key-value pairs count karega.

*/

//Example:

const myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'One');
myMap.set(true, 'Boolean');

console.log(myMap.get('name')); // Output: John
console.log(myMap.has(1)); // true

myMap.delete('name');
console.log(myMap); // Output: Map(2) { 1 => 'One', true => 'Boolean' }