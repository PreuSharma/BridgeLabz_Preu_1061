/*WeakSet
Kya hai?
- A collection of unique objects only (primitive values allowed nahi hain).

Syntax:
const myWeakSet = new WeakSet();


Features:
- Sirf objects ko store kar sakta hai.
- Automatically garbage collection karta hai agar object kahi aur referenced nahi hai.
- Not iterable (forEach ya loops use nahi kar sakte).

Methods:
Method	                            Description
add(value)	                        Object ko add karega.
delete(value)	                    Specific object ko remove karega.
has(value)	                        Check karega object present hai ya nahi.


*/

//Example:
let obj1 = { name: 'John' };
let obj2 = { age: 30 };

const myWeakSet = new WeakSet();
myWeakSet.add(obj1);
myWeakSet.add(obj2);

console.log(myWeakSet.has(obj1)); // true
obj1 = null; // Object garbage collected hoga
