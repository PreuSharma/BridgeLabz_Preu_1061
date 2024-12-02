/*
Set
What: Stores unique values of any type.

Why: Ensures no duplicates.

When: To manage collections of unique data (e.g., user IDs).
*/
console.log("===========set========");
const set = new Set([1, 2, 3, 3]);
console.log(set); // Output: Set {1, 2, 3}



/*
WeakSet
What: Like Set, but stores weakly-referenced objects.
Why: To avoid preventing garbage collection of objects.
When: To track objects without creating memory leaks.
*/
