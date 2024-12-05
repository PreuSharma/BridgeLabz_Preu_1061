/*Type Conversions in JavaScript
Definition
Type conversion, ya type coercion, JavaScript me ek process hai jisme ek value ko ek data type se doosre data type me convert kiya jata hai. JavaScript automatic ya manual conversion dono support karta hai.
*/
//Types of Type Conversion:
/*Implicit Type Conversion (Automatic Conversion)
Jab JavaScript apne aap ek type ko doosre type me convert karta hai, bina developer ke intervene kiye. Isse type coercion kehte hain.
*/
//example:
let number = 5;
let text = "Hello";

console.log(number + text); // Output: "5Hello"


/*Explicit Type Conversion (Manual Conversion)
Jab developer khud se type conversion karta hai using functions or methods.
*/
//example:
let num = 10;
let str = String(num); // Explicitly converting number to string
console.log(str); // Output: "10"
console.log(typeof str); // Output: "string"

//example2:
let val = 0;
console.log(Boolean(val)); // Output: false

let val2 = "Hello";
console.log(Boolean(val2)); // Output: true


/*

Falsy vs Truthy Values
JavaScript me kuch values falsy hote hain, jo false ke equal hote hain jab unko boolean me convert kiya jata hai. Ye values hain:

0
"" (empty string)
null
undefined
NaN
Baaki sab values truthy hoti hain (jo true ke barabar hoti hain jab unko boolean me convert kiya jata hai).
*/
