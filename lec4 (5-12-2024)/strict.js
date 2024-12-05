/* 
use strict" in JavaScript
Definition
"use strict" is a special directive in JavaScript that enables strict mode. Strict mode makes JavaScript execution stricter by throwing errors for certain practices that are normally allowed in non-strict mode.
*/ 

//global scope
// b=2;
// console.log(b);
// "use strict"
// a=10;
// console.log(a);


// // function scope
// a=10;
// console.log(a);
// function myFunction() {
//     //abc=10
//     "use strict" 
//     x=10;
//     console.log(x);

//      // Strict mode for this function only
//     y = 20;  // Error: 'y' is not defined
//     console.log(y);
//     z=25;
//     console.log(z);
//   }
  
//   myFunction();
  


"use strict";
let b=10;
console.log(b);
function abc()
{
    c=20;
    console.log(c);
}
abc();


//If you want to use strict mode properly, you should place "use strict" at the very beginning of the function