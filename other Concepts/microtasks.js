console.log("Start");

setTimeout(() => {
    console.log("Macrotask");
}, 1000);

Promise.resolve().then(() => {
    console.log("Microtask");
},2000);

console.log("End");

// Output:
// Start
// End
// Microtask
// Macrotask
