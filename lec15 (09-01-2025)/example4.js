//garbage collection

//i have a bakkery shop and i need to check the if the cake is present or not
let cake=new WeakSet();

let cake1={name:"chocklate",price:250}
let cake2={name:"red velvet",price:350}

cake.add(cake1);
cake.add(cake2);

// Checking if the cake is present
console.log(cake.has(cake1)); 
console.log(cake.has(cake2)); 

cake1 = null;

console.log(cake.has(cake1));