
/*What: Fundamental building blocks like variables, conditionals, loops, and functions.

When: Always used while writing any script or program.

Why: They form the foundation of any programming logic

*/

console.log("======variables=====");
/* 
a. Variables
What: Containers to store data values.

Why: To hold data that can change (mutable) or remain constant (immutable) during program execution.

When: Whenever you need to store and reuse data.

*/
let name = "John"; // Mutable variable
const age = 25;    // Immutable constant
var city = "Delhi"; // Function-scoped variable (legacy)

console.log(name);
name="Ajay";
console.log(name);

console.log(age);
//age=12;                              //error




console.log("======conditionals=====");
/*
b. Conditionals
What: Statements that control the program flow based on conditions.

Why: To execute different blocks of code depending on input or logic.

When: To implement decision-making.

*/
let score = 85;
if (score > 90) {
    console.log("Grade: A");
} else if (score > 70) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}




console.log("=====loops=====");
/*
c. Loops
What: Repeat a block of code multiple times.

Why: To reduce redundancy and iterate over data.

When: To process arrays, objects, or perform repetitive tasks.
*/

for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
}


console.log("======functions=====");
/*
d. Functions
What: Blocks of reusable code that perform a specific task.

Why: Increases code reusability and modularity.

When: To avoid duplicating logic.
*/
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Alice"));

