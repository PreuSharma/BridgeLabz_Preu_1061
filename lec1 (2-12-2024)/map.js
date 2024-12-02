/*
Map
What: Stores key-value pairs where keys can be any type.

Why: More flexible than objects for managing dynamic data.

When: To maintain key-value associations.
*/

console.log("===========map==========");
const map = new Map();
map.set("name", "Alice");
map.set("age", 30);
console.log(map.get("name")); // Output: Alice



/*
WeakMap
What: Similar to Map, but keys must be objects and are garbage-collectable.
Why: Useful for memory-efficient object caching.
When: To store metadata about objects.
*/
