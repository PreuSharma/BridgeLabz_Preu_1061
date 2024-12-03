//WeakMap
/*Kya hai?
A collection of key-value pairs, jisme keys sirf objects ho sakti hain.

Syntax:
const myWeakMap = new WeakMap();


Features:
- Keys sirf objects ho sakte hain (primitive keys allowed nahi).
- Automatically garbage collection karta hai.
- Not iterable (forEach ya loops use nahi kar sakte).


Methods:

Method	                                    Description
set(key, value)	                            Naya key-value pair add karega.
get(key)	                                Specific key ka value return karega.
has(key)	                                Check karega key present hai ya nahi.
delete(key)	                                Specific key ko remove karega.

*/
//Example:
let obj1 = { id: 1 };
let obj2 = { id: 2 };

const myWeakMap = new WeakMap();
myWeakMap.set(obj1, 'John');
myWeakMap.set(obj2, 'Doe');

console.log(myWeakMap.get(obj1)); // Output: John

obj1 = null; // Object garbage collected hoga
console.log(myWeakMap.has(obj1)); // false