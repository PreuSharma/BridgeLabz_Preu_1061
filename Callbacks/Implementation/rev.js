//Callback ka Example:

// Ek simple callback function
function greeting(name) {
  console.log(`Hello, ${name}!`);
}

// callback ko as argument pass karte hain
function processUserInput(callback) {
  const name = "Aman";
  callback(name); // callback function ko yahan call karte hain
}

processUserInput(greeting);
// Output: Hello, Aman!












//Asynchronous Callback Example:

// setTimeout ek asynchronous function hai
function displayMessage() {
  console.log("This is a callback function!");
}

setTimeout(displayMessage, 2000); // 2 seconds baad callback execute karega
// Output (2 seconds delay ke baad): This is a callback function!









/*
Callback ka use:
Asynchronous tasks: APIs call karna, file system read karna, ya database se data fetch karna.
Event handling: Button click ya user interaction handle karne ke liye.
*/






/*Callback ki dikkat (Callback Hell):
Agar nested callbacks bahut zyada ho jayein, toh code samajhna mushkil ho jata hai. Isko "Callback Hell" kehte hain.

Example of Callback Hell:

*/

setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);



/*Callback Hell ka solution:
Promises
Async/Await
*/