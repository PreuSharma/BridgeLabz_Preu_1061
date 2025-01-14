// Write a custom object that overrides the valueOf and toString methods 
// to demonstrate the conversion to primitive values.

let customObj={
    name:"preu",
    age:21,

    toString()
    {
        return this.name;
    },

    valueOf()
    {
        return this.age;
    }
}

console.log(String(customObj));
console.log(Number(customObj));

console.log(customObj.toString());
console.log(customObj.valueOf());

