/*
IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that is executed as soon as it is defined.

An IIFE allows you to create a private scope for your code, preventing variables from polluting the global namespace.
*/

//syntax
(function () {
    // Code inside IIFE
})();


//example
(function () {
    console.log("This function runs immediately after definition!");
})();

//example2
(function () {
    let message = "Hello, IIFE!";
    console.log(message);
})();

// console.log(message); // Error: message is not defined


//example3
const myModule = (function () {
    let privateVar = "This is private";
    return {
        getPrivate: function () {
            return privateVar;
        }
    };
})();

console.log(myModule.getPrivate()); // "This is private"
