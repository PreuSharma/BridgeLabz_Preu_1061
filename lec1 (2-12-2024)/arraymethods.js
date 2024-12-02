/*
What: Built-in methods to manipulate or iterate over arrays.
When: To perform operations like transformation, filtering, or aggregation.
Why: Simplifies handling arrays without manual loops
*/

console.log("======forEach======");
/*
forEach
What: Executes a provided function for each array element.

Why: For simple iterations without modifying the array.

When: To perform actions like logging or side effects.
*/
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));



console.log("=====map=====");
/*
What: Creates a new array by applying a function to each element.

Why: When you need to transform data.

When: To derive a new array from the original one.
*/
const numbers = [1, 2, 3];
const squared = numbers.map((num) => num ** 2);
console.log(squared); // Output: [1, 4, 9]



console.log("======filter======");
/*
What: Creates a new array with elements that pass a test (predicate).

Why: To extract relevant data based on a condition.

When: To filter items (e.g., getting active users).
*/
const ages = [12, 18, 25, 14];
const adults = ages.filter((age) => age >= 18);
console.log(adults); // Output: [18, 25]



console.log("======reduce======");
/*
What: Combines elements of an array into a single value.

Why: To aggregate data like summing numbers or concatenating strings.

When: To compute cumulative results.
*/
const prices = [100, 200, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // Output: 600
