//bind

let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function () {

        // Here "this" points to nameObj
        console.log(this.name); 
    }
}

//console.log(this.name)

//let HiFun = PrintName.sayHi.bind(nameObj);
let HiFun=PrintName.sayHi;
HiFun();






//call
let nameObj1 = {
    name: "Tony"
}

let PrintName1 = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}

PrintName1.sayHi.call(nameObj1, 42);





//apply
let nameObj2 = {
    name: "Tony"
}

let PrintName2 = {

    name: "steve",
    sayHi: function (...age) {
        console.log(this.name + " age is " + age);
    }
}
PrintName2.sayHi.apply(nameObj2, [42]);


















console.log("==================decorators===============")
function logDecorator(func) {
    return function (...args) {
        console.log(`Calling ${func.name} with arguments:`, args);
        const result = func.apply(this, args); // Original function call
        console.log(`Function ${func.name} returned:`, result);
        return result;
    };
}

function add(a, b) {
    return a + b;
}

// const decoratedAdd = logDecorator(add);
// console.log(decoratedAdd(5, 10));
