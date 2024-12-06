//Polyfills

if (!Array.prototype.includes) {
    Array.prototype.includes = function(value) {
        return this.indexOf(value) !== -1;
    };
}


let arr = [1, 2, 3];
console.log(arr.includes(5)); // Output: true







//transpilers
/*

//ES6 Code
const greet = () => {
    console.log("Hello World!");
};
greet();


//After Transpiling to ES5:
var greet = function() {
    console.log("Hello World!");
};
greet();


*/