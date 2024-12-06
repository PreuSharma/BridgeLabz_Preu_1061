//global Scope

let globalVar = "I am a global variable";

function displayGlobalVar() {
    console.log(globalVar);  // Accessible inside the function
}

displayGlobalVar();  // Output: I am a global variable
console.log(globalVar);  // Output: I am a global variable


//function scope

function myFunction() {
    let localVar = "I am inside a function";
    console.log(localVar);  // Accessible inside the function
}

myFunction();  // Output: I am inside a function
//console.log(localVar);  // Error: localVar is not defined


//block scope

if (true) {
    let blockVar = "I am inside a block";
    console.log(blockVar);  // Accessible inside the block
}

//console.log(blockVar);  // Error: blockVar is not defined


//scope chaining
let a = "Global";

function outerFunction() {
    let b = "Outer function";

    function innerFunction() {
        let c = "Inner function";
        console.log(a);  // Accessing global variable
        console.log(b);  // Accessing outer function variable
        console.log(c);  // Accessing inner function variable
    }

    innerFunction();
}

outerFunction();
