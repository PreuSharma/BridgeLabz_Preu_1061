/*
Event Loop Simple Explanation
JavaScript ek single-threaded language hai, jo ek time par ek kaam kar sakta hai. Par iska Event Loop mechanism isse asynchronous kaam (like API calls, timers, etc.) karne ki ability deta hai, bina code ko block kiye.

//Kaise Kaam Karta Hai?

Call Stack:
Jo kaam turant karna hai (synchronous), wo yaha hota hai.
Ek-ek kaam stack me aata hai aur khatam hone ke baad nikal jata hai.

Web APIs/Node APIs:
Jab koi asynchronous kaam aata hai (like setTimeout), to wo Web APIs ko diya jata hai.

Task Queue:
Jab asynchronous kaam khatam ho jata hai, uska callback task queue me chala jata hai.

Microtask Queue:
Higher-priority kaam (like Promises) pehle execute hote hain.

Event Loop:
Ye check karta hai ki:
Agar Call Stack khali hai, to Task Queue ya Microtask Queue se kaam uthake execute kare.
*/

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");







/*
Call Stack         Web APIs / Node APIs        Task Queue       Microtask Queue
   |                       |                       |                    |
   |    console.log()      | setTimeout(fn, 0)     | fn (callback)      | promise.then()
   |_______________________|_______________________|____________________|_________________

*/