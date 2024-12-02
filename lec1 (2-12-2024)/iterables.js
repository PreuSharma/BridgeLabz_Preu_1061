/*What: Objects like arrays, strings, or NodeLists that can be looped through using for...of.

Why: To easily access each item without manually handling indices.

When: To process collections sequentially.
*/
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}
