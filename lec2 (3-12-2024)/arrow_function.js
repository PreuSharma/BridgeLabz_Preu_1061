//Arrow functions JavaScript mein concise way mein functions likhne ka ek modern tariqa hai. Ye ES6 (ECMAScript 2015) ke sath introduce hua. Arrow functions traditional functions ke alternative hain, aur readability aur code simplification ke liye use kiye jaate hain.

//Basic Syntax
//(param1, param2, ..., paramN) => expression

/*Agar ek hi statement hai, to curly braces {} aur return keyword optional hote hain.
Agar koi bhi parameter nahi hai, to parentheses () zaroori hain.
Agar ek hi parameter hai, parentheses optional hain.
*/


//Comparison: Traditional vs Arrow Function

//TRADITIONAL FUNCTION:
console.log("========traditional function=============");
function add(a, b) {
  return a + b;
}
console.log(add(3, 4)); // Output: 7

//ARROW FUNCTION:
console.log("==========arrow function=============");
const add2 = (c, d) => c + d;
console.log(add2(3, 4)); // Output: 7


//Examples of Arrow Functions
//1. Without Parameters
console.log("============without parameter==========");
const greet = () => console.log("Hello, World!");
greet(); // Output: Hello, World!

//2. With One Parameter
console.log("=============with one parameter==========");
const square = (x) => x * x;
console.log(square(5)); // Output: 25
//Parentheses optional hote hain agar ek parameter ho:
const square1 = x => x * x;
console.log(square1(5)); // Output: 25

//3. With Multiple Parameters
console.log("============with multiple parameters=========");
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // Output: 12

//4. Multi-line Function
//Agar function multi-line ho ya multiple statements perform kare:
console.log("===============multi-line function=========");
const sum = (a, b) => {
  const result = a + b;
  return result;
};
console.log(sum(3, 4)); // Output: 7

//Arrow Function Special Features
/*1. Implicit Return
Agar function sirf ek expression ko evaluate kar raha hai, toh return keyword aur curly braces {} ki zarurat nahi hoti.*/
console.log("=============implicit return==========");
const double = num => num * 2; // Directly return karega
console.log(double(5)); // Output: 10

/*2. this Behavior
Arrow functions ka this lexical scope se bind hota hai (parent function ya enclosing context).
Traditional functions mein this runtime pe define hota hai (function ke context ke basis par).*/

//Example (Traditional Function):

function Person() {
  this.age = 0;

  setInterval(function() {
    this.age++; // Error hoga kyunki `this` global object ko refer karega
    console.log(this.age);
  }, 1000);
}

const p = new Person();


//Example (Arrow Function):
function Person2() {
  this.age = 0;

  setInterval(() => {
    this.age++; // `this` lexical context ke hisaab se bind hota hai
    console.log(this.age);
  }, 1000);
}

const q = new Person2();


/*When to Use Arrow Functions?
Use Case                                                      Recommendation
Short, simple functions                                       Use arrow functions
Need of this from parent (lexical)                            Use arrow functions
Dynamic this based on caller context                          Use traditional functions
Object methods	                                              Prefer traditional functions

*/