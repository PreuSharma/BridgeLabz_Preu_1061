let obj={name:"preu",
    age:21,
    greet()
    {
        return `hello ${this.name}`;
    }
}

console.log("Obj Name: "+obj.name)
console.log("Obj Age: "+obj.age);

console.log("============Reference Copying============")

let ref=obj;
console.log("Ref Name: "+ref.name)  
console.log("Ref Age: "+ref.age);
console.log("Ref Greet: "+ref.greet());

ref.name="riddhi";
console.log("Ref Name AfterChange: "+ref.name);  // Output: riddhi (since `ref` is a reference to `obj`)
console.log("Ref Greet AfterChange: "+ref.greet());



console.log("=========Shallow copy==========")

let shallow={...obj};
console.log("Shallow Name : "+shallow.name);
console.log("Shallow Age : "+shallow.age);

shallow.name = "shallow name";
console.log("Shallow Name AfterChange : "+shallow.name); // Output: shallow name
console.log("Obj Name AfterChange : "+obj.name); // Output: riddhi (unchanged because shallow is a new object)

console.log(obj);
console.log(ref)
console.log(shallow);


console.log("=========Deep Copy=======")

let deep=JSON.parse(JSON.stringify(obj))
console.log(deep)

deep.name="gouravi";
deep.age=22;
console.log(deep)
console.log(obj) 
//deep copy me function copy nahi hote agar copy krne hai toh 
// Install Lodash first (Node.js environment)
// npm install lodash
// const _ = require("lodash");

// let deepCopy = _.cloneDeep(obj);
// console.log(deepCopy.greet());

