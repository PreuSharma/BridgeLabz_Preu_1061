//OR (||)
let user = null;
let defaultUser = NaN;
let c="Guest";
console.log(user || defaultUser ||c); // Output: "Guest"\

//AND (&&)
let isLoggedIn = true;
let userName = "John";
console.log(isLoggedIn && userName); // Output: "John"

//NOT(!)
let isAvailable = false;
console.log(!isAvailable); // Output: true


//Nullish (??)
let input = null;
let defaultValue = "Default Value";
console.log(input ?? defaultValue); // Output: "Default Value"


//Optional Chaining
let user1 = {
    name: null,
    address: {
        city: "Wonderland"
    }
};

console.log(user1?.name);           // Output: "Alice"
console.log(user1?.address?.city);  // Output: "Wonderland"
console.log(user1?.contact?.email); // Output: undefined (koi error nahi aayega)
// console.log(user1?.name);           // Output: "Alice"
// console.log(user1?.address?.city); 

//understanding
let user2={
    name:"bob",
    address:{
        city:"Delhi"
    }
};

console.log(user2.name);
console.log(user2.address);
console.log(user2.age);