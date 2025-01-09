let user = {};
Object.defineProperty(user, "name", {
  value: "Preu",
  writable: false, // Cannot change
  enumerable: true, // Visible in loops
  configurable: false // Cannot delete
});

console.log(user.name); // Output: "Preu"
user.name = "Riddhi";   // No effect, as writable is false
console.log(user.name); // Output: "Preu"



// JavaScript me properties ke saath flags hote hain jo unka behavior control karte hain:

// writable: Property ko modify karne ki permission.
// enumerable: Property ko loop me show karne ki permission.
// configurable: Property ko delete ya modify karne ki permission.